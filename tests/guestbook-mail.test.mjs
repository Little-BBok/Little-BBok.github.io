import { test } from "node:test";
import assert from "node:assert/strict";
import { sendGuestbookMail, GUESTBOOK_MAIL_ENDPOINT } from "../src/lib/guestbookMail.ts";

test("mail sends notes to the configured Naver inbox without local database credentials", async () => {
  let captured;
  await sendGuestbookMail({ name: "Visitor", message: "Hello" }, "https://little-bbok.github.io/#/about", async (url, options) => {
    captured = { url, options };
    return new Response(JSON.stringify({ success: "true" }));
  });
  assert.equal(captured.url, GUESTBOOK_MAIL_ENDPOINT);
  const body = JSON.parse(captured.options.body);
  assert.equal(body.message, "Hello");
  assert.equal(body.name, "Visitor");
  assert.equal(body.page, "https://little-bbok.github.io/#/about");
  assert.equal(body._honey, "");
  assert.ok(!("_captcha" in body));
});
test("anonymous notes and boolean success receipts are accepted", async () => {
  await sendGuestbookMail({ name: "", message: "Hello" }, "https://little-bbok.github.io", async (_, options) => {
    assert.equal(JSON.parse(options.body).name, "Anonymous visitor");
    return new Response(JSON.stringify({ success: true }));
  });
});
test("mail never claims success on rejection, unexpected HTML, missing receipts or network errors", async () => {
  await assert.rejects(sendGuestbookMail({ name:"", message:"Hello" }, "https://little-bbok.github.io", async () => new Response(JSON.stringify({success:"false",message:"This form needs Activation. We've sent you an email."}))), {message:"activation_required"});
  for (const response of [new Response("<html>Not a receipt</html>"), new Response('{}'), new Response('{"success":false}'), new Response('{"success":"false"}'), new Response('{"success":true}', { status: 500 })]) {
    await assert.rejects(sendGuestbookMail({ name:"", message:"Hello" }, "https://little-bbok.github.io", async () => response), { message:"send_failed" });
  }
  await assert.rejects(sendGuestbookMail({ name:"", message:"Hello" }, "https://little-bbok.github.io", async () => new Response('{}', { status:429 })), { message:"rate_limit" });
  await assert.rejects(sendGuestbookMail({ name:"", message:"Hello" }, "https://little-bbok.github.io", async () => { throw Error("network"); }));
});
