"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

type BackButtonProps = {
  /** Where to go if there is no browser history (direct visit, new tab, etc.) */
  fallbackHref?: string
  /** Visible label (set to "" if you want icon-only) */
  label?: string
  className?: string
}

export default function BackButton({
  fallbackHref = "/",
  label = "Back",
  className = "",
}: BackButtonProps) {
  const router = useRouter()

  const onClick = React.useCallback(() => {
    // If the user opened the page directly, history can be too short for "back"
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
      return
    }

    router.push(fallbackHref)
  }, [router, fallbackHref])

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm",
        "text-muted-foreground hover:text-foreground",
        "bg-background ring-1 ring-border/60 hover:ring-border transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      ].join(" ")}
      aria-label={label || "Back"}
    >
      <ArrowLeft className="h-4 w-4" />
      {label ? <span>{label}</span> : <span className="sr-only">Back</span>}
    </button>
  )
}
