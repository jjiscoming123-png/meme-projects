const reasons = [
  {
    icon: "📉",
    title: "Proven Track Record",
    desc: "100% of our chart history points downward. That's consistency you can count on.",
  },
  {
    icon: "🤡",
    title: "Community Driven",
    desc: "Our community of 420 dedicated clowns makes all the decisions. Democratized loss.",
  },
  {
    icon: "🔥",
    title: "Fully Audited",
    desc: "Our smart contract was audited by my cousin who watches YouTube tutorials on weekends.",
  },
  {
    icon: "🌕",
    title: "Going to the Moon",
    desc: "The moon is a metaphor. We're going somewhere far away and cold. Pluto, maybe.",
  },
  {
    icon: "💎",
    title: "Diamond Hands",
    desc: "We don't sell because we literally cannot afford the gas fees to exit. HODL.",
  },
  {
    icon: "🤝",
    title: "Trustworthy Team",
    desc: "Anonymous devs, no roadmap, no promises. Refreshingly honest for crypto.",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.28 300 / 0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            // about $ngmi
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground text-balance">
            Why <span className="text-primary">$NGMI?</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-2xl mx-auto text-base leading-relaxed text-pretty">
            Great question. We asked ourselves the same thing. We still don&apos;t have a good answer,
            but here are six reasons we made up anyway.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
            >
              <div className="text-4xl mb-4" aria-hidden="true">{r.icon}</div>
              <h3 className="text-lg font-bold font-sans text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Marquee banner */}
        <div className="mt-16 overflow-hidden border-y border-border py-4">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {Array.from({ length: 4 }).flatMap((_, i) =>
              ["NGMI", "NOT GONNA MAKE IT", "📉", "SEND IT", "BUY THE DIP", "💸", "DEGEN SZN", "🤡"].map(
                (text) => (
                  <span key={`${i}-${text}`} className="text-sm font-mono font-bold text-primary/60">
                    {text}
                  </span>
                )
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
