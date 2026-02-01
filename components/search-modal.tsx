"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, X, FileText } from "lucide-react"
import { getBlogPosts, type BlogPost } from "@/lib/blog"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const router = useRouter()
  
  // Memoize posts to prevent recreation on every render
  const posts = useMemo(() => getBlogPosts(), [])

  // Derive results from query - no need for separate state and useEffect
  const results = useMemo(() => {
    if (!query.trim()) return []
    
    const lowerQuery = query.toLowerCase()
    return posts.filter(
      (post) =>
        post.metadata.title.toLowerCase().includes(lowerQuery) ||
        post.metadata.summary?.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery)
    )
  }, [query, posts])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleSelect = (slug: string) => {
    router.push(`/blog/${slug}`)
    onClose()
    setQuery("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative mx-auto mt-[20vh] max-w-xl px-4">
        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
          {/* Search input */}
          <div className="flex items-center border-b border-border px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent px-3 py-4 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <button
              onClick={onClose}
              className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {query && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                No results found for "{query}"
              </div>
            )}

            {results.length > 0 && (
              <ul className="py-2">
                {results.map((post) => (
                  <li key={post.slug}>
                    <button
                      onClick={() => handleSelect(post.slug)}
                      className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted"
                    >
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-foreground">
                          {post.metadata.title}
                        </div>
                        {post.metadata.summary && (
                          <div className="mt-0.5 truncate text-xs text-muted-foreground">
                            {post.metadata.summary}
                          </div>
                        )}
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {post.metadata.publishedAt}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {!query && (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                Start typing to search posts...
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t border-border px-4 py-2">
            <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
                ESC
              </kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
