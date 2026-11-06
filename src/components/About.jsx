import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { 
  ArrowUpRight, ShieldCheck, Cpu, Infinity, Sparkles, Check, 
  Terminal, Scan, Lock, Zap, ExternalLink 
} from 'lucide-react'

export function About() {
  const principles = [
    {
      num: '01',
      tag: 'ARCHITECTURE',
      title: 'Zero Intermediaries',
      desc: 'Most generators quietly insert proxy redirect URLs so they can track scans or paywall your links after 14 days. QRify writes your literal target destination directly into the matrix. No middlemen, ever.',
    },
    {
      num: '02',
      tag: 'PRIVACY',
      title: '100% Client – Side Computation',
      desc: 'Your links, text, and Wi-Fi passwords never touch a remote server or analytics database. Everything is synthesized locally in browser memory and discarded when you close the tab.',
    },
    {
      num: '03',
      tag: 'PERMANENCE',
      title: 'Built to Last Forever',
      desc: 'Standard static QR codes cannot expire because they encode raw data, not a subscription contract. Once printed on a card, banner, or product, it remains readable indefinitely.',
    },
    {
      num: '04',
      tag: 'STANDARDS',
      title: 'ISO / IEC 18004 Compliance',
      desc: 'Calibrated with strict adherence to universal barcode standards. Tuned quiet zones and Reed-Solomon error correction guarantee instant recognition across iOS, Android, and industrial scanners.',
    },
  ]

  return (
    <section id="about" className="relative px-6 py-28 sm:px-12 lg:px-20 border-t border-white/[0.08] bg-[#07080c] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/4 size-[500px] rounded-full bg-red-600/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 size-[400px] rounded-full bg-red-600/[0.03] blur-[140px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Savee-style Minimalist Header & Index */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-white/[0.08] pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#ef4444]">
              03 // ABOUT & MANIFESTO
            </span>
            <span className="text-zinc-600">/</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              SAVEE PHILOSOPHY
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>AN</span>
            <span className="font-bold text-white tracking-wide">
              AAA isolutions<span className="text-[#ef4444]">.</span>
            </span>
            <span>INITIATIVE</span>
          </div>
        </div>

        {/* 2-Column Hero Area: Left Typography + Right Relevant Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24">
          {/* Left Column: Editorial Big Typography Statement */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.02em] leading-[1.25]">
              Pure utility. Zero noise. <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-normal">
                Designed for creators who value simplicity and truth.
              </span>
            </h2>
            
            <p className="mt-8 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal tracking-[0.02em]">
              The web is flooded with QR code generators that bait you with free promises, only to hold your links hostage behind expiring trials, recurring subscriptions, and intrusive tracking redirects.
            </p>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal tracking-[0.02em]">
              Inspired by the clean, ad-free ethos of <span className="text-white font-medium">Savee</span>, we built <strong className="text-white font-semibold">QRify</strong> as a quiet antidote: a precision tool that performs its job flawlessly, respects your intelligence, and gets out of your way.
            </p>

            <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-4 font-mono text-xs text-zinc-400">
              <div>
                <span className="text-white font-bold text-base block font-sans">0.00ms</span>
                <span className="text-[11px] text-zinc-400">Local Latency</span>
              </div>
              <div>
                <span className="text-white font-bold text-base block font-sans">100%</span>
                <span className="text-[11px] text-zinc-400">Client-Side</span>
              </div>
              <div>
                <span className="text-white font-bold text-base block font-sans">0 Trackers</span>
                <span className="text-[11px] text-zinc-400">Zero Redirects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Relevant Visual Showcase filling the gap */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[390px] rounded-3xl border border-white/12 bg-gradient-to-b from-[#141520]/95 via-[#0d0e16]/95 to-[#08090f] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(239,68,68,0.2)] backdrop-blur-xl group">
              {/* Top ambient glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-red-600/20 blur-3xl" />

              {/* HUD Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-300 uppercase tracking-wider">PAYLOAD MATRIX</span>
                </div>
                <span className="text-red-400 font-semibold tracking-wider">ISO 18004</span>
              </div>

              {/* Central Precision Scanner Visual with Live QR */}
              <div className="relative my-6 p-6 rounded-2xl bg-black/60 border border-white/8 flex items-center justify-center overflow-hidden">
                {/* Viewfinder Target Reticles */}
                <div className="pointer-events-none absolute top-3 left-3 size-4 border-t-2 border-l-2 border-red-500" />
                <div className="pointer-events-none absolute top-3 right-3 size-4 border-t-2 border-r-2 border-red-500" />
                <div className="pointer-events-none absolute bottom-3 left-3 size-4 border-b-2 border-l-2 border-red-500" />
                <div className="pointer-events-none absolute bottom-3 right-3 size-4 border-b-2 border-r-2 border-red-500" />

                {/* Animated Laser Scanning Beam */}
                <div className="pointer-events-none absolute inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_#ef4444] animate-laser-scan z-20" />

                {/* Center QR Matrix */}
                <div className="relative z-10 p-2">
                  <QRCodeSVG
                    value="https://qrify.tools/manifesto"
                    size={180}
                    level="H"
                    fgColor="#ffffff"
                    bgColor="transparent"
                  />
                </div>

                {/* Subtle Grid texture */}
                <div className="pointer-events-none absolute inset-0 bg-ambient-grid opacity-30" />
              </div>

              {/* Bottom HUD Specs */}
              <div className="space-y-3 pt-1 font-mono text-[11px]">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>TARGET ROUTE:</span>
                  <span className="text-white font-medium">DIRECT DESTINATION</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>ENCRYPTION:</span>
                  <span className="text-emerald-400">LOCAL MEMORY ONLY</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>AUTHORED BY:</span>
                  <span className="text-white font-bold">
                    AAA isolutions<span className="text-[#ef4444]">.</span>
                  </span>
                </div>
              </div>

              {/* Bottom Pill Badge */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                  VERIFIED STATIC ASSET
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-red-400 font-medium">
                  <ShieldCheck size={13} />
                  Safe To Scan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Savee-Style Bento / Principles Grid with spacious tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0d14]/70 p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40 hover:bg-[#10121c] hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
                <span className="font-mono text-xl font-bold text-red-500/90 tracking-[0.08em]">
                  {item.num}
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[0.03em] group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal tracking-[0.02em]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Colophon: AAA isolutions. Showcase */}
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#12131d]/90 via-[#0e0f17]/95 to-[#08090e] p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Studio Identity */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 block">
                CONCEIVED & ENGINEERED BY
              </span>

              {/* Exact AAA isolutions. Wordmark matching uploaded logo */}
              <div className="inline-flex items-baseline tracking-[0.02em]">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[0.02em] font-sans">
                  AAA isolutions
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#ef4444] ml-1">.</span>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-normal tracking-[0.02em] pt-2">
                A modern digital engineering and product studio dedicated to crafting purposeful software, high-performance web experiences, and minimalist developer utilities.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300 tracking-[0.02em]">
                  <Check size={13} className="text-red-500" />
                  Independent Utility
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300 tracking-[0.02em]">
                  <Check size={13} className="text-red-500" />
                  Zero Third-Party Trackers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300 tracking-[0.02em]">
                  <Check size={13} className="text-red-500" />
                  Free & Open
                </span>
              </div>
            </div>

            {/* Right: Studio Manifesto Quote */}
            <div className="lg:col-span-5 lg:border-l lg:border-white/[0.08] lg:pl-8">
              <blockquote className="space-y-4">
                <p className="text-lg sm:text-xl font-medium text-white tracking-[0.02em] italic leading-relaxed">
                  "Good design isn't about how much you can add, but how gracefully the tool gets out of your way."
                </p>
                <footer className="flex items-center gap-3 pt-2">
                  <div className="size-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                    AAA isolutions Product Philosophy
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
