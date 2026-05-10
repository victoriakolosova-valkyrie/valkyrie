"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Witness the Enchantment
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            See the
            <span className="italic text-primary"> magic</span>
          </h2>
        </motion.div>

        {/* Video container */}
        <motion.div
          className="relative aspect-video rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glow effect behind video - silver and gold enchantment */}
          <div 
            className="absolute -inset-4 rounded-3xl opacity-50"
            style={{
              background: "radial-gradient(ellipse at center, rgba(212,175,55,0.15), rgba(192,192,200,0.12) 50%, transparent 70%)",
            }}
          />

          {/* Video frame */}
          <div className="relative rounded-3xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm">
            {/* Placeholder for video - using abstract visual */}
            <div className="aspect-video relative overflow-hidden">
              {/* Animated gradient background - silver and gold footage */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse 100% 100% at 30% 50%, rgba(212,175,55,0.15) 0%, transparent 50%),
                    radial-gradient(ellipse 80% 80% at 70% 60%, rgba(192,192,200,0.15) 0%, transparent 50%),
                    linear-gradient(to bottom, rgba(15,15,18,1), rgba(25,22,28,1))
                  `,
                }}
                animate={{
                  background: [
                    `radial-gradient(ellipse 100% 100% at 30% 50%, rgba(212,175,55,0.15) 0%, transparent 50%),
                     radial-gradient(ellipse 80% 80% at 70% 60%, rgba(192,192,200,0.15) 0%, transparent 50%),
                     linear-gradient(to bottom, rgba(15,15,18,1), rgba(25,22,28,1))`,
                    `radial-gradient(ellipse 100% 100% at 60% 40%, rgba(192,192,200,0.20) 0%, transparent 50%),
                     radial-gradient(ellipse 80% 80% at 40% 70%, rgba(212,175,55,0.18) 0%, transparent 50%),
                     linear-gradient(to bottom, rgba(15,15,18,1), rgba(25,22,28,1))`,
                    `radial-gradient(ellipse 100% 100% at 30% 50%, rgba(212,175,55,0.15) 0%, transparent 50%),
                     radial-gradient(ellipse 80% 80% at 70% 60%, rgba(192,192,200,0.15) 0%, transparent 50%),
                     linear-gradient(to bottom, rgba(15,15,18,1), rgba(25,22,28,1))`,
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Central orb animation - silver and gold mirror */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(192,192,200,0.20) 50%, transparent 70%)",
                    boxShadow: "0 0 60px 30px rgba(212,175,55,0.12)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center group hover:bg-foreground/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-8 h-8 text-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>

              {/* Video duration badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/30">
                <span className="text-xs text-muted-foreground">2:34</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8 font-light italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A glimpse into the enchantment of Mirror, Mirror
        </motion.p>
      </div>
    </section>
  )
}
