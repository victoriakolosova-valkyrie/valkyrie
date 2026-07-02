import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mirror Blog | AI Smart Mirror, Emotional AI and Voice-First Presence",
  description:
    "Insights about AI smart mirrors, emotional AI, voice-first interfaces, privacy, memory controls, and the future of AI presence.",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 45% at 50% 0%, rgba(212, 175, 55, 0.10), transparent),
              radial-gradient(ellipse 55% 35% at 80% 35%, rgba(139, 92, 246, 0.10), transparent),
              radial-gradient(ellipse 45% 35% at 15% 70%, rgba(192, 192, 200, 0.07), transparent)
            `,
          }}
        />

        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-16 text-center">
            <Link
              href="/"
              className="mb-10 inline-flex rounded-full border border-border px-5 py-3 text-sm font-light text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              ← Back to home
            </Link>

            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
              Mirror Journal
            </p>

            <h1 className="mx-auto max-w-5xl font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Thoughts on AI presence,
              <br />
              smart mirrors and
              <br />
              <span className="italic text-primary">
                emotional technology.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Articles about the future of AI smart mirrors, voice-first
              emotional interfaces, memory, privacy, and the rituals that make
              technology feel more human.
            </p>

            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-[2rem] border border-border/40 bg-card/30 p-7 shadow-2xl shadow-primary/5 backdrop-blur-sm transition hover:border-primary/40 hover:bg-card/50"
              >
                <div className="mb-6 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-primary">{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                <h2 className="font-serif text-3xl font-light leading-tight text-foreground">
                  {post.title}
                </h2>

                <p className="mt-5 text-base font-light leading-7 text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-primary/30 px-3 py-1 text-xs font-light text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
