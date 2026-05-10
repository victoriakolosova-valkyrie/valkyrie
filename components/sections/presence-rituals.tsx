"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const rituals = [
  {
    time: "Dawn",
    title: "Awakening",
    description: "Begin your day bathed in golden light with gentle whispered intentions and grounding presence.",
    gradient: "from-[#d4af37]/20 via-[#c0b080]/12 to-transparent",
  },
  {
    time: "Midday",
    title: "Reflection",
    description: "Brief enchanted moments in silver clarity that help you reconnect with your inner self.",
    gradient: "from-[#c0c0c8]/22 via-[#d4af37]/10 to-transparent",
  },
  {
    time: "Twilight",
    title: "Release",
    description: "Surrender to calming whispers as silver and gold intertwine, preparing you for restful dreams.",
    gradient: "from-[#b0b0b8]/20 via-[#c4a030]/12 to-transparent",
  },
]

export function PresenceRituals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Sacred Rituals
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Moments of
            <br />
            <span className="italic text-primary">enchantment</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Mirror, Mirror guides you through daily ceremonies that nurture your spirit—from dawn to moonrise.
          </p>
        </motion.div>

        {/* Ritual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rituals.map((ritual, index) => (
            <motion.div
              key={ritual.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30 overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ritual.gradient} opacity-50`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {ritual.time}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {ritual.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                    {ritual.description}
                  </p>
                </div>

                {/* Decorative element */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
