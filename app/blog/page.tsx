import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-posts"

export const metadata = {
  title: "Mirror Blog | AI Smart Mirror, Emotional AI and Voice-First Presence",
  description:
    "Insights about AI smart mirrors, emotional AI, voice-first interfaces, privacy, memory controls, and the future of AI presence.",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-[#080817] text-white">
      <a
  href="/"
  className="mb-10 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-300 hover:text-violet-200"
>
  ← Back to home
</a>
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
            Mirror Journal
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Thoughts on AI presence, smart mirrors and emotional technology.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Articles about the future of AI smart mirrors, voice-first emotional
            interfaces, memory, privacy, and the rituals that make technology
            feel more human.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-400/60 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex items-center justify-between gap-4 text-sm text-slate-400">
                <span>{post.category}</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>

              <h2 className="text-2xl font-semibold leading-tight">
                {post.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-300">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-violet-400/30 px-3 py-1 text-xs text-violet-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
