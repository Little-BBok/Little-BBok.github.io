# Guestbook email delivery

The active guestbook sends directly to FormSubmit AJAX, addressed to
`leesm5088@naver.com`. It does not require Supabase, repository secrets,
a local database, or Naver credentials. The same route runs in development
and production. The obsolete local-store and Supabase prototype files are
not connected to the active form.

## Activation

1. Send a clearly labelled test note through the widget.
2. Open the FormSubmit confirmation email in the Naver inbox (check spam too)
   and click the activation link. This is required for first-time delivery.
3. Send a second note and confirm that the message reaches the Naver inbox.
   A successful HTTP response proves service acceptance, not inbox delivery.
4. Deploy the verified frontend when requested; repeat delivery confirmation
   from the public origin in case FormSubmit asks to activate that form too.

The UI clears a draft only after an explicit `success: true` or
`success: "true"` service receipt. Rate limits, invalid receipts and failed
requests retain the draft and display an error. Client-side length checks,
a hidden honeypot and the provider's default spam handling remain enabled.
No `_captcha=false` is sent.

Messages include the optional nickname, message, page URL, and a fixed email
subject. Anonymous visitors do not need an email address. The service may
retain submissions according to its terms; no local database is claimed.
Owner activation links must be clicked by the owner; do not silently activate
an external service account on their behalf.

Reference: https://formsubmit.co/documentation and
https://formsubmit.co/ajax-documentation
