import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-20">
          <div className="mb-6 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">About / Info</div>
          <h1 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">About</h1>
        </header>

        <div className="space-y-16">
          <section className="grid gap-8 md:grid-cols-[1fr,200px] md:gap-12">
            <div>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                I'm a developer and writer passionate about artificial intelligence, machine learning, and building
                elegant software. I share what I learn along the way through this blog.
              </p>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/50 md:w-full">
              <Image
                src="/professional-developer-portrait-minimalist-black-a.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">Background</h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              I've been writing code for over a decade, with a focus on AI and machine learning applications. I work on
              everything from experimental ML models to production-scale AI systems, always striving to create intuitive
              user experiences backed by intelligent algorithms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
              What I Write About
            </h2>
            <div className="space-y-4">
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                On this blog, I share my thoughts on artificial intelligence, machine learning techniques, neural
                networks, and the practical applications of AI in software development.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Machine Learning",
                  "Neural Networks",
                  "AI Applications",
                  "Software Architecture",
                  "Developer Tools",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border/50 px-3 py-1 text-xs tracking-wide text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground/60">Connect</h2>
            <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground">
              Feel free to reach out if you'd like to discuss technology, collaborate on a project, or just say hello.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="https://twitter.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </Link>
              <Link href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">
                GitHub
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
