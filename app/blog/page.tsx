"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getBlogPosts()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.metadata.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <div className="mb-6 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
            Blog / Writings
          </div>
          <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Blog</h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Thoughts on software, design, and building products.
          </p>

          {/* Search Bar */}
          <div className="mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 pl-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-muted-foreground/50 focus:ring-0"
              />
            </div>
          </div>
        </header>

        <section>
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground">
              No posts found matching "{searchQuery}"
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-4">
                      <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground transition-opacity group-hover:opacity-60">
                        {post.metadata.title}
                      </h3>
                      <time className="shrink-0 text-sm text-muted-foreground">{post.metadata.publishedAt}</time>
                    </div>
                    {post.metadata.summary && (
                      <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                        {post.metadata.summary}
                      </p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
