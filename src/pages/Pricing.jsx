import { Check, X as XIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { name: 'Cek Shadowban (Fast Scan)', free: '4x per 6 jam', pro: 'Unlimited' },
  { name: 'Deep Scan', free: '2x per 6 jam', pro: 'Unlimited' },
  { name: 'AI Agent 3.0', free: '20 reply/sesi', pro: 'Unlimited + AI premium' },
  { name: 'Algo Hacks', free: '2 saran AI', pro: '4 versi + model canggih' },
  { name: 'Laporan 7 Hari', free: 'Lihat', pro: 'Permanen + export' },
  { name: 'Memorizer', free: 'Lihat', pro: 'Permanen' },
  { name: 'Mutual Universe', free: 'Lihat', pro: 'Unlimited audit + unfollow' },
  { name: 'Recover Suite', free: 'Basic guide', pro: 'AI Playbook + appeal template' },
  { name: 'Support System', free: 'Mode Fast', pro: 'Mode Deep' },
  { name: 'Audit Payout', free: '-', pro: 'Detail + AI playbook' },
  { name: 'X Book (7 panduan)', free: '-', pro: 'Akses penuh' },
  { name: 'Signal & XCLIP', free: '-', pro: 'Termasuk' },
  { name: 'Komunitas PRO', free: '-', pro: 'Termasuk' },
]

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="text-center mb-10"><h1 className="text-3xl md:text-4xl font-bold mb-3">Free cukup buat coba. PRO buat serius.</h1><p className="text-[#71767b] max-w-lg mx-auto">Satu kali bayar Rp 50.000 — akses penuh 3 bulan. Tanpa auto-renew.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#2a2a2a]"><h3 className="text-xl font-bold text-white mb-1">Free</h3><div className="text-3xl font-extrabold text-white mb-2">Rp 0</div><p className="text-sm text-[#71767b] mb-6">Daftar gratis — tools dasar untuk mulai audit akun.</p><Link to="/shadowban" className="block w-full text-center bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all mb-6">Daftar gratis</Link><div className="space-y-3">{features.map(({ name, free }) => (<div key={name} className="flex items-start gap-2 text-sm">{free === '-' ? (<XIcon size={14} className="text-[#555] shrink-0 mt-0.5" />) : (<Check size={14} className="text-[#00ba7c] shrink-0 mt-0.5" />)}<span className={free === '-' ? 'text-[#555]' : 'text-[#a0a0a0]'}><span className="text-white">{name}</span>{free !== '-' && <span className="text-[#71767b]"> — {free}</span>}</span></div>))}</div></div>
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#1d9bf0]/30 relative overflow-hidden"><div className="absolute top-0 right-0 bg-[#1d9bf0] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">POPULER</div><h3 className="text-xl font-bold text-[#1d9bf0] mb-1">PRO</h3><div className="text-3xl font-extrabold text-white mb-1">Rp 50.000</div><p className="text-sm text-[#71767b] mb-1">/ 3 bulan · Rp 16.700/bln</p><p className="text-xs text-[#ffd400] mb-6">Sekali bayar — tidak auto-renew</p><button className="block w-full text-center bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all mb-6">Upgrade ke PRO</button><div className="space-y-3">{features.map(({ name, pro }) => (<div key={name} className="flex items-start gap-2 text-sm"><Check size={14} className="text-[#1d9bf0] shrink-0 mt-0.5" /><span className="text-[#a0a0a0]"><span className="text-white">{name}</span><span className="text-[#71767b]"> — {pro}</span></span></div>))}</div></div>
      </div>
      <div className="text-center"><p className="text-sm text-[#555]">PRO berlaku 3 bulan dari pembelian. Tidak auto-renew — habis masa aktif, akun balik ke Free.</p><p className="text-xs text-[#555] mt-2">Butuh bulk unfollow? Install <a href="#" className="text-[#1d9bf0] hover:underline">XToolkit Power</a> (Chrome/Firefox Extension)</p></div>
    </div>
  )
}