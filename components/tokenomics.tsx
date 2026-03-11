"use client"

import { useState } from "react"

const slices = [
  { label: "Dev Wallet (Abandoned)", pct: 40, color: "oklch(0.65 0.28 300)" },
  { label: "Liquidity (LOL)", pct: 20, color: "oklch(0.55 0.25 290)" },
  { label: "Marketing (Tweets)", pct: 15, color: "oklch(0.72 0.22 310)" },
  { label: "Team (Just Me)", pct: 10, color: "oklch(0.45 0.22 285)" },
  { label: "Community Rewards", pct: 10, color: "oklch(0.78 0.18 315)" },
  { label: "Burned Immediately", pct: 5, color: "oklch(0.38 0.20 280)" },
]

const stats = [
  { label: "Total Supply", value: "1,000,000,000,000", sub: "1 Trillion tokens (we needed big numbers)" },
  { label: "Token Name", value: "$NGMI", sub: "Not Gonna Make It" },
  { label: "Blockchain", value: "Solana", sub: "Fast enough to lose money quicker" },
  { label: "Tax", value: "0/0", sub: "We're honest, not profitable" },
]

function DonutChart() {
  const [hovered, setHovered] = useState<number | null>(null)

  const r = 80
  const cx = 110
  const cy = 110
  const circumference = 2 * Math.PI * r
  let offset = 0

  const arcs = slices.map((slice, i) => {
    const dashArray = (slice.pct / 100) * circumference
    const dashOffset = circumference - offset
    const arc = { ...slice, dashArray, dashOffset: circumference - (offset + dashArray), rotationOffset: offset }
    offset += dashArray
    return { ...arc, index: i }
  })

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <svg width="220" height="220" viewBox="0 0 220 220" aria-label="Tokenomics donut chart">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="oklch(0.22 0.06 290)" strokeWidth="32" />
          {arcs.map((arc) => (
            <circle
              key={arc.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth={hovered === arc.index ? 38 : 32}
              strokeDasharray={`${arc.dashArray} ${circumference - arc.dashArray}`}
              strokeDashoffset={arc.dashOffset}
              transform={`rotate(-90 ${cx} ${cy})`}
              style={{ transition: "stroke-width 0.2s", cursor: "pointer", opacity: hovered !== null && hovered !== arc.index ? 0.5 : 1 }}
              onMouseEnter={() => setHovered(arc.index)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
          <text x={cx} y={cy - 8} textAnchor="middle" fill="oklch(0.96 0.01 290)" fontSize="22" fontWeight="bold" fontFamily="monospace">
            {hovered !== null ? `${slices[hovered].pct}%` : "100%"}
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle" fill="oklch(0.60 0.08 290)" fontSize="9" fontFamily="monospace">
            {hovered !== null ? slices[hovered].label : "WORTHLESS"}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 gap-2 w-full max-w-xs">
        {slices.map((slice, i) => (
          <button
            key={slice.label}
            className="flex items-center gap-3 text-left w-full group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0 transition-all group-hover:scale-125"
              style={{ background: slice.color }}
            />
            <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
              {slice.label}
            </span>
            <span className="ml-auto text-xs font-mono font-bold" style={{ color: slice.color }}>
              {slice.pct}%
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 290 / 0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            // tokenomics
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground text-balance">
            The Numbers <span className="text-primary">Don&apos;t Lie</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-xl mx-auto leading-relaxed text-pretty">
            We did all the math. The math is bad. Here it is anyway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donut chart */}
          <div className="flex justify-center">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-center text-sm font-mono text-muted-foreground mb-6 uppercase tracking-widest">
                Token Distribution
              </h3>
              <DonutChart />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold font-mono text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{stat.sub}</div>
                </div>
              </div>
            ))}

            {/* Warning box */}
            <div className="bg-card border border-primary/30 rounded-2xl p-5"
              style={{ boxShadow: "0 0 20px oklch(0.65 0.28 300 / 0.08)" }}>
              <p className="text-sm font-mono text-primary font-bold mb-1">Extremely Official Warning</p>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                Investing in $NGMI is like setting your money on fire, except the fire is also on fire.
                Past performance is not indicative of future results, but our past performance was terrible, so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
