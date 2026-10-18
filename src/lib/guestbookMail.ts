export const GUESTBOOK_MAIL_ENDPOINT = "https://formsubmit.co/ajax/leesm5088@naver.com";

export async function sendGuestbookMail(
  note: { name: string; message: string },
  pageUrl: string,
  request: typeof fetch = fetch,
): Promise<void> {
  const response = await request(GUESTBOOK_MAIL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: note.name || "Anonymous visitor",
      message: note.message,
      page: pageUrl,
      _subject: "[Sumin Portfolio] 새로운 방명록 메시지",
      _template: "table",
      _honey: "",
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (response.status === 429) throw new Error("rate_limit");
  const result = await response.json().catch(() => null);
  if (typeof result?.message === "string" && /needs activation/i.test(result.message)) {
    throw new Error("activation_required");
  }
  if (!response.ok || (result?.success !== true && result?.success !== "true")) {
    throw new Error("send_failed");
  }
}
