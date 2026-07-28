interface Env {
  ALLOWED_ORIGINS: string
  RESEND_API_KEY: string
  TURNSTILE_SECRET_KEY: string
  CONTACT_TO_EMAIL: string
  EMAIL_FROM: string
  RESEND_API_URL?: string
  SEND_CONFIRMATION_EMAIL?: string
}

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
  website?: unknown
  turnstileToken?: unknown
}

const MAX_NAME_LENGTH = 120
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5_000

function corsHeaders(request: Request, env: Env) {
  const origin = request.headers.get("Origin")
  const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map(value =>
    value.trim(),
  )
  if (!origin || !allowedOrigins.includes(origin)) return null

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  }
}

function json(
  body: object,
  status: number,
  cors: Record<string, string> | null,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(cors ?? {}),
    },
  })
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

async function verifyTurnstile(token: string, request: Request, env: Env) {
  const form = new FormData()
  form.set("secret", env.TURNSTILE_SECRET_KEY)
  form.set("response", token)
  const remoteIp = request.headers.get("CF-Connecting-IP")
  if (remoteIp) form.set("remoteip", remoteIp)

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
    },
  )
  const result = (await response.json()) as { success?: boolean }
  return response.ok && result.success === true
}

async function sendEmail(env: Env, email: Record<string, unknown>) {
  const response = await fetch(
    env.RESEND_API_URL ?? "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    },
  )
  return response.ok
}

export default {
  async fetch(request, env): Promise<Response> {
    const cors = corsHeaders(request, env)
    if (!cors) return json({ message: "Origin is not allowed." }, 403, null)
    if (request.method === "OPTIONS")
      return new Response(null, { status: 204, headers: cors })
    if (request.method !== "POST")
      return json({ message: "Method not allowed." }, 405, cors)
    if (!request.headers.get("Content-Type")?.includes("application/json")) {
      return json({ message: "Expected a JSON request." }, 415, cors)
    }

    let payload: ContactPayload
    try {
      payload = await request.json()
    } catch {
      return json({ message: "The request could not be read." }, 400, cors)
    }

    const name = getString(payload.name)
    const email = getString(payload.email)
    const message = getString(payload.message)
    const honeypot = getString(payload.website)
    const turnstileToken = getString(payload.turnstileToken)

    if (honeypot)
      return json(
        { message: "Your submission could not be accepted." },
        400,
        cors,
      )
    if (
      name.length < 2 ||
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      message.length < 10 ||
      message.length > MAX_MESSAGE_LENGTH ||
      !turnstileToken
    ) {
      return json(
        { message: "Please check the form fields and try again." },
        400,
        cors,
      )
    }

    if (!(await verifyTurnstile(turnstileToken, request, env))) {
      return json(
        {
          message:
            "Bot protection could not verify your submission. Please try again.",
        },
        400,
        cors,
      )
    }

    const subject = `Portfolio contact from ${name}`
    const ownerSent = await sendEmail(env, {
      from: env.EMAIL_FROM,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    if (!ownerSent)
      return json(
        {
          message: "We could not send your message. Please try again shortly.",
        },
        502,
        cors,
      )

    if (env.SEND_CONFIRMATION_EMAIL !== "false") {
      const confirmationSent = await sendEmail(env, {
        from: env.EMAIL_FROM,
        to: [email],
        subject: "Thanks for contacting Mark Vital",
        text: `Hi ${name},\n\nThanks for getting in touch. Your message has been received and Mark will reply as soon as possible.\n\nBest,\nMark Vital`,
      })
      if (!confirmationSent)
        return json(
          {
            message:
              "Your message was received, but we could not send the confirmation email.",
          },
          502,
          cors,
        )
    }

    return json({ message: "Your message has been sent." }, 200, cors)
  },
} satisfies ExportedHandler<Env>
