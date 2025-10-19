import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3) // Show only 3 most recent posts

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">Your Name</h1>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I'm a developer and writer. I work on web technologies and write about software, design, and the craft of
            building products. Previously at Company. I've been coding for 10 years and writing for the second half.
          </p>
        </header>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Recent Writing</h2>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          </div>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block transition-opacity hover:opacity-70">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-4">
                    <h3 className="text-lg font-medium text-foreground group-hover:underline">{post.metadata.title}</h3>
                    <time className="shrink-0 text-sm text-muted-foreground">{post.metadata.publishedAt}</time>
                  </div>
                  {post.metadata.summary && (
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{post.metadata.summary}</p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-border pt-8">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="https://twitter.com" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
              Email
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
