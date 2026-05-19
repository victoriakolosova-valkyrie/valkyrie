"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Waitlist() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background gradient - silver and gold mist */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212, 175, 55, 0.10), transparent),
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(192, 192, 200, 0.08), transparent)
          `,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Decorative orb - gold and silver enchantment */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.30) 0%, rgba(192,192,200,0.20) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Enter the Enchantment
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            Be among the first to experience
            <br />
            <span className="italic text-primary">the magic within</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
            Mirror, Mirror is arriving soon. Join our waitlist to receive exclusive early access, behind-the-scenes glimpses, and special founder enchantments.
          </p>
        </motion.div>

{/* Form */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex justify-center"
>
  <motion.button
    type="button"
    data-tally-open="Zj1yR0"
    data-tally-layout="modal"
    data-tally-width="500"
    data-tally-hide-title="1"
    data-tally-hidden-fields="source=website,page=waitlist,campaign=launch"
    className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide relative overflow-hidden group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10">Join Waitlist</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"
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
</motion.div>
      </div>
    </section>
  )
}
