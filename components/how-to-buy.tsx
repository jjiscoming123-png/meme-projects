"use client"

import { useState } from "react"

const steps = [
  {
    step: "01",
    title: "Get a Wallet",
    desc: 'Download Phantom or Solflare wallet. This is where your money will go to die. Click "Create New Wallet" and screenshot your seed phrase (DO NOT actually do this).',
    tag: "5 minutes of your life gone",
    icon: "👻",
  },
  {
    step: "02",
    title: "Buy Some SOL",
    desc: 'Purchase Solana (SOL) from any exchange like Coinbase or Binance. This is the last time you\'ll see this money in full. Pour one out.',
    tag: "Moment of regret",
    icon: "💰",
  },
  {
    step: "03",
    title: "Go to a DEX",
    desc: 'Visit Raydium or Jupiter. Search for $NGMI contract address. Set slippage to "maximum pain" (12%). Confirm swap.',
    tag: "Point of no return",
    icon: "🔄",
  },
  {
    step: "04",
    title: "Watch It Dump",
    desc: 'Congratulations! You now hold $NGMI. Open your portfolio every 5 minutes and watch the number go down. Tell your friends you\'re "in crypto."',
    tag: "The rest of your life",
    icon: "📉",
  },
]

const contractAddress = "NGMI...4206969NGMI"

export function HowToBuy() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="howtobuy" className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.28 300 / 0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-widest uppercase">
            // how to buy
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground text-balance">
            Your Path to <span className="text-primary">Financial Ruin</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-mono max-w-xl mx-auto leading-relaxed text-pretty">
            Follow these simple steps and you too can join thousands of people who definitely should have known better.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Step number background */}
              <div
                className="absolute top-4 right-4 text-7xl font-bold font-mono opacity-5 group-hover:opacity-10 transition-opacity leading-none"
                aria-hidden="true"
              >
                {step.step}
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "oklch(0.65 0.28 300 / 0.15)", border: "1px solid oklch(0.65 0.28 300 / 0.3)" }}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary font-bold">STEP {step.step}</span>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 bg-secondary rounded-full border border-border">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-sans text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contract address */}
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-card border border-border rounded-2xl p-6 text-center"
            style={{ boxShadow: "0 0 40px oklch(0.65 0.28 300 / 0.1)" }}
          >
            <p className="text-sm font-mono text-muted-foreground mb-2 uppercase tracking-widest">
              Contract Address
            </p>
            <div className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3 mb-4">
              <code className="text-primary font-mono text-sm flex-1 truncate text-left">
                {contractAddress}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors"
                aria-label="Copy contract address"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              Always verify the contract address before buying. Or don&apos;t. This is $NGMI after all.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-10 py-4 text-base font-bold font-mono rounded-xl text-primary-foreground transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.28 300) 0%, oklch(0.55 0.25 290) 100%)",
              boxShadow: "0 0 40px oklch(0.65 0.28 300 / 0.3)",
            }}
          >
            Buy $NGMI on Raydium 📉
          </a>
          <p className="mt-3 text-xs text-muted-foreground font-mono">
            (This button doesn&apos;t actually do anything. Like $NGMI&apos;s price.)
          </p>
        </div>
      </div>
    </section>
  )
}
