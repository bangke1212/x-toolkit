import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Sparkles, Shield, Users, Bot, BarChart3, Crosshair } from 'lucide-react'

const navLinks = [
  { to: '/shadowban', label: 'Shadowban', icon: Shield },
  { to: '/tools', label: 'Tools', icon: Zap },
  { to: '/recover', label: 'Recover', icon: Crosshair },
  { to: '/mutual', label: 'Mutual', icon: Users },
  { to: '/agent', label: 'AI Agent', icon: Bot },
  { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 glass border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-[#1d9bf0] rounded-xl flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-white">
              X<span className="text-[#1d9bf0]">Toolkit</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === to
                    ? 'bg-[#1d9bf0]/10 text-[#1d9bf0]'
                    : 'text-[#71767b] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/pricing" className="text-sm font-medium text-[#71767b] hover:text-white transition-colors">
              Harga
            </Link>
            <Link
              to="/shadowban"
              className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Cek Shadowban
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 text-[#71767b]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-[#2a2a2a] px-4 py-4 space-y-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium ${
                location.pathname === to
                  ? 'bg-[#1d9bf0]/10 text-[#1d9bf0]'
                  : 'text-[#71767b] hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
          <Link to="/pricing" onClick={() => setOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-[#71767b]">
            💰 Harga
          </Link>
          <Link to="/shadowban" onClick={() => setOpen(false)} className="block w-full bg-[#1d9bf0] text-white text-center py-3 rounded-lg text-sm font-medium mt-3">
            Cek Shadowban Gratis
          </Link>
        </div>
      )}
    </nav>
  )
}