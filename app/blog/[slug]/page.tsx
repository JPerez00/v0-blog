import { notFound } from "next/navigation"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog"
import BackButton from "@/components/back-button"

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <BackButton fallbackHref="/" />
        </div>

        <article>
          {post.metadata.image && (
            <div className="mb-10 overflow-hidden rounded-lg">
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

          <header className="mb-10">
            <h1 className="mb-4 text-balance text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              {post.metadata.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>{post.metadata.publishedAt}</time>
            </div>
          </header>

          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  )
}
