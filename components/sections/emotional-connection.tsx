"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "Enchanted Grounding",
    description: "A gentle whisper guides you back to stillness, calming your spirit when the world feels overwhelming.",
  },
  {
    title: "Sacred Rituals",
    description: "Create meaningful morning and evening ceremonies that honor your wellbeing and restore inner balance.",
  },
  {
    title: "Nervous System Sanctuary",
    description: "Ancient breathing wisdom meets modern science—calming affirmations to soothe anxiety and restore peace.",
  },
  {
    title: "Intuitive Presence",
    description: "The mirror learns your emotional rhythms and responds with the perfect silver glow and whispered words—exactly when needed.",
  },
]

export function EmotionalConnection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Enchanted Connection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            A presence that
            <br />
            <span className="italic text-primary">truly sees you</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Mirror, Mirror is crafted to support your emotional wellness through whispered guidance and silver light—without screens, notifications, or distractions.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="relative p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 h-full transition-all duration-500 hover:bg-card/80 hover:border-primary/20">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
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
      </div>
    </section>
  )
}
