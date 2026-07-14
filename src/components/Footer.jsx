import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#1d9bf0] rounded-lg flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="font-bold text-lg">
                X<span className="text-[#1d9bf0]">Toolkit</span>
              </span>
            </div>
            <p className="text-sm text-[#71767b]">
              Toolkit creator X #1 Indonesia. Shadowban audit, recovery monetisasi, AI agent, dan analytics — gratis.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Tools</h4>
            <div className="space-y-2">
              {[{ to: '/shadowban', label: 'Shadowban Audit' },{ to: '/tools', label: 'Tools Hub' },{ to: '/recover', label: 'Recover Suite' },{ to: '/mutual', label: 'Mutual Universe' }].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-sm text-[#71767b] hover:text-white transition-colors">{label}</Link>))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">AI</h4>
            <div className="space-y-2">
              {[{ to: '/agent', label: 'AI Agent 3.0' },{ to: '/dashboard', label: 'Dashboard' },{ to: '/pricing', label: 'Pricing' }].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-sm text-[#71767b] hover:text-white transition-colors">{label}</Link>))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Komunitas</h4>
            <div className="space-y-2">
              <a href="https://x.com" target="_blank" rel="noopener" className="block text-sm text-[#71767b] hover:text-white transition-colors">X/Twitter</a>
              <span className="block text-sm text-[#71767b]">Discord (Soon)</span>
              <span className="block text-sm text-[#71767b]">Telegram (Soon)</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2a2a2a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71767b]">© 2026 XToolkit. Dibuat dengan ❤️ untuk creator Indonesia.</p>
          <div className="flex items-center gap-4 text-sm text-[#71767b]">
            <span>Privacy</span><span>·</span><span>Terms</span><span>·</span><span>Donate</span>
          </div>
        </div>
      </div>
    </footer>
  )
}