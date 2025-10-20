"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60">
            <span className="text-foreground">Your</span> <span className="text-muted-foreground">Name</span>
          </Link>

          <nav className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href === "/blog" && pathname?.startsWith("/blog"))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-1 h-8 w-8 transition-colors hover:bg-muted"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
