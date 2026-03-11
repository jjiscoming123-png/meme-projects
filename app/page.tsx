"use client"

import { useEffect, useRef, useState } from "react"

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return isInView
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 px-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "py-6"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <span className="text-xl font-bold gradient-text">NGMI</span>
        <div className="hidden md:flex gap-8 text-sm text-[var(--color-muted)]">
          <a href="#mission" className="hover:text-white transition">Mission</a>
          <a href="#community" className="hover:text-white transition">Community</a>
          <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
        </div>
        <a href="#join" className="text-sm px-5 py-2 rounded-full bg-[var(--color-primary)] text-black font-semibold hover:bg-[var(--color-primary-dark)] transition">
          Join Us
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[180px] opacity-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full blur-[160px] opacity-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <p className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.3em] uppercase mb-6">The Movement Has Begun</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6">
            They Said We{" "}
            <span className="gradient-text">Won&apos;t Make It.</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white/80 mb-4">They were wrong.</p>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
            NGMI is a global community of builders, dreamers, and fighters who refuse to be defined by doubt. 
            We&apos;re here to prove that resilience beats everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-black font-bold text-lg hover:bg-[var(--color-primary-dark)] transition-all hover:scale-105">
              Join The Movement →
            </a>
            <a href="#mission" className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  const values = [
    { icon: "🛡️", title: "Resilience", desc: "Markets crash, doubters laugh, but we keep building. Every setback is a setup for a comeback." },
    { icon: "🤝", title: "Community", desc: "50,000+ members across 120 countries. We lift each other up and move forward together." },
    { icon: "🔍", title: "Transparency", desc: "No hidden agendas. Everything we do is open, honest, and driven by community consensus." },
    { icon: "⚡", title: "Action", desc: "We don't just talk. We build, we ship, we execute. Results speak louder than promises." },
  ]

  return (
    <Section id="mission">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What is NGMI?</h2>
          <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
            Born from the crypto community, NGMI represents every person who&apos;s been told they can&apos;t succeed — 
            and chose to prove them wrong. We&apos;re not just a community. We&apos;re a movement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass rounded-2xl p-8 hover:border-[var(--color-primary)]/30 transition-all hover:-translate-y-1 duration-300">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Community() {
  const stats = [
    { number: "50K+", label: "Community Members" },
    { number: "120+", label: "Countries" },
    { number: "24/7", label: "Active Global Community" },
    { number: "100%", label: "Community Driven" },
  ]

  const testimonials = [
    { quote: "NGMI changed my perspective. It's not about the market — it's about the people you build with.", name: "Alex R.", role: "Early Member" },
    { quote: "I joined when everyone said crypto was dead. This community showed me that conviction beats timing.", name: "Sarah K.", role: "Community Lead" },
    { quote: "The strongest communities are born in the hardest times. NGMI is proof of that.", name: "David M.", role: "Builder" },
  ]

  return (
    <Section id="community" className="bg-[var(--color-surface)]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Community</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Strength in Numbers</h2>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            Our community is our greatest asset. Together, we&apos;re building something that lasts.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{s.number}</div>
              <div className="text-sm text-[var(--color-muted)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-8">
              <p className="text-white/80 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-[var(--color-primary)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Roadmap() {
  const phases = [
    { phase: "Phase 1", title: "Community Building", status: "Completed", items: ["Launch core community channels", "Establish governance framework", "Reach 10,000 founding members", "Build brand identity"] },
    { phase: "Phase 2", title: "Platform Development", status: "In Progress", items: ["Develop community platform", "Launch member verification", "Create educational resources", "Strategic partnerships"] },
    { phase: "Phase 3", title: "Global Expansion", status: "Upcoming", items: ["Multi-language support", "Regional community hubs", "Ambassador program", "Global events & meetups"] },
    { phase: "Phase 4", title: "Ecosystem Growth", status: "Future", items: ["Ecosystem grants program", "Developer tools & SDK", "Cross-chain integration", "Decentralized governance"] },
  ]

  return (
    <Section id="roadmap">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Roadmap</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Path Forward</h2>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
            We move with purpose. Every phase builds on the last, driven by our community&apos;s needs.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/30 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {phases.map((p, i) => (
              <div key={i} className="md:pl-20 relative">
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-background)] hidden md:block" />
                <div className="glass rounded-2xl p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[var(--color-primary)] font-bold text-sm">{p.phase}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      p.status === "Completed" ? "bg-emerald-500/20 text-emerald-400" :
                      p.status === "In Progress" ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]" :
                      "bg-white/5 text-white/40"
                    }`}>{p.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                        <span className="text-[var(--color-primary)]">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Join() {
  return (
    <Section id="join" className="bg-[var(--color-surface)]/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Join Us</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of the Movement</h2>
        <p className="text-lg text-[var(--color-muted)] mb-10">
          The best time to join was yesterday. The second best time is now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://twitter.com/NGMIToken" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass hover:border-[var(--color-primary)]/50 transition-all hover:-translate-y-1 duration-300">
            <span className="text-2xl">𝕏</span>
            <div className="text-left">
              <div className="font-semibold text-white">Twitter / X</div>
              <div className="text-xs text-[var(--color-muted)]">Follow for updates</div>
            </div>
          </a>
          <a href="https://t.me/NGMIToken" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass hover:border-[var(--color-primary)]/50 transition-all hover:-translate-y-1 duration-300">
            <span className="text-2xl">✈️</span>
            <div className="text-left">
              <div className="font-semibold text-white">Telegram</div>
              <div className="text-xs text-[var(--color-muted)]">Join the conversation</div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold gradient-text">NGMI</span>
        <p className="text-sm text-[var(--color-muted)]">© 2026 NGMI Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Community />
      <Roadmap />
      <Join />
      <Footer />
    </main>
  )
}
