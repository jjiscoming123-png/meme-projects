"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "How to Buy", href: "#howtobuy" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold font-mono text-primary group-hover:text-accent transition-colors">
            $NGMI
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground px-2 py-0.5 border border-border rounded-full">
            Not Gonna Make It
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#howtobuy"
          className="text-sm font-mono font-bold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors"
        >
          Buy $NGMI
        </a>
      </div>
    </nav>
  )
}
