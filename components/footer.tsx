const socialLinks = [
  { label: "Twitter / X", handle: "@NGMIcoin", sub: "We post when drunk" },
  { label: "Telegram", handle: "t.me/NGMIcoin", sub: "273 bots, 2 humans" },
  { label: "Discord", handle: "discord.gg/ngmi", sub: "Mostly crying" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Community section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-sans text-foreground mb-3 text-balance">
            Join the <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            Commiserate with fellow NGMI holders. Emotional support available 24/7.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href="#"
              className="group bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">{s.label}</div>
              <div className="text-base font-bold font-mono text-primary group-hover:text-accent transition-colors">{s.handle}</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">{s.sub}</div>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-mono text-primary">$NGMI</span>
            <span className="text-xs font-mono text-muted-foreground">© 2025 Not Gonna Make It Foundation</span>
          </div>
          <p className="text-xs font-mono text-muted-foreground text-center text-pretty max-w-md">
            $NGMI is a meme coin with no intrinsic value or expectation of financial return.
            This is satire. Please do not actually buy this. We are not responsible for your decisions.
          </p>
          <div className="flex gap-4 text-xs font-mono text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Whitepaper (Blank Doc)</a>
            <a href="#" className="hover:text-primary transition-colors">Audit (lol)</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
