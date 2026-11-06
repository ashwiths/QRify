import React from 'react'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050608] px-6 pt-14 pb-28 sm:px-12 lg:px-20 text-zinc-400">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Studio Attribution */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-md bg-[#14151c] border border-white/10 p-1 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <svg viewBox="0 0 32 32" className="size-full" fill="none">
                  <rect x="2" y="2" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
                  <rect x="5" y="5" width="4" height="4" rx="1" fill="#ffffff" />
                  <rect x="20" y="2" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
                  <rect x="23" y="5" width="4" height="4" rx="1" fill="#ffffff" />
                  <rect x="2" y="20" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
                  <rect x="5" y="23" width="4" height="4" rx="1" fill="#ffffff" />
                  <rect x="20" y="20" width="5" height="5" rx="1" fill="#ef4444" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                QR<span className="text-[#ef4444]">ify</span>
              </span>
            </div>
            
            <p className="text-xs text-zinc-400 font-light">
              A minimalist, privacy-first utility engineered by{' '}
              <span className="font-semibold text-white tracking-tight">
                AAA isolutions<span className="text-[#ef4444]">.</span>
              </span>
            </p>
          </div>

          {/* Quick Nav / Anchors */}
          <div className="flex flex-wrap items-center gap-8 text-xs font-mono text-zinc-400">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#features" className="hover:text-white transition-colors">FEATURES</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">CLIENT-SIDE ONLY</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-red-500/40 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="text-red-400" />
          </button>
        </div>

        {/* Bottom Colophon line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} QRify. Conceived & Powered by <strong className="text-zinc-300">AAA isolutions.</strong>
          </div>
          <div>
            ISO/IEC 18004 COMPLIANT • REED-SOLOMON ALGORITHM • NO COOKIES
          </div>
        </div>
      </div>
    </footer>
  )
}
