import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3)

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="mb-4 text-balance text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            <span className="text-foreground">Your</span> <span className="text-muted-foreground">Name</span>
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I'm a developer and writer. I work on web technologies and write about software, design, and the craft of
            building products. Previously at Company.
          </p>
        </header>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Recent Writing</h2>
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
              Twitter
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
