"use server"

import { Resend } from "resend"
import { contactFormSchema, type ContactFormData } from "@/lib/schema"
import { EmailTemplate } from "@/components/email-template"

// Validate env vars at startup
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.warn("RESEND_API_KEY is not set. Contact form will not work.")
}

const resend = new Resend(resendApiKey)

export type SendEmailState = {
  success: boolean
  message: string
} | null

export async function sendEmail(
  _prevState: SendEmailState,
  formData: FormData
): Promise<SendEmailState> {
  // Check for honeypot (spam protection)
  const honeypot = formData.get("honeypot") as string
  if (honeypot) {
    return {
      success: false,
      message: "Bot detected",
    }
  }

  const rawData: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    honeypot: honeypot || "",
  }

  // Validate with Zod
  const result = contactFormSchema.safeParse(rawData)
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0]?.message || "Invalid form data",
    }
  }

  const { name, email, message } = result.data

  // Check if RESEND_API_KEY is set
  if (!resendApiKey) {
    return {
      success: false,
      message: "Email service is not configured. Please try again later.",
    }
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "delivered@resend.dev",
      replyTo: email,
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      }
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Send email error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
