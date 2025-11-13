import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Blog",
  description: "A minimalist developer blog",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('blog-theme') || 'system';
                  const root = document.documentElement;
                  
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="blog-theme">
          <div className="relative min-h-screen">
            {/* Gradient Background - visible on all pages */}
            {/* <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 120, 120, 0.08), transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-0 dark:opacity-100 opacity-0 transition-opacity"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.06), transparent 70%)",
              }}
            /> */}
            {/* Content */}
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
