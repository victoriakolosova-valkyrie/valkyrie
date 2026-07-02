import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

type BlogArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article not found | Mirror",
    }
  }

  return {
    title: `${post.title} | Mirror`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://smartmirror.space/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const paragraphs = post.content
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-32">
        {/* Background glow */}
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

        <article className="mx-auto max-w-4xl px-6 pb-24">
          <div className="mb-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-primary/30 px-5 py-3 text-sm font-light text-primary transition hover:border-primary/60 hover:bg-primary/10"
            >
              ← Back to blog
            </Link>

            <Link
              href="/"
              className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-light text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              Back to home
            </Link>
          </div>

          <header className="mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
              {post.category}
            </p>

            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              {post.description}
            </p>

            <time
              dateTime={post.date}
              className="mt-6 block text-xs uppercase tracking-[0.25em] text-muted-foreground/70"
            >
              Published on {post.date}
            </time>

            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </header>

          <div className="rounded-[2rem] border border-border/40 bg-card/30 p-6 shadow-2xl shadow-primary/5 backdrop-blur-sm md:p-10">
            <div className="space-y-7 text-lg font-light leading-8 text-muted-foreground md:text-xl md:leading-9">
              {paragraphs.map((paragraph, index) => {
                if (paragraph.endsWith(":")) {
                  return (
                    <h2
                      key={index}
                      className="pt-8 font-serif text-3xl font-light text-foreground md:text-4xl"
                    >
                      {paragraph}
                    </h2>
                  )
                }

                return <p key={index}>{paragraph}</p>
              })}
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center shadow-2xl shadow-primary/10 backdrop-blur-sm md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
              Mirror, Mirror
            </p>

            <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
              Want to help shape Mirror?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-7 text-muted-foreground">
              Join the waitlist and become one of the first people to test a
              voice-first AI presence for the home.
            </p>

            <button
              type="button"
              data-tally-open="Zj1yR0"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-hide-title="1"
              data-tally-hidden-fields="source=website,page=blog_article,campaign=blog_cta"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
            >
              Join the waitlist
            </button>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
