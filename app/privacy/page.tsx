import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Mirror",
  description:
    "Privacy Policy for Mirror, a voice-first AI smart mirror and emotional presence object for the home.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080817] text-white">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="mb-10 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-violet-300 hover:text-violet-200"
        >
          ← Back to home
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
          Mirror
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-slate-300">
          Last updated: May 2026
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-200">
          <p>
            Mirror is a voice-first AI smart mirror designed to listen, reflect,
            and help people hear themselves more clearly. Because Mirror may
            involve personal conversations, voice interaction, beta testing,
            waitlist forms, and product feedback, privacy and data protection are
            important parts of the product from the beginning.
          </p>

          <p>
            This Privacy Policy explains what information we may collect, why we
            collect it, how we store and protect it, and how users can request
            access, correction, export, or deletion of their data.
          </p>
        </div>
      </section>
    </main>
  )
}
