"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const privacyFeatures = [
  {
    title: "Sealed Within",
    description: "Your whispered conversations stay within your sanctuary. The mirror processes all enchantments locally, keeping your private moments sacred.",
  },
  {
    title: "No Secrets Shared",
    description: "We never store, sell, or analyze your reflections. Your emotional journey remains yours alone—as it should be.",
  },
  {
    title: "Sacred Sanctuary",
    description: "Designed as a safe haven for vulnerability. Mirror, Mirror creates a protected space where you can be authentically yourself.",
  },
]

export function PrivacyFirst() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Sacred Privacy
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Your secrets,
            <br />
            <span className="italic text-primary">forever sealed</span>
          </h2>
        </motion.div>

        {/* Privacy features */}
        <div className="space-y-6">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/30">
                {/* Number indicator */}
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl md:text-5xl text-primary/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/30 bg-card/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="text-sm text-muted-foreground font-light italic">
              Sealed enchantment · No cloud whispers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
