import React from 'react'

export function Navbar({ onOpenGenerator, activeSection, setActiveSection }) {
  const scrollTo = (id) => {
    setActiveSection(id)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="relative z-40 w-full px-6 py-6 sm:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home') }}
          className="group flex items-center gap-3 select-none"
        >
          {/* Custom Stylized QR Code Logo Icon matching screenshot */}
          <div className="relative flex size-9 items-center justify-center rounded-lg bg-[#14151c] border border-white/10 p-1.5 shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 32 32" className="size-full" fill="none">
              {/* Top-Left Finder */}
              <rect x="2" y="2" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
              <rect x="5" y="5" width="4" height="4" rx="1" fill="#ffffff" />
              {/* Top-Right Finder */}
              <rect x="20" y="2" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
              <rect x="23" y="5" width="4" height="4" rx="1" fill="#ffffff" />
              {/* Bottom-Left Finder */}
              <rect x="2" y="20" width="10" height="10" rx="2" stroke="#ef4444" strokeWidth="2" />
              <rect x="5" y="23" width="4" height="4" rx="1" fill="#ffffff" />
              {/* Modules */}
              <rect x="15" y="6" width="3" height="3" rx="0.5" fill="#ef4444" />
              <rect x="6" y="15" width="3" height="3" rx="0.5" fill="#ffffff" />
              <rect x="15" y="15" width="3" height="3" rx="0.5" fill="#ffffff" />
              <rect x="20" y="20" width="3.5" height="3.5" rx="0.5" fill="#ef4444" />
              <rect x="26" y="20" width="3.5" height="3.5" rx="0.5" fill="#ffffff" />
              <rect x="20" y="26" width="3.5" height="3.5" rx="0.5" fill="#ffffff" />
              <rect x="26" y="26" width="3.5" height="3.5" rx="0.5" fill="#ef4444" />
            </svg>
          </div>

          <div className="flex items-baseline text-2xl font-bold tracking-normal">
            <span className="text-white">QR</span>
            <span className="text-[#ef4444]">ify</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <button
            onClick={() => scrollTo('home')}
            className={`relative py-1 transition-colors ${
              activeSection === 'home' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-1/2 h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
            )}
          </button>

          <button
            onClick={() => scrollTo('features')}
            className={`relative py-1 transition-colors ${
              activeSection === 'features' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Features
            {activeSection === 'features' && (
              <span className="absolute bottom-0 left-1/2 h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
            )}
          </button>

          <button
            onClick={() => scrollTo('about')}
            className={`relative py-1 transition-colors ${
              activeSection === 'about' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            About
            {activeSection === 'about' && (
              <span className="absolute bottom-0 left-1/2 h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
            )}
          </button>
        </nav>

        {/* Right Pill Badge: Free Tool */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121319]/80 px-4 py-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-300">Free Tool</span>
          </div>

          <button
            onClick={onOpenGenerator}
            className="md:hidden flex items-center justify-center size-9 rounded-lg border border-red-500/40 bg-red-500/10 text-red-400"
            aria-label="Open Generator"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

