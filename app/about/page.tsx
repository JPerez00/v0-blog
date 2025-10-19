import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">About</h1>
        </header>

        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-pretty leading-relaxed text-foreground">
            I'm a developer and writer passionate about building elegant software and sharing what I learn along the
            way.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-foreground">Background</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I've been writing code for over a decade, working on everything from small startups to large-scale
            applications. My focus is on creating intuitive user experiences and maintainable codebases.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-foreground">What I Write About</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            On this blog, I share my thoughts on software development, design principles, and the craft of building
            products. I believe in learning in public and sharing knowledge with the community.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-foreground">Connect</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Feel free to reach out if you'd like to discuss technology, collaborate on a project, or just say hello.
          </p>

          <div className="mt-8 flex gap-6 text-sm">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
