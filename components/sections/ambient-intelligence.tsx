"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const principles = [
  {
    icon: "◯",
    title: "No Screen",
    description: "Pure silver and gold reflection. No pixels demanding your gaze.",
  },
  {
    icon: "◇",
    title: "No Notifications",
    description: "Sacred silence. The mirror speaks only when you wish.",
  },
  {
    icon: "✧",
    title: "No Distraction",
    description: "Designed for enchantment. Precious light that fades into presence.",
  },
]

export function AmbientIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background gradient - silver and gold mist */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212, 175, 55, 0.05), transparent), radial-gradient(ellipse 60% 40% at 30% 70%, rgba(192, 192, 200, 0.04), transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Enchanted Intelligence
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Only whispers
            <br />
            <span className="italic text-primary">and precious light</span>
          </h2>
        </motion.div>

        {/* Three principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              {/* Icon */}
              <motion.div
                className="text-4xl md:text-5xl text-primary/60 mb-6 font-light"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {principle.icon}
              </motion.div>

              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-muted-foreground font-light text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual divider */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
