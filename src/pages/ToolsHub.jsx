import { Link } from 'react-router-dom'
import { Zap, Shield, Bot, Users, Crosshair, BarChart3, Search, Eye, FileText, Globe, TrendingUp, RefreshCw, Sparkles } from 'lucide-react'

const allTools = [
  { category: 'Diagnose', tools: [
    { icon: Shield, label: 'Shadowban Audit', desc: 'Fast & deep scan 4 lapisan', to: '/shadowban', color: 'from-blue-500 to-cyan-500' },
    { icon: Search, label: 'Search Ban Check', desc: 'Cek akun muncul di search', to: '/shadowban', color: 'from-blue-600 to-blue-400' },
    { icon: Eye, label: 'Ghost Ban Detector', desc: 'Deteksi reply tersembunyi', to: '/shadowban', color: 'from-indigo-500 to-purple-500' },
    { icon: BarChart3, label: 'Trust Score', desc: 'Skor kepercayaan akun', to: '/dashboard', color: 'from-emerald-500 to-teal-500' },
  ]},
  { category: 'Grow', tools: [
    { icon: Users, label: 'Mutual Universe', desc: 'Direktori mutual + audit', to: '/mutual', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Power Rankings', desc: 'Ranking creator Indonesia', to: '/dashboard', color: 'from-orange-500 to-amber-500' },
    { icon: Globe, label: 'Circle Analytics', desc: 'Audit lingkaran interaksi', to: '/mutual', color: 'from-pink-500 to-rose-500' },
    { icon: RefreshCw, label: 'Unfollow Tracker', desc: 'Tracking unfollow & cleanup', to: '/mutual', color: 'from-red-500 to-orange-500' },
  ]},
  { category: 'Create', tools: [
    { icon: Bot, label: 'AI Agent 3.0', desc: 'Reply cerdas + draft tweet AI', to: '/agent', color: 'from-purple-500 to-pink-500' },
    { icon: Sparkles, label: 'Algo Hacks', desc: '4 versi hook algo-friendly', to: '/agent', color: 'from-violet-500 to-purple-500' },
    { icon: FileText, label: 'X Book', desc: '7 panduan growth lengkap', to: '/tools', color: 'from-amber-500 to-yellow-500' },
  ]},
  { category: 'Recover', tools: [
    { icon: Crosshair, label: 'Unpaused', desc: 'Appeal monetisasi terstruktur', to: '/recover', color: 'from-red-600 to-red-500' },
    { icon: FileText, label: 'Cleanup Tweets', desc: 'Hapus postingan bermasalah', to: '/recover', color: 'from-orange-600 to-red-500' },
    { icon: BarChart3, label: 'Audit Payout', desc: 'Analisis payout + AI playbook', to: '/recover', color: 'from-green-600 to-emerald-500' },
  ]},
]

export default function ToolsHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"><Zap size={20} className="text-white" /></div><div><h1 className="text-2xl md:text-3xl font-bold">Tools Hub</h1><p className="text-sm text-[#71767b]">30+ tools untuk diagnose, recover, grow, create & learn</p></div></div></div>
      {allTools.map(({ category, tools }) => (<div key={category} className="mb-10"><h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><span className="w-1 h-5 bg-[#1d9bf0] rounded-full" />{category}</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">{tools.map(({ icon: Icon, label, desc, to, color }) => (<Link key={label} to={to} className="card-hover glass rounded-xl p-4 group flex items-start gap-3"><div className={}><Icon size={16} className="text-white" /></div><div><h4 className="font-semibold text-sm text-white group-hover:text-[#1d9bf0] transition-colors">{label}</h4><p className="text-xs text-[#71767b] mt-0.5">{desc}</p></div></Link>))}</div></div>))}
      <div className="glass rounded-2xl p-6 text-center mt-6"><p className="text-[#71767b] text-sm">Unlock lebih banyak tools di <Link to="/pricing" className="text-[#1d9bf0] hover:underline font-medium">XToolkit PRO</Link> — Rp 50.000 / 3 bulan</p></div>
    </div>
  )
}