"use client"

import { FormEvent, useEffect, useId, useRef, useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          "error-callback": () => void
          "expired-callback": () => void
        },
      ) => string
      reset: (widgetId?: string) => void
    }
  }
}

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>

const workerUrl = process.env.NEXT_PUBLIC_CONTACT_WORKER_URL
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

function validate(values: { name: string; email: string; message: string }) {
  const errors: FieldErrors = {}

  if (values.name.trim().length < 2) errors.name = "Please enter your name."
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters."
  }

  return errors
}

export function ContactForm() {
  const formId = useId()
  const turnstileContainer = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | undefined>(undefined)
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [turnstileToken, setTurnstileToken] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [statusMessage, setStatusMessage] = useState("")

  useEffect(() => {
    return () => {
      widgetId.current = undefined
    }
  }, [])

  function renderTurnstile() {
    if (
      !turnstileSiteKey ||
      !turnstileContainer.current ||
      !window.turnstile ||
      widgetId.current
    )
      return

    widgetId.current = window.turnstile.render(turnstileContainer.current, {
      sitekey: turnstileSiteKey,
      callback: token => setTurnstileToken(token),
      "error-callback": () => {
        setTurnstileToken("")
        setStatus("error")
        setStatusMessage(
          "Bot protection could not load. Please refresh the page and try again.",
        )
      },
      "expired-callback": () => setTurnstileToken(""),
    })
  }

  function updateField(field: keyof typeof values, value: string) {
    setValues(current => ({ ...current, [field]: value }))
    if (field !== "website")
      setErrors(current => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("idle")
    setStatusMessage("")

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    if (!workerUrl || !turnstileSiteKey) {
      setStatus("error")
      setStatusMessage(
        "This contact form has not been configured yet. Please try again later.",
      )
      return
    }
    if (!turnstileToken) {
      setStatus("error")
      setStatusMessage(
        "Please complete the bot-protection check before sending your message.",
      )
      return
    }

    setStatus("loading")
    setStatusMessage("Sending your message…")

    try {
      const response = await fetch(workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken }),
      })
      const body: unknown = await response.json().catch(() => null)
      const message =
        typeof body === "object" &&
        body &&
        "message" in body &&
        typeof body.message === "string"
          ? body.message
          : "We could not send your message. Please try again shortly."

      if (!response.ok) throw new Error(message)

      setValues({ name: "", email: "", message: "", website: "" })
      setTurnstileToken("")
      window.turnstile?.reset(widgetId.current)
      setStatus("success")
      setStatusMessage(
        "Thanks — your message has been sent. Please check your inbox for a confirmation.",
      )
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again shortly.",
      )
      window.turnstile?.reset(widgetId.current)
      setTurnstileToken("")
    }
  }

  const isSubmitting = status === "loading"

  return (
    <form className="mb-8 space-y-5" noValidate onSubmit={handleSubmit}>
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={renderTurnstile}
        />
      ) : null}
      <div>
        <label className="mb-2 block font-bold" htmlFor={`${formId}-name`}>
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={event => updateField("name", event.target.value)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          aria-invalid={Boolean(errors.name)}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[#644ba040]"
          required
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-red-700" id={`${formId}-name-error`}>
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block font-bold" htmlFor={`${formId}-email`}>
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={event => updateField("email", event.target.value)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          aria-invalid={Boolean(errors.email)}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[#644ba040]"
          required
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-700" id={`${formId}-email-error`}>
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label className="mb-2 block font-bold" htmlFor={`${formId}-message`}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={7}
          value={values.message}
          onChange={event => updateField("message", event.target.value)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          aria-invalid={Boolean(errors.message)}
          className="w-full resize-y rounded-md border border-neutral-300 px-3 py-2 outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[#644ba040]"
          required
        />
        {errors.message ? (
          <p
            className="mt-1 text-sm text-red-700"
            id={`${formId}-message-error`}
          >
            {errors.message}
          </p>
        ) : null}
      </div>
      <div
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={event => updateField("website", event.target.value)}
        />
      </div>
      <div ref={turnstileContainer} />
      <div aria-live="polite" role={status === "error" ? "alert" : undefined}>
        {statusMessage ? (
          <p
            className={
              status === "error"
                ? "text-red-700"
                : status === "success"
                  ? "text-green-800"
                  : "text-neutral-600"
            }
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
      <div className="flex justify-center pt-1">
        <Button
          className="h-12 border-[var(--accent)] bg-[var(--accent)] px-6 text-base text-white hover:bg-[#513d82] hover:text-white active:bg-[#2c2060] focus-visible:ring-[var(--accent)]"
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  )
}
