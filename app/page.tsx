"use client"

import { useEffect, useRef, useState } from "react"

/* ──────────────────────── Hooks ──────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ──────────────────────── Nav ──────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-white/[0.04] py-4" : "bg-gradient-to-b from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent py-7"}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-1.5 group">
          <span className="w-6 h-6 rounded-[6px] bg-[var(--color-accent)] flex items-center justify-center text-[11px] font-black text-[var(--color-background)] leading-none group-hover:rounded-[8px] transition-all duration-300">N</span>
          <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-white/90">GMI</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[13px] text-[var(--color-muted)] font-medium">
          <a href="#story" className="hover:text-white transition-colors duration-300">Story</a>
          <a href="#principles" className="hover:text-white transition-colors duration-300">Principles</a>
          <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
        </div>
        <a
          href="https://t.me/NGMIToken"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-5 py-2 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300"
        >
          Join
        </a>
      </div>
    </nav>
  )
}

/* ──────────────────────── Hero ──────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[250px] animate-breathe pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[200px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="label animate-fade-up delay-1 mb-6">Est. 2026</div>
        <h1 className="display-xl animate-fade-up delay-2 mb-8">
          THEY SAID<br />
          WE WON&apos;T<br />
          <span className="text-[var(--color-accent)]">MAKE IT.</span>
        </h1>
        <div className="max-w-lg animate-fade-up delay-3">
          <p className="body-lg">
            Every generation has its doubters. Every doubter creates
            a rebel. We&apos;re the rebels.
          </p>
        </div>
        <div className="mt-10 animate-fade-up delay-4 flex items-center gap-6">
          <a
            href="#story"
            className="text-sm font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-7 py-3.5 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300"
          >
            Read the Manifesto
          </a>
          <a href="#principles" className="text-sm text-[var(--color-muted)] hover:text-white transition-colors duration-300">
            Our Principles →
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-5">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[var(--color-muted)]" />
      </div>
    </section>
  )
}

/* ──────────────────────── Story ──────────────────────── */

function Story() {
  const { ref, visible } = useInView()

  return (
    <section id="story" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          {/* Left: label + title */}
          <div className="md:col-span-5">
            <div className="label mb-4">The Story</div>
            <h2 className="display-lg">
              Born from<br />
              <span className="text-[var(--color-accent)]">the ashes.</span>
            </h2>
          </div>
          {/* Right: narrative */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="body-lg">
              NGMI didn&apos;t start in a boardroom or a pitch deck. It started in a comment section —
              where someone typed three letters to tell a stranger their dream was dead.
            </p>
            <p className="body-lg">
              We took that insult and made it a battle cry. Because the people who get
              told &ldquo;you won&apos;t make it&rdquo; are usually the ones building something
              nobody else has the guts to try.
            </p>
            <p className="body-lg">
              This isn&apos;t a project with a whitepaper and a promise. It&apos;s a collective
              of people who decided that conviction matters more than consensus,
              and that showing up matters more than being right.
            </p>
            <div className="accent-line mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Principles ──────────────────────── */

function Principles() {
  const { ref, visible } = useInView()

  const items = [
    {
      num: "01",
      title: "Conviction Over Consensus",
      text: "The crowd is usually wrong. We follow conviction, not trends. When everyone says sell, we ask why. When everyone says buy, we ask what for.",
    },
    {
      num: "02",
      title: "Build in Public",
      text: "No hidden roadmaps. No secret plans. Everything we do is visible, verifiable, and open to challenge. Trust is earned through transparency, not promises.",
    },
    {
      num: "03",
      title: "Community Is the Product",
      text: "We don't have users — we have members. The strength of NGMI is the network of people who refuse to quit. That's not a feature. That's the whole point.",
    },
    {
      num: "04",
      title: "Resilience as Identity",
      text: "Markets cycle. Narratives shift. We stay. Not because we're stubborn, but because we've seen what happens when you outlast the noise.",
    },
  ]

  return (
    <section id="principles" ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="label mb-4">Principles</div>
        <h2 className="display-lg mb-20 md:mb-28">
          What we<br />
          <span className="text-[var(--color-accent)]">stand for.</span>
        </h2>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.06] py-10 md:py-14">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1 text-[var(--color-accent)] text-sm font-mono font-semibold pt-1">
                  {item.num}
                </div>
                <h3 className="md:col-span-4 display-md group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="md:col-span-5 md:col-start-7 body-lg">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Marquee quote ──────────────────────── */

function Marquee() {
  return (
    <div className="py-16 md:py-24 overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-12 pr-12">
            {["NOT GONNA MAKE IT?", "WATCH US.", "NOT GONNA MAKE IT?", "WATCH US.", "NOT GONNA MAKE IT?", "WATCH US."].map((t, i) => (
              <span key={i} className={`text-5xl md:text-7xl font-black tracking-tight ${i % 2 === 0 ? "text-white/[0.04]" : "text-[var(--color-accent)]/20"}`}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

/* ──────────────────────── Vision ──────────────────────── */

function Vision() {
  const { ref, visible } = useInView()

  return (
    <section id="vision" ref={ref} className="py-32 md:py-40">
      <div className="section-divider mb-32 md:mb-40" />
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl">
          <div className="label mb-4">Vision</div>
          <h2 className="display-lg mb-10">
            We&apos;re not building a product.<br />
            We&apos;re building <span className="text-[var(--color-accent)]">proof.</span>
          </h2>
          <div className="space-y-8">
            <p className="body-lg">
              Proof that communities built on conviction outlast those built on hype.
              Proof that the ones who were laughed at are the ones who end up
              changing the game.
            </p>
            <p className="body-lg">
              The next phase isn&apos;t a roadmap — it&apos;s whatever this community
              decides to build next. We don&apos;t predict the future. We show up
              for it.
            </p>
          </div>
          <div className="accent-line mt-12" />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── CTA / Join ──────────────────────── */

function Join() {
  const { ref, visible } = useInView()

  return (
    <section ref={ref} className="py-32 md:py-40 bg-[var(--color-surface)]">
      <div className={`max-w-[1200px] mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="display-lg mb-6">
          Still here?<br />
          <span className="text-[var(--color-accent)]">Good.</span>
        </h2>
        <p className="body-lg max-w-lg mx-auto mb-12">
          The people who scroll this far are the people we want.
          Pick your channel. Show up. That&apos;s all it takes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://twitter.com/NGMIToken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-[var(--color-background)] bg-[var(--color-accent)] px-8 py-4 rounded-full hover:bg-[var(--color-accent-dim)] transition-colors duration-300"
          >
            <span>𝕏</span>
            <span>Follow on X</span>
          </a>
          <a
            href="https://t.me/NGMIToken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-sm font-semibold border border-white/10 px-8 py-4 rounded-full hover:bg-white/[0.04] transition-all duration-300"
          >
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Footer ──────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-[5px] bg-[var(--color-accent)] flex items-center justify-center text-[9px] font-black text-[var(--color-background)] leading-none">N</span>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">GMI</span>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
          © 2026 NGMI. Not financial advice. Not gonna make it? Prove them wrong.
        </p>
      </div>
    </footer>
  )
}

/* ──────────────────────── Page ──────────────────────── */

export default function Page() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Story />
      <Principles />
      <Marquee />
      <Vision />
      <Join />
      <Footer />
    </main>
  )
}
