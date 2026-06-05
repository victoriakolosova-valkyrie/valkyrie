import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Support | Mirror",
  description:
    "Contact the Mirror team with support questions, feedback, or early product inquiries.",
}

export default function SupportPage() {
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

        <article className="mx-auto max-w-4xl px-6 pb-24">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-light text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              ← Back to home
            </Link>
          </div>

          <header className="mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
              Mirror Support
            </p>

            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Contact the Mirror Team
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Use this form to send questions, feedback, or support requests
              about Mirror. Your message will be reviewed by the team.
            </p>

            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </header>

          <div className="rounded-[2rem] border border-border/40 bg-card/30 p-4 shadow-2xl shadow-primary/5 backdrop-blur-sm md:p-6">
            <iframe
              src="https://tally.so/embed/ODE7da?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="620"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Mirror support form"
            />
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
