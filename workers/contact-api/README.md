# Portfolio contact Worker

This independent Cloudflare Worker receives the static portfolio form submission,
checks Turnstile, and uses Resend to send the portfolio owner an email plus a
visitor confirmation. It is deliberately separate from the statically exported
Next.js site.

## Required Worker secrets

Set these in the Cloudflare dashboard or with `wrangler secret put`; do not put
them in Git, browser code, `.env.example`, or this README.

- `RESEND_API_KEY` — API key created in Resend with permission to send email.
- `TURNSTILE_SECRET_KEY` — secret key for the Turnstile widget.
- `CONTACT_TO_EMAIL` — inbox that receives portfolio contact messages.
- `EMAIL_FROM` — sender such as `Portfolio Contact <contact@your-domain.com>`.
  Resend must have verified the sender domain/address first.

`ALLOWED_ORIGINS` is a non-secret Worker variable in `wrangler.toml` and is
restricted to the production portfolio origin. Localhost origins belong only in
the ignored `.dev.vars` file.

## Local development

1. Use Node.js 22 or later, then from this directory run `yarn install`.
2. Copy `.dev.vars.example` to `.dev.vars` and fill it locally. Do not commit it.
3. Run `yarn dev`. The Worker URL printed by Wrangler can be temporarily used as
   `NEXT_PUBLIC_CONTACT_WORKER_URL` in the site’s local `.env.local`.
4. Add your local origin exactly to `ALLOWED_ORIGINS`. Create a Turnstile widget
   whose hostname allow-list includes `localhost` for local testing.

### Test email delivery without Resend

Run `yarn mock:resend` in a second terminal, then `yarn dev` in the first. The
local `.dev.vars` file can set `RESEND_API_URL=http://127.0.0.1:8788/emails` so
both Worker email requests are accepted by the local mock rather than Resend.
Open `http://127.0.0.1:8788/emails` to view received mock messages. Never set
`RESEND_API_URL` in production; omit it so the Worker uses Resend's API.

To temporarily test only the owner notification, set
`SEND_CONFIRMATION_EMAIL=false`. Omit this setting (or set it to `true`) for
the normal two-email production flow.

## Static-site public values

Copy the root `.env.example` to `.env.local` and set only:

- `NEXT_PUBLIC_CONTACT_WORKER_URL` — deployed Worker URL, for example the
  `*.workers.dev` URL assigned by Cloudflare.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — the public Turnstile site key.

These `NEXT_PUBLIC_` values are intentionally exposed in the static JavaScript
bundle. Restart `yarn dev` after changing `.env.local`; production requires a
new static-site build after changing them.

## Deployment and safety notes

The Worker must be deployed independently after secrets are set. This repository
does not deploy it automatically. Configure CORS with exact origins only, keep
the Turnstile secret and Resend key in Worker secrets, and do not use wildcard
origins. Before production, submit one normal form and one request with a filled
`website` honeypot or invalid Turnstile token to confirm rejection.
