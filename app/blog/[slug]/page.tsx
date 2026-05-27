import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-posts"

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
    <main className="min-h-screen bg-[#080817] text-white">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-violet-400/30 px-5 py-3 text-sm font-medium text-violet-200 transition hover:border-violet-300 hover:text-white"
          >
            ← Back to blog
          </Link>

          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-violet-300 hover:text-white"
          >
            Back to home
          </Link>
        </div>

        <div className="mb-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
            {post.category}
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {post.description}
          </p>

          <time
            dateTime={post.date}
            className="mt-5 block text-sm text-slate-500"
          >
            Published on {post.date}
          </time>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-200">
          {paragraphs.map((paragraph, index) => {
            if (paragraph.endsWith(":")) {
              return (
                <h2
                  key={index}
                  className="pt-8 text-2xl font-semibold text-white"
                >
                  {paragraph}
                </h2>
              )
            }

            return <p key={index}>{paragraph}</p>
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-violet-400/30 bg-violet-500/10 p-8">
          <h2 className="text-2xl font-semibold">
            Want to help shape Mirror?
          </h2>

          <p className="mt-3 text-slate-300">
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
  className="mt-6 inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
>
  Join the waitlist
</button>
        </div>
      </article>
    </main>
  )
}
