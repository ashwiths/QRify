import React from 'react'
import { ArrowRight, Sparkles, Layers, QrCode } from 'lucide-react'

export function HowItWorks({ onOpenGenerator }) {
  const steps = [
    {
      num: '01',
      title: 'Input Your Content',
      desc: 'Paste a website URL, Wi-Fi credentials, plain text notes, or contact vCard information.',
    },
    {
      num: '02',
      title: 'Preview & Customize',
      desc: 'Watch the high-contrast 3D matrix update instantly. Pick custom color accents and error correction levels.',
    },
    {
      num: '03',
      title: 'Export in 1-Click',
      desc: 'Download crisp SVG vectors for print or high-res PNGs for digital media. Share anywhere with confidence.',
    },
  ]

  return (
    <section className="relative px-6 py-20 sm:px-12 lg:px-16 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ef4444]">
              Workflow
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-normal">
              From thought to scannable code in under 3 seconds.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed tracking-normal">
              No registration forms, no CAPTCHAs, no waitlists. Simply input, customize, and save.
            </p>

            <button
              onClick={onOpenGenerator}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-red-500/60 bg-red-600/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:bg-red-600/30 transition-all"
            >
              <Sparkles size={16} className="text-red-400" />
              <span>Launch Studio</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right steps cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-[#101119] p-6 shadow-sm hover:border-red-500/40 transition-colors"
              >
                <span className="font-mono text-2xl font-black text-red-500/80">
                  {step.num}
                </span>
                <h3 className="mt-4 text-base font-bold text-white tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed tracking-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

