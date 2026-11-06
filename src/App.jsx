import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GeneratorDrawer } from './components/GeneratorDrawer'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { BottomNav } from './components/BottomNav'
import { CheckCircle2, Download } from 'lucide-react'

export function App() {
  const [qrValue, setQrValue] = useState('https://qrify.tools')
  const [fgColor, setFgColor] = useState('#ffffff')
  const [bgColor, setBgColor] = useState('transparent')
  const [level, setLevel] = useState('Q')
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 2800)
  }

  // Unified download function supporting SVG and High-Res PNG
  const downloadQr = (format = 'svg') => {
    try {
      // Find the SVG element in either hero card or drawer
      const svg = document.querySelector('#hero-qr-container svg') || document.querySelector('#drawer-qr svg')
      if (!svg) {
        showToast('Error finding QR element.')
        return
      }

      if (format === 'svg') {
        const serializer = new XMLSerializer()
        let source = serializer.serializeToString(svg)
        // Add xml namespace if missing
        if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
          source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
        }
        const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `qrify-${Date.now()}.svg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
        showToast('Downloaded Vector SVG!')
      } else if (format === 'png') {
        const serializer = new XMLSerializer()
        const source = serializer.serializeToString(svg)
        const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
        const URLObj = window.URL || window.webkitURL || window
        const blobURL = URLObj.createObjectURL(svgBlob)

        const canvas = document.createElement('canvas')
        const scale = 4 // Ultra HD 4x resolution
        const baseSize = 300
        canvas.width = baseSize * scale
        canvas.height = baseSize * scale
        const ctx = canvas.getContext('2d')

        const img = new Image()
        img.onload = () => {
          // If custom background, paint it; otherwise keep pure transparent canvas
          if (bgColor && bgColor !== 'transparent') {
            ctx.fillStyle = bgColor
            ctx.fillRect(0, 0, canvas.width, canvas.height)
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
          }

          // Draw the QR centered with safety margin
          const padding = 40 * scale
          ctx.drawImage(img, padding, padding, canvas.width - padding * 2, canvas.height - padding * 2)

          const pngUrl = canvas.toDataURL('image/png')
          const link = document.createElement('a')
          link.href = pngUrl
          link.download = `qrify-${Date.now()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URLObj.revokeObjectURL(blobURL)
          showToast('Downloaded High-Resolution PNG!')
        }
        img.src = blobURL
      }
    } catch (err) {
      console.error(err)
      showToast('Download failed. Please try again.')
    }
  }

  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-red-500 selection:text-white flex flex-col justify-between">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 rounded-xl border border-red-500/40 bg-[#12131b] px-4 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(239,68,68,0.35)] backdrop-blur-md animate-toast-in">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Hero Section matching user screenshot */}
      <main className="flex-1">
        <Hero
          qrValue={qrValue}
          setQrValue={setQrValue}
          fgColor={fgColor}
          setFgColor={setFgColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          level={level}
          setLevel={setLevel}
          onOpenGenerator={() => setIsGeneratorOpen(true)}
          downloadQr={downloadQr}
        />

        {/* Feature Breakdown */}
        <Features />

        {/* Workflow / How It Works */}
        <HowItWorks onOpenGenerator={() => setIsGeneratorOpen(true)} />

        {/* About Section */}
        <About />
      </main>

      {/* Floating Bottom Navigation Bar */}
      <BottomNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Interactive Customizer Modal */}
      <GeneratorDrawer
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        qrValue={qrValue}
        setQrValue={setQrValue}
        fgColor={fgColor}
        setFgColor={setFgColor}
        bgColor={bgColor}
        setBgColor={setBgColor}
        level={level}
        setLevel={setLevel}
        downloadQr={downloadQr}
      />
    </div>
  )
}

export default App
