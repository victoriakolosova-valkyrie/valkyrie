import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "How to Join the Mirror Waitlist | Help Center",
  description:
    "Step-by-step guide explaining how to join the Mirror waitlist and become an early tester for the voice-first AI smart mirror.",
}

export default function JoinWaitlistHelpPage() {
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
          <div className="mb-12 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-light text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              ← Back to home
            </Link>

            <Link
              href="/blog"
              className="inline-flex rounded-full border border-primary/30 px-5 py-3 text-sm font-light text-primary transition hover:border-primary/60 hover:bg-primary/10"
            >
              Mirror Journal
            </Link>
          </div>

          <header className="mb-14 text-center">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
              Mirror Help Center
            </p>

            <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-7xl">
              How to Join the Mirror Waitlist
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              A simple step-by-step guide for becoming one of the first people
              to test Mirror, a voice-first AI smart mirror for the home.
            </p>

            <time className="mt-6 block text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
              Last updated: June 2026
            </time>

            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </header>

          <div className="rounded-[2rem] border border-border/40 bg-card/30 p-6 shadow-2xl shadow-primary/5 backdrop-blur-sm md:p-10">
            <div className="space-y-10 text-lg font-light leading-8 text-muted-foreground">
              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Overview
                </h2>
                <p>
                  Mirror is currently in an early product validation stage. The
                  waitlist helps us understand who is interested in testing a
                  private, voice-first AI mirror for reflection at home.
                </p>
                <p className="mt-4">
                  Joining the waitlist does not require payment and does not
                  guarantee immediate access. It helps the Mirror team contact
                  potential early testers when prototype and beta opportunities
                  become available.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Before You Start
                </h2>
                <p>You will need:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>A working internet connection.</li>
                  <li>An email address where we can contact you.</li>
                  <li>
                    A short explanation of why you are interested in Mirror.
                  </li>
                  <li>
                    A few minutes to complete the waitlist form.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 1: Open the Mirror Website
                </h2>
                <p>
                  Go to the Mirror website in your browser:
                </p>

                <div className="mt-5 rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary">
                    Website URL
                  </p>
                  <p className="mt-2 font-serif text-3xl text-foreground">
                    smartmirror.space
                  </p>
                </div>

                <p className="mt-5">
                  On the homepage, you can read the main product message and
                  understand what Mirror is: a voice-first AI smart mirror
                  designed for calm reflection at home.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 2: Review the Product Concept
                </h2>
                <p>
                  Before joining the waitlist, quickly review the homepage
                  sections. Pay attention to the product promise, use case, and
                  privacy positioning.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                    <p className="text-sm text-primary">Feature</p>
                    <p className="mt-2 text-foreground">
                      Voice-first reflection
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                    <p className="text-sm text-primary">Purpose</p>
                    <p className="mt-2 text-foreground">
                      Calm emotional presence
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                    <p className="text-sm text-primary">Control</p>
                    <p className="mt-2 text-foreground">
                      Privacy and memory awareness
                    </p>
                  </div>
                </div>

                <p className="mt-5">
                  Mirror is not a therapist, medical device, emergency service,
                  or romantic AI companion. It is designed as a private
                  reflection object for the home.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 3: Click “Join Waitlist”
                </h2>
                <p>
                  Click the “Join Waitlist” button in the top navigation or in
                  one of the call-to-action sections on the website.
                </p>

                <div className="mt-5 rounded-2xl border border-primary/30 bg-background/50 p-6">
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">
                    Visual example
                  </p>
                  <div className="flex items-center justify-between rounded-full border border-primary/30 px-5 py-3">
                    <span className="text-sm text-muted-foreground">
                      Mirror navigation
                    </span>
                    <span className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
                      Join Waitlist
                    </span>
                  </div>
                </div>

                <p className="mt-5">
                  After clicking the button, a waitlist form should open. If it
                  does not open, refresh the page and try again.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 4: Complete the Waitlist Form
                </h2>
                <p>
                  Fill in the required fields in the waitlist form. The exact
                  fields may change as Mirror develops, but the form may ask for
                  your name, email address, and why you are interested in the
                  product.
                </p>

                <div className="mt-5 rounded-2xl border border-border/50 bg-background/40 p-6">
                  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-primary">
                    Example form structure
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-border/40 px-4 py-3">
                      Name
                    </div>
                    <div className="rounded-xl border border-border/40 px-4 py-3">
                      Email address
                    </div>
                    <div className="rounded-xl border border-border/40 px-4 py-3">
                      Why are you interested in Mirror?
                    </div>
                  </div>
                </div>

                <p className="mt-5">
                  Use a real email address so the team can contact you if you
                  are selected for beta testing or prototype feedback.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 5: Submit Your Request
                </h2>
                <p>
                  After filling in the form, submit it. You should see a
                  confirmation message or the form should close after successful
                  submission.
                </p>

                <div className="mt-5 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary">
                    Successful submission means
                  </p>
                  <p className="mt-3 text-foreground">
                    You have been added to the Mirror waitlist for future
                    product updates and possible beta testing opportunities.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Step 6: What Happens Next
                </h2>
                <p>
                  After joining the waitlist, the Mirror team may contact you
                  with updates, product questions, prototype testing
                  opportunities, or early beta invitations.
                </p>
                <p className="mt-4">
                  Because Mirror is still in development, access may be limited
                  and invitations may be sent gradually based on user profile,
                  product fit, location, and testing needs.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Troubleshooting
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl text-foreground">
                      The form does not open
                    </h3>
                    <p className="mt-2">
                      Refresh the page, check your internet connection, or try
                      another browser.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-foreground">
                      I submitted the form but did not receive an email
                    </h3>
                    <p className="mt-2">
                      This can be normal. Joining the waitlist does not always
                      trigger an immediate email. Check your inbox later and
                      make sure you entered the correct address.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-foreground">
                      I want my data deleted
                    </h3>
                    <p className="mt-2">
                      Review our{" "}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      for information about data access and deletion requests.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
                  Summary
                </h2>
                <p>
                  To join the Mirror waitlist, open smartmirror.space, review
                  the product concept, click “Join Waitlist,” complete the form,
                  and submit your request. The waitlist is the first step toward
                  becoming an early tester of Mirror’s voice-first AI smart
                  mirror experience.
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
