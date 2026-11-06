import React from 'react'
import { Zap, ShieldCheck, DownloadCloud, Smartphone, Sliders, EyeOff } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Generation',
      desc: 'Sub-millisecond code rendering directly in your browser. No server round-trips or wait times.',
    },
    {
      icon: EyeOff,
      title: '100% Client-Side Privacy',
      desc: 'Your text, credentials, and links never leave your device. Zero tracking, zero logs, zero telemetry.',
    },
    {
      icon: DownloadCloud,
      title: 'Lossless Vector SVG & HD PNG',
      desc: 'Export scalable SVGs for print and billboards, or crisp ultra-high resolution PNGs for digital displays.',
    },
    {
      icon: Smartphone,
      title: 'Universal Camera Scanning',
      desc: 'Compliant with ISO/IEC 18004 standard. Instantly recognized by iPhone Camera, Android, and industrial scanners.',
    },
    {
      icon: ShieldCheck,
      title: 'Reed-Solomon Error Correction',
      desc: 'Configurable up to 30% error recovery. Your codes remain scannable even if smudged, torn, or overlaid.',
    },
    {
      icon: Sliders,
      title: 'Permanent & Free Forever',
      desc: 'All generated standard QR codes are static and permanent. No expiration dates, subscription gates, or redirect links.',
    },
  ]

  return (
    <section id="features" className="relative px-6 py-24 sm:px-12 lg:px-16 border-t border-white/[0.06] bg-[#07080b]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-red-600/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Engineered For Speed
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-normal text-white">
            Everything you need. <br />
            <span className="text-[#ef4444]">Nothing you don't.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed tracking-normal">
            QRify is built for developers, creators, and businesses who want instant, uncompromised QR codes without subscription traps.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-[#0f1017]/80 p-7 transition-all duration-300 hover:border-red-500/50 hover:bg-[#13141f] hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-950/20 text-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-red-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed tracking-normal">
                  {feat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

