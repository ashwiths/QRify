import React, { useState, useEffect } from 'react'
import { Home, Zap, Info, Plus, ArrowUp } from 'lucide-react'

export function BottomNav({ activeSection, setActiveSection, onOpenGenerator }) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine which section is currently in view
      const featuresEl = document.getElementById('features')
      const aboutEl = document.getElementById('about')

      if (aboutEl && currentScrollY >= aboutEl.offsetTop - 300) {
        setActiveSection('about')
      } else if (featuresEl && currentScrollY >= featuresEl.offsetTop - 300) {
        setActiveSection('features')
      } else {
        setActiveSection('home')
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const scrollToSection = (id) => {
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
    <aside 
      aria-label="Bottom Navigation"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none animate-fade-in"
    >
      <nav 
        className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/12 
                   bg-[#0d0e15]/90 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(239,68,68,0.2)] 
                   backdrop-blur-xl"
      >
        {/* Home Link */}
        <button
          onClick={() => scrollToSection('home')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            activeSection === 'home'
              ? 'bg-red-500/20 text-white border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
          title="Go to Home"
        >
          <Home size={14} className={activeSection === 'home' ? 'text-red-400' : ''} />
          <span className="hidden sm:inline">Home</span>
        </button>

        {/* Features Link */}
        <button
          onClick={() => scrollToSection('features')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            activeSection === 'features'
              ? 'bg-red-500/20 text-white border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
          title="Explore Features"
        >
          <Zap size={14} className={activeSection === 'features' ? 'text-red-400' : ''} />
          <span className="hidden sm:inline">Features</span>
        </button>

        {/* About Link */}
        <button
          onClick={() => scrollToSection('about')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
            activeSection === 'about'
              ? 'bg-red-500/20 text-white border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
          title="Read About & Manifesto"
        >
          <Info size={14} className={activeSection === 'about' ? 'text-red-400' : ''} />
          <span className="hidden sm:inline">About</span>
        </button>

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-white/10 mx-0.5" />

        {/* Quick Action: Create QR */}
        <button
          onClick={onOpenGenerator}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:brightness-110 active:scale-95 transition-all"
          title="Open QR Customizer Studio"
        >
          <Plus size={14} />
          <span>Create</span>
        </button>

        {/* Scroll To Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex size-7 items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Scroll to top"
        >
          <ArrowUp size={13} />
        </button>
      </nav>
    </aside>
  )
}
