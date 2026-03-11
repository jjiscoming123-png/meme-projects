"use client"

import { useEffect, useState } from "react"

function FloatingEmoji({
  emoji,
  style,
}: {
  emoji: string
  style: React.CSSProperties
}) {
  return (
    <div
      className="absolute pointer-events-none select-none text-4xl opacity-20 animate-bounce"
      style={style}
      aria-hidden="true"
    >
      {emoji}
    </div>
  )
}

const floaters = [
  { emoji: "📉", style: { top: "15%", left: "5%", animationDelay: "0s", animationDuration: "3s" } },
  { emoji: "💸", style: { top: "30%", right: "8%", animationDelay: "0.5s", animationDuration: "4s" } },
  { emoji: "🤡", style: { top: "60%", left: "3%", animationDelay: "1s", animationDuration: "3.5s" } },
  { emoji: "📉", style: { bottom: "20%", right: "5%", animationDelay: "1.5s", animationDuration: "2.8s" } },
  { emoji: "💀", style: { top: "20%", right: "20%", animationDelay: "0.8s", animationDuration: "4.5s" } },
  { emoji: "🚀", style: { bottom: "30%", left: "10%", animationDelay: "2s", animationDuration: "3.2s" } },
]

export function Hero() {
  const [price, setPrice] = useState("$0.000000069")
  const [change, setChange] = useState("-69.42%")

  useEffect(() => {
    const values = ["$0.000000069", "$0.00000004", "$0.000000001"]
    const changes = ["-69.42%", "-99.1%", "-420.0%"]
    let i = 0
    const interval = setInterval(() => {
      i = (i + 1) % values.length
      setPrice(values[i])
      setChange(changes[i])
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, oklch(0.65 0.28 300 / 0.12) 0%, transparent 70%)" }}
        />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, oklch(0.72 0.22 310 / 0.08) 0%, transparent 70%)" }}
        />
      </div>

      {/* Floating emojis */}
      {floaters.map((f, i) => (
        <FloatingEmoji key={i} emoji={f.emoji} style={f.style} />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Live price ticker */}
        <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2 mb-8 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-muted-foreground">LIVE PRICE:</span>
          <span className="text-foreground font-bold transition-all duration-500">{price}</span>
          <span className="text-red-400 font-bold">{change}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-8xl md:text-[11rem] font-bold font-sans leading-none text-balance mb-4"
          style={{
            background: "linear-gradient(135deg, oklch(0.75 0.28 300) 0%, oklch(0.65 0.28 300) 40%, oklch(0.55 0.25 290) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          $NGMI
        </h1>

        <p className="text-2xl md:text-4xl font-bold font-sans text-foreground mb-4 text-balance">
          Not Gonna Make It.
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-mono max-w-xl mx-auto mb-10 leading-relaxed text-pretty">
          The only coin that's honest about your financial future.
          We told you so. You bought anyway. Welcome to the family, degen.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#howtobuy"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold font-mono rounded-xl text-primary-foreground transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.28 300) 0%, oklch(0.55 0.25 290) 100%)",
              boxShadow: "0 0 30px oklch(0.65 0.28 300 / 0.35)",
            }}
          >
            Buy the Dip (It Keeps Dipping)
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold font-mono rounded-xl border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            Learn More (Why?)
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-muted-foreground font-mono opacity-60">
          Not financial advice. Obviously. Please do not buy this.
        </p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Market Cap", value: "$69" },
            { label: "Holders", value: "420" },
            { label: "All-Time High", value: "$0.0000001" },
            { label: "All-Time Low", value: "Same tbh" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
              <div className="text-xl font-bold font-mono text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
