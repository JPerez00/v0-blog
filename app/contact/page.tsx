"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { sendEmail, type SendEmailState } from "@/app/actions/send-email"
import { useEffect, useRef } from "react"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useActionState<SendEmailState, FormData>(sendEmail, null)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <div className="mb-6 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
            Contact / Get in Touch
          </div>
          <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Contact
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        <section className="max-w-md">
          <form ref={formRef} action={formAction} className="space-y-6">
            {/* Honeypot field - hidden from users, catches bots */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0"
            />

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-muted-foreground/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-muted-foreground/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-muted-foreground/50"
              />
            </div>

            {/* Status message */}
            {state && (
              <div
                className={`rounded-lg px-4 py-3 text-sm ${
                  state.success
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {state.message}
              </div>
            )}

            <SubmitButton />
          </form>
        </section>
      </div>
    </div>
  )
}
