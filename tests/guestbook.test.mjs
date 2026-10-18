import { test } from "node:test";
import assert from "node:assert/strict";
import { validateGuestbook } from "../src/lib/guestbook.ts";

test("notes trim whitespace and allow an optional name", () => {
  assert.deepEqual(validateGuestbook({ message: " hello " }), { name: "", message: "hello" });
  assert.deepEqual(validateGuestbook({ name: " 수민 ", message: " 반가워요 " }), { name: "수민", message: "반가워요" });
});
test("validation rejects empty, overlong, malformed and honeypot input", () => {
  for (const value of [null, [], {}, { message: " " }, { message: 1 }, { message: "x".repeat(501) }, { name: "x".repeat(41), message: "hello" }, { message: "hello", website: "spam" }]) assert.equal(validateGuestbook(value), null);
  assert.ok(validateGuestbook({ name: "x".repeat(40), message: "x".repeat(500) }));
});
