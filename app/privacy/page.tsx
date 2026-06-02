import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Mirror",
  description:
    "Privacy Policy for Mirror, a voice-first AI smart mirror and emotional presence object for the home.",
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              How Mirror collects, stores, protects, and gives users control
              over their personal data.
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
                  Mirror is a voice-first AI smart mirror designed to listen,
                  reflect, and help people hear themselves more clearly. Because
                  Mirror may involve personal conversations, voice interaction,
                  beta testing, waitlist forms, and product feedback, privacy
                  and data protection are important parts of the product from
                  the beginning.
                </p>
                <p className="mt-4">
                  This Privacy Policy explains what information we may collect,
                  why we collect it, how we store and protect it, and how users
                  can request access, correction, export, or deletion of their
                  data.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  2. Who We Are
                </h2>
                <p>
                  Mirror is developed by the Mirror startup team as an
                  early-stage product validation project. The website is
                  available at smartmirror.space.
                </p>
                <p className="mt-4">
                  For privacy-related requests, users can contact us at{" "}
                  <a
                    href="mailto:mirror@project.com"
                    className="text-primary hover:underline"
                  >
                    mirror@project.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  3. What Data We Collect
                </h2>
                <p>
                  We only aim to collect data that is necessary for product
                  validation, communication, beta testing, website analytics,
                  and user support.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Name and email address submitted through the waitlist.</li>
                  <li>Optional answers, comments, or product feedback.</li>
                  <li>Website analytics such as page visits and referral source.</li>
                  <li>Beta testing feedback and technical issue reports.</li>
                  <li>
                    In future beta versions, voice or conversation input may be
                    processed to provide the Mirror experience.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  4. Why We Collect Data
                </h2>
                <p>
                  We may process data to manage the waitlist, contact interested
                  beta users, understand demand, improve the website and product
                  messaging, test product usability, respond to questions, and
                  improve privacy and safety features.
                </p>
                <p className="mt-4">
                  We do not intend to sell personal data or use emotional data
                  for unrelated advertising purposes.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  5. How We Store and Protect Data
                </h2>
                <p>
                  Data may be stored in website hosting, analytics, form,
                  email, and collaboration tools used by the Mirror team. Access
                  is limited to people who need it for the purposes described in
                  this policy.
                </p>
                <p className="mt-4">
                  We use reasonable measures such as limiting access, using
                  secure platforms, avoiding unnecessary data collection, and
                  removing data that is no longer needed.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  6. Voice, Memory, and Emotional Data
                </h2>
                <p>
                  Mirror is designed as a voice-first product. In future beta
                  versions, users may speak with Mirror, and the product may
                  process voice or conversation input to generate responses.
                </p>
                <p className="mt-4">
                  Our goal is that users can understand what is processed, what
                  is remembered, and what can be deleted. Mirror should not
                  treat highly sensitive, crisis-related, financial, legal, or
                  medical information as ordinary product memory.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  7. User Control and Deletion
                </h2>
                <p>
                  Users may request access to their personal data, correction of
                  inaccurate data, deletion of their data, withdrawal from the
                  waitlist, or export of data where technically available.
                </p>
                <p className="mt-4">
                  To request access or deletion, contact{" "}
                  <a
                    href="mailto:mirror@project.com"
                    className="text-primary hover:underline"
                  >
                    mirror@project.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  8. Data Retention
                </h2>
                <p>
                  We keep personal data only for as long as needed. Waitlist
                  data is kept until the user unsubscribes, requests deletion,
                  or the waitlist is no longer needed. Beta feedback is kept
                  during product validation and for a reasonable analysis
                  period.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  9. Third-Party Tools
                </h2>
                <p>
                  We may use third-party tools for hosting, analytics, forms,
                  email, collaboration, and future AI infrastructure. These
                  tools are used for operational purposes. We do not sell
                  personal data to advertisers or data brokers.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  10. Children and Safety
                </h2>
                <p>
                  Mirror is designed for adults and is not intended for
                  children. Mirror is also not a therapist, doctor, emergency
                  service, or crisis support service. If someone is in immediate
                  danger, they should contact emergency services or a trusted
                  person.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  11. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy as Mirror develops. If we
                  make meaningful changes, we will update the “Last updated”
                  date and, where appropriate, notify users through the website
                  or email.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  12. Contact
                </h2>
                <p>
                  For privacy questions or data deletion requests, contact the
                  Mirror team at{" "}
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
