"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const specs = [
  { label: "Material", value: "Brushed silver & gilded glass" },
  { label: "Diameter", value: '14" / 356mm' },
  { label: "Light", value: "360° silver & gold ambient glow" },
  { label: "Voice", value: "Hidden whisper speakers" },
]

export function ProductDesign() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background gradient - silver and gold mist */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(212, 175, 55, 0.06), transparent), radial-gradient(ellipse 50% 30% at 30% 60%, rgba(192, 192, 200, 0.06), transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Precious Craftsmanship
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Forged in silver & gold,
            <br />
            <span className="italic text-primary">whispered into being</span>
          </h2>
        </motion.div>

        {/* Product visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Large mirror render */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer glow - gold and silver enchantment */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(192,192,200,0.12) 50%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Mirror body - silver and gold glass */}
              <div 
                className="absolute inset-8 rounded-full bg-gradient-to-br from-[#c8c8d0]/18 via-card to-[#d4af37]/10"
                style={{
                  boxShadow: `
                    inset 0 -4px 20px rgba(0,0,0,0.25),
                    inset 0 4px 30px rgba(212,175,55,0.12),
                    0 0 60px 20px rgba(212, 175, 55, 0.12)
                  `,
                }}
              >
                {/* Stone texture overlay */}
                <div className="absolute inset-0 rounded-full opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_40%)]" />
                
                {/* Inner rim */}
                <div className="absolute inset-4 rounded-full border border-border/20" />
                
                {/* LED ring indicator */}
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-primary/30"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Mirror, Mirror is designed as an object of enchantment—a seamless blend of silver craftsmanship and invisible magic that becomes a sacred part of your sanctuary.
            </p>

            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="flex justify-between items-center py-4 border-b border-border/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-muted-foreground text-sm font-light">
                    {spec.label}
                  </span>
                  <span className="text-foreground text-sm">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Silver & Gold Finish", "Whisper Speakers", "Dual-tone Glow", "Enchanted Minimalism"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs text-muted-foreground border border-border/30 bg-card/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
