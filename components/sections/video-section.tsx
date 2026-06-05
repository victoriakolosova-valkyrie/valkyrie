"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="film" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
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

        {/* YouTube video container */}
        <motion.div
          className="relative aspect-video rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glow effect behind video */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.15), rgba(192,192,200,0.12) 50%, transparent 70%)",
            }}
          />

          {/* Video frame */}
          <div className="relative rounded-3xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm">
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/NZIaQ6DCrBI?si=ensazyXZhuJqi-oh"
                title="Mirror demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
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
