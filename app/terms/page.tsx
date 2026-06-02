import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Use | Mirror",
  description:
    "Terms of Use for Mirror, a voice-first AI smart mirror and emotional presence object for the home.",
}

export default function TermsPage() {
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
              Mirror
            </p>

            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Terms of Use
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              The basic terms for using Mirror’s website, waitlist, beta
              materials, and early product experience.
            </p>

            <time className="mt-6 block text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              Last updated: June 2026
            </time>

            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </header>

          <div className="rounded-[2rem] border border-border/40 bg-card/30 p-6 shadow-2xl shadow-primary/5 backdrop-blur-sm md:p-10">
            <div className="space-y-8 text-lg font-light leading-8 text-muted-foreground">
              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  1. Introduction
                </h2>
                <p>
                  These Terms of Use explain the basic rules for using the
                  Mirror website, joining the waitlist, interacting with our
                  early product materials, and participating in possible beta
                  testing. By using this website or submitting information
                  through our forms, you agree to these terms.
                </p>
                <p className="mt-4">
                  Mirror is an early-stage startup project developing a
                  voice-first AI smart mirror and emotional presence object for
                  the home.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  2. Early-Stage Product Notice
                </h2>
                <p>
                  Mirror is currently in development. Some descriptions,
                  visuals, features, pricing, hardware details, and timelines on
                  the website may represent our current plans, prototypes, or
                  product direction rather than a final commercial product.
                </p>
                <p className="mt-4">
                  We may change, pause, remove, or redesign features as we learn
                  from users, technical testing, privacy review, production
                  planning, and market validation.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  3. Waitlist
                </h2>
                <p>
                  Joining the Mirror waitlist does not guarantee access to the
                  product, beta testing, pre-orders, discounts, or delivery of a
                  device. The waitlist helps us understand interest, contact
                  potential early users, and invite selected people to future
                  testing or product updates.
                </p>
                <p className="mt-4">
                  You are responsible for providing accurate contact
                  information if you want us to reach you about Mirror updates.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  4. Beta Testing
                </h2>
                <p>
                  If we invite users to test Mirror, beta features may be
                  incomplete, experimental, unstable, or different from the final
                  product. Beta testing may include hardware, software, voice
                  interaction, AI response flows, privacy controls, and feedback
                  collection.
                </p>
                <p className="mt-4">
                  Beta users may be asked to provide feedback about usability,
                  product value, technical issues, and overall experience.
                  Participation in beta testing may be subject to additional
                  terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  5. Not Medical, Therapy, or Emergency Support
                </h2>
                <p>
                  Mirror is not a therapist, doctor, medical device, emergency
                  service, or crisis support tool. The product is intended to
                  support reflection and personal awareness, not to diagnose,
                  treat, prevent, or cure any medical or mental health
                  condition.
                </p>
                <p className="mt-4">
                  If you are in immediate danger, feel at risk of harming
                  yourself or others, or need urgent help, contact local
                  emergency services or a trusted person immediately.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  6. AI Limitations
                </h2>
                <p>
                  Mirror may use AI features in future versions. AI-generated
                  responses can be incomplete, inaccurate, unexpected, or not
                  suitable for every situation. You should not rely on Mirror as
                  a source of professional advice, medical guidance, legal
                  advice, financial advice, or emergency support.
                </p>
                <p className="mt-4">
                  The purpose of Mirror is to create a calm reflective
                  experience, not to replace human judgment or professional
                  support.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  7. User Responsibilities
                </h2>
                <p>
                  Users agree not to misuse the website, forms, beta materials,
                  or future product features. This includes attempting to
                  interfere with the website, submit harmful content, misuse AI
                  features, reverse engineer private systems, or use Mirror in a
                  way that violates applicable laws or harms other people.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  8. Payments, Pre-Orders, and Subscriptions
                </h2>
                <p>
                  Mirror may later offer paid hardware, beta devices,
                  subscriptions, or other services. If paid products become
                  available, pricing, payment terms, cancellation rules,
                  shipping information, warranty information, and any applicable
                  consumer rights will be presented before purchase.
                </p>
                <p className="mt-4">
                  Nothing on the current website should be treated as a final
                  sales offer unless clearly stated.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  9. Intellectual Property
                </h2>
                <p>
                  The Mirror name, website content, product concept, visual
                  design, text, graphics, and related materials belong to the
                  Mirror team or are used with permission. You may not copy,
                  reproduce, sell, or use these materials for commercial
                  purposes without written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  10. Third-Party Services
                </h2>
                <p>
                  The Mirror website may use third-party services for hosting,
                  analytics, forms, email, or future AI infrastructure. These
                  services may have their own terms and privacy practices. Our
                  use of personal data is described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  11. Limitation of Liability
                </h2>
                <p>
                  To the extent permitted by law, Mirror and its team are not
                  responsible for losses, damages, or issues caused by website
                  unavailability, experimental beta features, user misuse,
                  inaccurate AI output, third-party services, or reliance on
                  Mirror for professional, medical, legal, financial, or
                  emergency decisions.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  12. Privacy
                </h2>
                <p>
                  Please read our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  to understand what data we may collect, why we collect it, how
                  we store and protect it, and how users can request access or
                  deletion.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  13. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms of Use as Mirror develops. If we
                  make meaningful changes, we will update the “Last updated”
                  date and, where appropriate, communicate changes through the
                  website or email.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  14. Contact
                </h2>
                <p>
                  For questions about these terms, contact the Mirror team at{" "}
                  <a
                    href="mailto:mirror@project.com"
                    className="text-primary hover:underline"
                  >
                    mirror@project.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  )
}
