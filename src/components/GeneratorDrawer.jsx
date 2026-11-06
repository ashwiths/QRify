import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import {
  X, Download, Copy, Check, Link, Type, Wifi, User, Mail,
  Palette, Sliders, Sparkles, CheckCircle2, Share2, Layers
} from 'lucide-react'

export function GeneratorDrawer({
  isOpen,
  onClose,
  qrValue,
  setQrValue,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  level,
  setLevel,
  downloadQr,
}) {
  const [activeTab, setActiveTab] = useState('url')
  const [copiedPayload, setCopiedPayload] = useState(false)
  const [copiedImage, setCopiedImage] = useState(false)

  // Wi-Fi form state
  const [wifiSsid, setWifiSsid] = useState('')
  const [wifiPass, setWifiPass] = useState('')
  const [wifiType, setWifiType] = useState('WPA')

  // vCard form state
  const [vcardName, setVcardName] = useState('')
  const [vcardPhone, setVcardPhone] = useState('')
  const [vcardEmail, setVcardEmail] = useState('')

  // Email form state
  const [emailTo, setEmailTo] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')

  if (!isOpen) return null

  // Tab change handler
  const handleTabSelect = (tab) => {
    setActiveTab(tab)
    if (tab === 'url' && !qrValue.startsWith('http')) {
      setQrValue('https://')
    }
  }

  // Real-time Wi-Fi string generator
  const onWifiChange = (s, p, t) => {
    setWifiSsid(s)
    setWifiPass(p)
    setWifiType(t)
    if (s.trim()) {
      setQrValue(`WIFI:T:${t};S:${s};P:${p};;`)
    }
  }

  // Real-time vCard string generator
  const onVCardChange = (n, p, e) => {
    setVcardName(n)
    setVcardPhone(p)
    setVcardEmail(e)
    if (n.trim() || p.trim() || e.trim()) {
      setQrValue(`BEGIN:VCARD\nVERSION:3.0\nN:${n}\nFN:${n}\nTEL:${p}\nEMAIL:${e}\nEND:VCARD`)
    }
  }

  // Real-time Email string generator
  const onEmailChange = (to, sub, body) => {
    setEmailTo(to)
    setEmailSubject(sub)
    setEmailBody(body)
    if (to.trim()) {
      setQrValue(`mailto:${to}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`)
    }
  }

  const copyPayload = () => {
    navigator.clipboard?.writeText(qrValue)
    setCopiedPayload(true)
    setTimeout(() => setCopiedPayload(false), 2000)
  }

  const copyImageToClipboard = async () => {
    try {
      const svg = document.querySelector('#drawer-qr svg')
      if (!svg) return
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = 1000
        canvas.height = 1000
        if (bgColor && bgColor !== 'transparent') {
          ctx.fillStyle = bgColor
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        ctx.drawImage(img, 60, 60, 880, 880)
        canvas.toBlob((blob) => {
          if (blob && navigator.clipboard?.write) {
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
            setCopiedImage(true)
            setTimeout(() => setCopiedImage(false), 2000)
          }
        })
      }
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
    } catch (err) {
      console.error(err)
    }
  }

  const colorPresets = [
    { label: 'Crisp White', value: '#ffffff' },
    { label: 'Neon Red', value: '#ef4444' },
    { label: 'Crimson Rose', value: '#f43f5e' },
    { label: 'Cyber Cyan', value: '#06b6d4' },
    { label: 'Matrix Emerald', value: '#10b981' },
    { label: 'Solar Amber', value: '#f59e0b' },
    { label: 'Cosmic Violet', value: '#a855f7' },
  ]

  const bgPresets = [
    { label: 'Transparent', value: 'transparent' },
    { label: 'Deep Dark', value: '#08090d' },
    { label: 'Midnight Slate', value: '#14151f' },
    { label: 'Clean White', value: '#ffffff' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-red-500/30 
                   bg-[#0e0f16] p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.25)] text-white animate-modal-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/30 text-red-500">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                QRify Studio
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                  AAA isolutions
                </span>
              </h2>
              <p className="text-xs text-zinc-400">Configure content, styling, and export high-resolution assets</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Studio Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left Column: Input and Styling Options */}
          <div className="lg:col-span-7 space-y-6">
            {/* Input Type Selector Tabs */}
            <div>
              <label className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2.5 block">
                QR Code Type
              </label>
              <div className="grid grid-cols-5 gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5 text-xs font-medium">
                <button
                  onClick={() => handleTabSelect('url')}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${activeTab === 'url' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  <Link size={14} />
                  <span>URL</span>
                </button>
                <button
                  onClick={() => handleTabSelect('text')}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${activeTab === 'text' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  <Type size={14} />
                  <span>Text</span>
                </button>
                <button
                  onClick={() => handleTabSelect('wifi')}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${activeTab === 'wifi' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  <Wifi size={14} />
                  <span>Wi-Fi</span>
                </button>
                <button
                  onClick={() => handleTabSelect('vcard')}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${activeTab === 'vcard' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  <User size={14} />
                  <span>vCard</span>
                </button>
                <button
                  onClick={() => handleTabSelect('email')}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${activeTab === 'email' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'text-zinc-400 hover:text-white'
                    }`}
                >
                  <Mail size={14} />
                  <span>Email</span>
                </button>
              </div>
            </div>

            {/* Dynamic Content Inputs */}
            <div>
              {activeTab === 'url' && (
                <div>
                  <label className="text-xs font-semibold uppercase text-zinc-400 mb-1.5 block">
                    Website Address / URL
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 focus-within:border-red-500">
                    <Link size={16} className="text-red-400 shrink-0" />
                    <input
                      type="url"
                      value={qrValue}
                      onChange={(e) => setQrValue(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                    />
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400">
                    <span className="font-mono text-zinc-500">Presets:</span>
                    <button
                      onClick={() => setQrValue('https://wa.me/')}
                      className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={() => setQrValue('https://instagram.com/')}
                      className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
                    >
                      Instagram
                    </button>
                    <button
                      onClick={() => setQrValue('https://github.com/')}
                      className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
                    >
                      GitHub
                    </button>
                    <button
                      onClick={() => setQrValue('https://qrify.tools')}
                      className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white"
                    >
                      Reset Default
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'text' && (
                <div>
                  <label className="text-xs font-semibold uppercase text-zinc-400 mb-1.5 block">
                    Plain Text Message
                  </label>
                  <textarea
                    rows={3}
                    value={qrValue}
                    onChange={(e) => setQrValue(e.target.value)}
                    placeholder="Type any message, note, code, or secret text..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 p-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500"
                  />
                </div>
              )}

              {activeTab === 'wifi' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Network Name (SSID)</label>
                    <input
                      type="text"
                      value={wifiSsid}
                      onChange={(e) => onWifiChange(e.target.value, wifiPass, wifiType)}
                      placeholder="e.g. Home_5G_Guest"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Password</label>
                      <input
                        type="password"
                        value={wifiPass}
                        onChange={(e) => onWifiChange(wifiSsid, e.target.value, wifiType)}
                        placeholder="Wi-Fi Password"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Encryption</label>
                      <select
                        value={wifiType}
                        onChange={(e) => onWifiChange(wifiSsid, wifiPass, e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-red-500"
                      >
                        <option value="WPA" className="bg-[#0e0f16]">WPA/WPA2/WPA3</option>
                        <option value="WEP" className="bg-[#0e0f16]">WEP</option>
                        <option value="nopass" className="bg-[#0e0f16]">Open (No Password)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vcard' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      value={vcardName}
                      onChange={(e) => onVCardChange(e.target.value, vcardPhone, vcardEmail)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Phone</label>
                      <input
                        type="tel"
                        value={vcardPhone}
                        onChange={(e) => onVCardChange(vcardName, e.target.value, vcardEmail)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Email</label>
                      <input
                        type="email"
                        value={vcardEmail}
                        onChange={(e) => onVCardChange(vcardName, vcardPhone, e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'email' && (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Recipient Email</label>
                    <input
                      type="email"
                      value={emailTo}
                      onChange={(e) => onEmailChange(e.target.value, emailSubject, emailBody)}
                      placeholder="support@company.com"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase text-zinc-400 mb-1 block">Subject</label>
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => onEmailChange(emailTo, e.target.value, emailBody)}
                      placeholder="Inquiry / Feedback"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white outline-none focus:border-red-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Color & Visual Styling */}
            <div className="pt-2 border-t border-white/10 space-y-4">
              {/* Foreground Color */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Palette size={14} className="text-red-400" />
                  QR Accent Color
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setFgColor(preset.value)}
                      title={preset.label}
                      className={`size-8 rounded-full border-2 transition-transform ${fgColor.toLowerCase() === preset.value.toLowerCase()
                          ? 'scale-110 border-white shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                          : 'border-white/20 hover:scale-105'
                        }`}
                      style={{ backgroundColor: preset.value }}
                    />
                  ))}
                  <div className="relative flex items-center ml-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="size-8 cursor-pointer rounded-full bg-transparent border-0 opacity-0 absolute inset-0"
                    />
                    <div
                      className="size-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-zinc-400"
                      style={{ backgroundColor: fgColor }}
                    >
                      #
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Canvas Mode */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Layers size={14} className="text-red-400" />
                  Background Canvas
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  {bgPresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setBgColor(preset.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${bgColor === preset.value
                          ? 'bg-red-500/20 border-red-500/60 text-white'
                          : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error Correction Level */}
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Sliders size={14} className="text-red-400" />
                  Error Correction Level
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[
                    { key: 'L', label: 'Low 7%' },
                    { key: 'M', label: 'Medium 15%' },
                    { key: 'Q', label: 'Quartile 25%' },
                    { key: 'H', label: 'High 30%' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setLevel(item.key)}
                      className={`py-2 px-1 rounded-xl text-center font-medium border transition-colors ${level === item.key
                          ? 'bg-red-500/20 border-red-500/60 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                          : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live QR Preview & Actions */}
          <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 rounded-2xl bg-black/60 border border-white/10">
            <div className="w-full text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Live Preview</span>

              <div
                id="drawer-qr"
                className="mt-4 mx-auto p-6 rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                style={{
                  backgroundColor: bgColor === 'transparent' ? '#090a0f' : bgColor,
                }}
              >
                <QRCodeSVG
                  value={qrValue || 'https://qrify.tools'}
                  size={190}
                  level={level}
                  fgColor={fgColor}
                  bgColor={bgColor === 'transparent' ? 'transparent' : bgColor}
                  includeMargin={false}
                />
              </div>

              <p className="mt-3 text-xs text-zinc-400 truncate max-w-xs mx-auto">
                {qrValue || 'No content entered'}
              </p>
            </div>

            {/* Export & Download Buttons */}
            <div className="w-full space-y-2.5 mt-6">
              <button
                onClick={() => downloadQr('png')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:brightness-110 active:scale-[0.99] transition-all"
              >
                <Download size={16} />
                Download High-Res PNG
              </button>

              <button
                onClick={() => downloadQr('svg')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                Download Vector SVG
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={copyImageToClipboard}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copiedImage ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedImage ? 'Image Copied!' : 'Copy Image'}</span>
                </button>

                <button
                  onClick={copyPayload}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copiedPayload ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  <span>{copiedPayload ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
