import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3)

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-20">
          <div className="mb-6 text-xs font-mono uppercase tracking-widest text-muted-foreground/80">
            Portfolio / 2025
          </div>

          <h1 className="mb-6 text-balance text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            <span className="text-foreground">Building what others will call the future...</span>
          </h1>

          <p className="mb-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I'm a developer and writer. I work on web technologies and write about software, design, and the craft of
            building products. Previously at Company.
          </p>

          <div className="mb-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span>Available for consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Canada</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">The Longterm Focus</div>
            <div className="flex flex-wrap gap-2">
              {["AI & ML", "React", "TypeScript", "Next.js", "Node.js", "Python"].map((skill) => (
                <span
                  key={skill}
                  className="bg-muted/40 rounded-full border border-border px-3 py-1 text-xs tracking-wide text-foreground/70 hover:transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80">Recent Writing</h2>
            <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              View all →
            </Link>
          </div>
          <div className="space-y-8">
            {posts.map((post) => (
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
        </section>

        <footer className="mt-24 border-t border-border/40 pt-8">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="https://twitter.com" className="transition-colors hover:text-foreground">
              X
            </Link>
            <Link href="https://github.com" className="transition-colors hover:text-foreground">
              GitHub
            </Link>
            <Link href="mailto:hello@example.com" className="transition-colors hover:text-foreground">
              Email
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
