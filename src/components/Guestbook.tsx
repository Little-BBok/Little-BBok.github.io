import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Check, MessageSquare, Send } from "lucide-react";
import { MESSAGE_LIMIT, NAME_LIMIT, validateGuestbook } from "../lib/guestbook";
import { sendGuestbookMail } from "../lib/guestbookMail";

export function Guestbook({ t }: { t: (text: string) => string }) {
  const ko = t("Resume") === "이력서";
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const payload = validateGuestbook({ name, message, website });
    if (!payload) {
      setStatus("error");
      setError(ko ? "메시지는 1~500자, 닉네임은 40자 이내로 작성해주세요." : "Use 1–500 characters for your message and up to 40 for your name.");
      return;
    }
    sending.current = true;
    setStatus("sending");
    setError("");
    try {
      await sendGuestbookMail(payload, window.location.href);
      setStatus("success");
      setName(""); setMessage("");
    } catch (reason) {
      setStatus("error");
      setError(reason instanceof Error && reason.message === "rate_limit"
        ? (ko ? "잠시 후 다시 남겨주세요." : "Please wait a little before sending another message.")
        : reason instanceof Error && reason.message === "activation_required"
        ? (ko ? "메시지 수신 설정을 준비 중이에요. 내용은 유지되니 잠시 후 다시 시도해주세요." : "Message delivery is being set up. Your text is preserved; please try again later.")
        : (ko ? "전송하지 못했습니다. 내용은 그대로 있으니 잠시 후 다시 시도해주세요." : "Your note could not be sent. Your text is preserved; please try again shortly."));
    } finally {
      sending.current = false;
    }
  }

  return <section className="guestbook" aria-labelledby="guestbook-heading">
    <div className="guestbook-intro">
      <p className="kicker"><MessageSquare size={17} aria-hidden="true" /> {ko ? "방명록" : "GUESTBOOK"}</p>
      <h3 id="guestbook-heading">{ko ? "작은 인사도 반가워요." : "A little hello goes a long way."}</h3>
      <p>{ko ? "둘러보신 소감이나 나누고 싶은 이야기를 남겨주세요. 짧은 한마디도 좋아요." : "Leave a thought, a kind word, or something you would like to share. A short hello is welcome, too."}</p>
      <p className="guestbook-privacy">{ko ? "수민에게만 전달되는 비공개 메시지입니다. 개인정보나 연락처는 적지 않아도 돼요." : "A private note for Sumin. No contact details or personal information needed."}</p>
    </div>
    <form onSubmit={submit} className="guestbook-form">
      <label htmlFor="guestbook-name">{ko ? "닉네임 (선택)" : "Name (optional)"}</label>
      <input id="guestbook-name" name="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={NAME_LIMIT} placeholder={ko ? "어떻게 불러드릴까요?" : "What should I call you?"} disabled={status === "sending"} />
      <label htmlFor="guestbook-message">{ko ? "남기고 싶은 이야기" : "Your note"}</label>
      <textarea id="guestbook-message" name="message" value={message} onChange={(e) => { setMessage(e.target.value); if (status === "success") setStatus("idle"); }} maxLength={MESSAGE_LIMIT} required rows={5} placeholder={ko ? "포트폴리오 잘 보고 갑니다 :)" : "I enjoyed exploring your work :)"} disabled={status === "sending"} aria-describedby="guestbook-status guestbook-count" />
      <div className="guestbook-honeypot" aria-hidden="true"><label htmlFor="guestbook-website">Website</label><input id="guestbook-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></div>
      <span id="guestbook-count" className="guestbook-count">{message.length} / {MESSAGE_LIMIT}</span>
      <button className="button primary" type="submit" disabled={!message.trim() || status === "sending"}>
        {status === "success" ? <Check size={17} /> : <Send size={17} />}
        {status === "sending" ? (ko ? "전달 중…" : "Sending…") : (ko ? "한 줄 남기기" : "Leave a note")}
      </button>
      <div id="guestbook-status" role="status" aria-live="polite">
        {status === "success" && (ko ? "메시지를 접수했어요. 따뜻한 인사 감사합니다!" : "Your note has been submitted. Thank you for saying hello!")}
        {status === "error" && error}
      </div>
    </form>
  </section>;
}
