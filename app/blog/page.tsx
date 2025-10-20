import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="mb-4 text-balance text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Blog
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Thoughts on software, design, and building products.
          </p>
        </header>

        <section>
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
      </div>
    </div>
  )
}
