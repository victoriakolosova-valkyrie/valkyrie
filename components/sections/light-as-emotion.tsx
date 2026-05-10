"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const emotions = [
  { name: "Serenity", colors: ["rgba(192, 192, 200, 0.30)", "rgba(212, 175, 55, 0.15)"] },
  { name: "Clarity", colors: ["rgba(212, 175, 55, 0.25)", "rgba(192, 192, 200, 0.20)"] },
  { name: "Wonder", colors: ["rgba(180, 155, 45, 0.30)", "rgba(192, 192, 200, 0.18)"] },
  { name: "Enchantment", colors: ["rgba(192, 192, 200, 0.35)", "rgba(212, 175, 55, 0.22)"] },
]

export function LightAsEmotion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeEmotion, setActiveEmotion] = useState(0)

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Dynamic background based on selected emotion */}
      <motion.div
        className="absolute inset-0 transition-all duration-1000"
        animate={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${emotions[activeEmotion].colors[0]}, ${emotions[activeEmotion].colors[1]}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Silver & Gold, Spoken Feeling
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            The mirror speaks
            <br />
            <span className="italic text-primary">in precious light</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Mirror, Mirror expresses and responds to your emotions through enchanted silver and golden light—no words needed.
          </p>
        </motion.div>

        {/* Interactive mirror visualization */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glowing orb */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: `0 0 80px 40px ${emotions[activeEmotion].colors[0]}, 0 0 120px 60px ${emotions[activeEmotion].colors[1]}`,
              }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-4 rounded-full bg-card/60 backdrop-blur-md border border-border/30"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-8 rounded-full"
              animate={{
                background: `radial-gradient(circle, ${emotions[activeEmotion].colors[0]} 0%, transparent 70%)`,
              }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Emotion selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {emotions.map((emotion, index) => (
            <button
              key={emotion.name}
              onClick={() => setActiveEmotion(index)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm font-light tracking-wide ${
                activeEmotion === index
                  ? "bg-primary/20 border-primary/50 text-foreground"
                  : "border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {emotion.name}
            </button>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8 font-light italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Choose an enchantment to see how the mirror responds with silver and gold
        </motion.p>
      </div>
    </section>
  )
}
