import React, { useState } from 'react'
import { ArrowRight, Zap, Link2, Sparkles, Check, Download, SlidersHorizontal } from 'lucide-react'
import { QRCard3D } from './QRCard3D'

export function Hero({
  qrValue,
  setQrValue,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  level,
  setLevel,
  onOpenGenerator,
  downloadQr,
}) {
  const [inlineMode, setInlineMode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleQuickCopy = () => {
    navigator.clipboard?.writeText(qrValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between px-6 pt-6 pb-12 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background Decorative Ambient Flares matching the screenshot */}
      {/* Top Left Organic Dark Wave Flare */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-red-950/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-12 left-0 w-80 h-80 rounded-full bg-red-600/10 blur-[120px]" />

      {/* Bottom Left Flare */}
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-[450px] rounded-full bg-red-600/15 blur-[120px]" />

      {/* Bottom Right Atmospheric Wave */}
      <div className="pointer-events-none absolute -bottom-24 -right-16 size-[550px] rounded-full bg-red-900/15 blur-[140px]" />

      {/* Hero Content Container */}
      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 my-auto py-8">
        {/* Left Column: Typography & Action */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Eyebrow / Kicker */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-400 uppercase">
              TEXT TO QR GENERATOR
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-normal text-white leading-[1.08] max-w-xl">
            Turn Your Text <br />
            Into a <span className="text-[#ef4444] drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]">QR Code.</span>
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed font-normal tracking-normal">
            Paste any text, link or URL and get your <br className="hidden sm:inline" />
            QR code in seconds. Simple, fast, effortless.
          </p>

          {/* Action Area: Exact CTA Button & Quick Inline Switcher */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {!inlineMode ? (
              <div className="flex flex-wrap items-center gap-4">
                {/* The Primary Glowing Red Pill CTA Button (Exact match from screenshot) */}
                <button
                  onClick={() => setInlineMode(true)}
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-red-500/80 bg-[#121319]/90 px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_28px_rgba(239,68,68,0.45),inset_0_0_12px_rgba(239,68,68,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(239,68,68,0.7),inset_0_0_18px_rgba(239,68,68,0.4)] hover:border-red-400 active:scale-[0.98]"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} className="text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {/* Secondary Button to open full studio */}
                <button
                  onClick={onOpenGenerator}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:text-white"
                >
                  <SlidersHorizontal size={16} />
                  <span>Customize Style</span>
                </button>
              </div>
            ) : (
              /* Inline Input Bar with Live Feedback */
              <div className="w-full max-w-lg rounded-2xl border border-red-500/40 bg-[#12131a]/95 p-2 shadow-[0_0_30px_rgba(239,68,68,0.3)] backdrop-blur-xl">
                <div className="flex items-center gap-2 px-3 py-1">
                  <Link2 size={18} className="text-red-400 shrink-0" />
                  <input
                    type="text"
                    value={qrValue}
                    onChange={(e) => setQrValue(e.target.value)}
                    placeholder="Type or paste any URL, text, wifi..."
                    className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                    autoFocus
                  />
                  {qrValue && (
                    <button
                      onClick={() => setQrValue('')}
                      className="text-xs text-zinc-500 hover:text-zinc-300 px-1.5 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">Quick presets:</span>
                    <button
                      onClick={() => setQrValue('https://github.com')}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-zinc-300"
                    >
                      GitHub
                    </button>
                    <button
                      onClick={() => setQrValue('https://qrify.tools')}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-zinc-300"
                    >
                      QRify
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => downloadQr('png')}
                      className="flex items-center gap-1 text-red-400 hover:text-red-300 font-medium"
                    >
                      <Download size={13} />
                      <span>PNG</span>
                    </button>
                    <button
                      onClick={() => downloadQr('svg')}
                      className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium ml-2"
                    >
                      <Download size={13} />
                      <span>SVG</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: 3D Floating QR Code Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <QRCard3D
            value={qrValue}
            fgColor={fgColor}
            bgColor={bgColor}
            level={level}
            onOpenGenerator={onOpenGenerator}
            downloadQr={downloadQr}
          />
        </div>
      </div>

      {/* Bottom Features & Tagline Bar (Exact match to screenshot bottom) */}
      <div className="mx-auto max-w-7xl w-full pt-8 mt-4 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
        {/* Left: 3 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full md:w-auto">
          {/* Feature 1: Fast */}
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-950/30 text-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.25)]">
              <Zap size={16} className="fill-red-500/30 stroke-red-500" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-normal">Fast</h4>
              <p className="text-xs text-zinc-400 tracking-normal">Instant generation</p>
            </div>
          </div>

          {/* Feature 2: Simple */}
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-950/30 text-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.25)]">
              <Link2 size={16} className="stroke-red-500" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-normal">Simple</h4>
              <p className="text-xs text-zinc-400 tracking-normal">Just paste & create</p>
            </div>
          </div>

          {/* Feature 3: Reliable */}
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-950/30 text-[#ef4444] shadow-[0_0_12px_rgba(239,68,68,0.25)]">
              <ShieldCheck size={16} className="stroke-red-500" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-normal">Reliable</h4>
              <p className="text-xs text-zinc-400 tracking-normal">Works on any device</p>
            </div>
          </div>
        </div>

        {/* Right: Muted Tagline Text */}
        <div className="text-[11px] font-semibold tracking-[0.25em] text-zinc-500 uppercase select-none">
          CREATE <span className="text-zinc-700">/</span> SCAN <span className="text-zinc-700">/</span> CONNECT
        </div>
      </div>
    </section>
  )
}

