"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: particle.left }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

function GlowingMirror() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
      {/* Outer glow rings - gold radiance */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
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
      
      {/* Second glow layer - silver moonlight */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(192,192,200,0.20) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Mirror body - silver frame with golden inner glow */}
      <motion.div
        className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-[#c0c0c8]/25 via-card to-[#d4af37]/10 backdrop-blur-sm"
        style={{
          boxShadow: `
            inset 0 2px 30px rgba(212,175,55,0.12),
            inset 0 -2px 20px rgba(192,192,200,0.1),
            0 0 60px 20px rgba(212, 175, 55, 0.12),
            0 0 120px 40px rgba(192, 192, 200, 0.10)
          `,
        }}
        animate={{
          boxShadow: [
            `inset 0 2px 30px rgba(212,175,55,0.12), inset 0 -2px 20px rgba(192,192,200,0.1), 0 0 60px 20px rgba(212, 175, 55, 0.12), 0 0 120px 40px rgba(192, 192, 200, 0.10)`,
            `inset 0 2px 30px rgba(212,175,55,0.20), inset 0 -2px 20px rgba(192,192,200,0.15), 0 0 80px 30px rgba(212, 175, 55, 0.22), 0 0 160px 60px rgba(192, 192, 200, 0.15)`,
            `inset 0 2px 30px rgba(212,175,55,0.12), inset 0 -2px 20px rgba(192,192,200,0.1), 0 0 60px 20px rgba(212, 175, 55, 0.12), 0 0 120px 40px rgba(192, 192, 200, 0.10)`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inner reflection */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-foreground/5 via-transparent to-transparent" />
        
        {/* Subtle inner glow ring */}
        <motion.div
          className="absolute inset-6 rounded-full border border-primary/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating effect wrapper */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient - gold and silver mist */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(192, 192, 200, 0.08), transparent)
          `,
        }}
      />

      {/* Fog overlay - silver and gold haze */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 100% at 30% 70%, rgba(192, 192, 200, 0.08), transparent),
            radial-gradient(ellipse 80% 80% at 70% 30%, rgba(212, 175, 55, 0.06), transparent)
          `,
        }}
      />

      <Particles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Pre-headline */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mirror, Mirror
        </motion.p>

        {/* Main headline - fairytale inspired */}
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-foreground mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Mirror, mirror
          <br />
          <span className="italic text-primary">on the wall.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          An enchanted voice-powered mirror that listens, supports, and gently responds through silver light and whispered sound.
        </motion.p>

        {/* Mirror visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mb-16"
        >
          <GlowingMirror />
        </motion.div>

       {/* CTA buttons */}
<motion.div
  className="flex flex-col sm:flex-row gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
>
  <motion.button
    type="button"
    data-tally-open="Zj1yR0"
    data-tally-layout="modal"
    data-tally-width="500"
    data-tally-hide-title="1"
    data-tally-hidden-fields="source=website,page=hero,campaign=launch"
    className="relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide overflow-hidden group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10">Join Waitlist</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
      style={{ backgroundSize: "200% 100%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </motion.button>

  <motion.a
    href="/blog"
    className="px-8 py-4 rounded-full border border-primary/40 text-primary font-medium text-sm tracking-wide backdrop-blur-sm hover:bg-primary/10 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Read Blog
  </motion.a>

  <motion.button
    type="button"
    className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm tracking-wide backdrop-blur-sm hover:bg-secondary/50 transition-colors"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Watch Film
  </motion.button>
</motion.div>
  type="button"
  data-tally-open="Zj1yR0"
  data-tally-layout="modal"
  data-tally-width="500"
  data-tally-hide-title="1"
  data-tally-hidden-fields="source=website,page=hero,campaign=launch"
  className="relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide overflow-hidden group"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <span className="relative z-10">Join Waitlist</span>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
    style={{ backgroundSize: "200% 100%" }}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</motion.button>

          <motion.button
            className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm tracking-wide backdrop-blur-sm hover:bg-secondary/50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Film
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center pt-2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
