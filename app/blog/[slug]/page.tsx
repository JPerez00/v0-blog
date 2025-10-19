import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <article>
          {post.metadata.image && (
            <div className="mb-8 overflow-hidden rounded-lg bg-muted">
              <Image
                src={post.metadata.image || "/placeholder.svg"}
                alt={post.metadata.title}
                width={1600}
                height={900}
                className="aspect-video w-full object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {post.metadata.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>{post.metadata.publishedAt}</time>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>

        <footer className="mt-16 border-t border-border pt-8">
          <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← Back to home
          </Link>
        </footer>
      </div>
    </div>
  )
}
