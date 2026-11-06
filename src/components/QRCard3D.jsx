import React, { useRef, useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Sparkles, Download, Copy, Check } from 'lucide-react'

export function QRCard3D({
  value = 'https://qrify.tools',
  fgColor = '#ffffff',
  bgColor = 'transparent',
  level = 'Q',
  size = 230,
  includeMargin = false,
  onOpenGenerator,
  downloadQr,
}) {
  const cardRef = useRef(null)
  const [rotate, setRotate] = useState({ x: 12, y: -18 })
  const [copied, setCopied] = useState(false)

  // Subtle interactive 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Smooth bounded rotation around base values: base X is 12deg, base Y is -18deg
    const targetX = 12 - (y / rect.height) * 16
    const targetY = -18 + (x / rect.width) * 18
    setRotate({ x: targetX, y: targetY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 12, y: -18 })
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="relative flex items-center justify-center p-4 lg:p-8 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Deep Red Ambient Backlight Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-r from-red-600/30 via-red-500/25 to-rose-600/20 blur-[110px] pointer-events-none animate-pulse-glow" />

      {/* Atmospheric curved wave glow overlay */}
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-red-600/10 blur-[130px] pointer-events-none" />

      {/* Glowing Red Orbital Neon Rings encircling the 3D card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          className="w-[130%] h-[130%] max-w-[540px] max-h-[540px] overflow-visible"
          viewBox="0 0 500 500"
          fill="none"
        >
          <defs>
            {/* Red Neon Glow Filter */}
            <filter id="neonOrbGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for the glowing orbital ring */}
            <linearGradient id="orbitRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#ef4444" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ff4458" stopOpacity="1" />
              <stop offset="75%" stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.15" />
            </linearGradient>

            {/* Core specular hot light */}
            <linearGradient id="orbitWhiteCore" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Primary Red Neon Outer Orbit Ring */}
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="110"
            transform="rotate(-26 250 250)"
            stroke="url(#orbitRedGrad)"
            strokeWidth="3.5"
            filter="url(#neonOrbGlow)"
            strokeDasharray="900 120"
          />

          {/* Secondary Faint Ambient Trace */}
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="110"
            transform="rotate(-26 250 250)"
            stroke="#ef4444"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />

          {/* Specular White Energy Streak */}
          <ellipse
            cx="250"
            cy="250"
            rx="230"
            ry="110"
            transform="rotate(-26 250 250)"
            stroke="url(#orbitWhiteCore)"
            strokeWidth="1.8"
            strokeDasharray="180 800"
            strokeDashoffset="140"
          />
        </svg>
      </div>

      {/* The 3D Floating QR Code Card */}
      <div
        ref={cardRef}
        style={{
          transform: `perspective(1100px) rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) rotateZ(-2.5deg)`,
          transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)',
        }}
        className="group relative z-10 w-[290px] sm:w-[350px] aspect-square rounded-[2rem] p-6 sm:p-8 
                   bg-gradient-to-br from-[#1e202a]/95 via-[#13141a]/95 to-[#0b0c10] 
                   border border-white/12 shadow-[0_25px_65px_-12px_rgba(0,0,0,0.95),0_0_35px_-8px_rgba(239,68,68,0.45)]
                   backdrop-blur-2xl cursor-pointer preserve-3d"
        onClick={onOpenGenerator}
        title="Click to customize this QR code"
      >
        {/* Top-edge Bevel Reflection Highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Ambient Corner Red Glow on the Card */}
        <div className="pointer-events-none absolute -bottom-4 -left-4 size-32 rounded-full bg-red-600/15 blur-2xl" />

        {/* Inner Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5" />

        {/* Diagonal Glass Specular Shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent" />

        {/* QR Code Container */}
        <div
          id="hero-qr-container"
          className="relative flex size-full items-center justify-center rounded-2xl bg-black/40 p-4 sm:p-5 border border-white/5 overflow-hidden"
        >
          {/* Animated Laser Scanning Line */}
          <div className="pointer-events-none absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_#ef4444,0_0_24px_#ef4444] animate-laser-scan z-20" />

          {/* Actual Dynamic QR Code */}
          <div className="relative z-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] transition-transform group-hover:scale-[1.02]">
            <QRCodeSVG
              value={value || 'https://qrify.tools'}
              size={size}
              level={level}
              fgColor={fgColor}
              bgColor={bgColor}
              includeMargin={includeMargin}
              className="size-full max-w-[200px] max-h-[200px] sm:max-w-[250px] sm:max-h-[250px]"
            />
          </div>

          {/* Interactive Quick Overlay on Hover */}
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 rounded-2xl">
            <div className="flex flex-col items-center gap-2 text-center p-3">
              <span className="flex items-center gap-1.5 rounded-full border border-red-500/50 bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                <Sparkles size={13} />
                Click to Customize
              </span>
              <p className="text-[11px] text-zinc-400">Update text, change colors & download</p>
            </div>
          </div>
        </div>

        {/* Bottom Card Controls Pill */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 font-medium px-1">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400 tracking-wider">LIVE 3D</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleCopyLink()
              }}
              className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Copy QR payload"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                downloadQr?.('svg')
              }}
              className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors"
              title="Quick download SVG"
            >
              <Download size={12} />
              <span>SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

