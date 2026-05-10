"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/30" : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37]/30 to-[#c0c0c8]/20 flex items-center justify-center border border-[#d4af37]/25">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#d4af37]/50 to-[#c0c0c8]/40" />
          </div>
          <span className="font-serif text-lg tracking-wide text-foreground">Mirror, Mirror</span>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            Features
          </a>
          <a
            href="#design"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            Design
          </a>
          <a
            href="#privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            Privacy
          </a>
        </div>

        {/* CTA */}
        <motion.button
          className="px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-foreground text-sm font-light hover:bg-primary/20 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Join Waitlist
        </motion.button>
      </div>
    </motion.nav>
  )
}
