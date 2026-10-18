import { useEffect, useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Guestbook } from "./Guestbook";

export function GuestbookWidget({ t }: { t: (text: string) => string }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const ko = t("Resume") === "이력서";

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (!open) { if (element.open) element.close(); return; }
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
    };
  }, [open]);

  return <>
    <button className="guestbook-launcher" type="button" aria-label={ko ? "방명록 열기" : "Open guestbook"} aria-haspopup="dialog" aria-expanded={open} aria-controls="guestbook-dialog" onClick={() => setOpen(true)}>
      <MessageSquare size={21} aria-hidden="true" />
      <span>{ko ? "한 줄 남기기" : "Say hello"}</span>
    </button>
    <dialog id="guestbook-dialog" className="guestbook-dialog" ref={dialog} aria-labelledby="guestbook-dialog-title" onCancel={(event) => { event.preventDefault(); setOpen(false); }} onClose={() => setOpen(false)} onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not(:disabled), input:not(:disabled), textarea:not(:disabled), a[href], [tabindex='0']"))
        .filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setOpen(false);
    }}>
      <div className="guestbook-dialog-header">
        <strong id="guestbook-dialog-title">{ko ? "수민에게 한 줄" : "A note for Sumin"}</strong>
        <button type="button" className="guestbook-close" aria-label={ko ? "방명록 닫기" : "Close guestbook"} onClick={() => setOpen(false)}><X size={20} aria-hidden="true" /></button>
      </div>
      <Guestbook t={t} />
    </dialog>
  </>;
}
