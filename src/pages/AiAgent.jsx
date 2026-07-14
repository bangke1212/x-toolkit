import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Send, Sparkles, Copy, RefreshCw, Zap, PenLine, MessageCircle, FileText } from 'lucide-react'

const modes = [
  { id: 'reply', label: 'Reply Cerdas', icon: MessageCircle, desc: 'Generate balasan tweet yang engaging & natural' },
  { id: 'draft', label: 'Draft Tweet', icon: PenLine, desc: 'Bikin tweet baru yang algo-friendly' },
  { id: 'hooks', label: 'Algo Hacks', icon: Zap, desc: '4 versi hook & struktur tweet untuk engagement maksimal' },
]

const toneOptions = ['Casual', 'Professional', 'Witty', 'Inspirational', 'Sarcastic', 'Educational']
const langOptions = ['ID', 'EN', 'Mixed ID/EN']

export default function AiAgent() {
  const [mode, setMode] = useState('reply')
  const [tone, setTone] = useState('Casual')
  const [lang, setLang] = useState('ID')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  const handleGenerate = async () => { if (!input.trim()) return; setLoading(true); await new Promise(r => setTimeout(r, 1500 + Math.random() * 2000));
    const replies = { reply: ['Setuju banget! Ini mirip kayak yang gue alamin. Konsistensi itu kuncinya.','Nah ini insight underrated. Banyak yang fokus vanity metrics, lupa retention. Good stuff!','Pernah di posisi sama dan cara ini works. Thanks for sharing!'],
      draft: ['Unpopular opinion: Kebanyakan creator overthinking soal algoritma. Padahal yang paling berpengaruh: konsistensi posting, kualitas konten, engagement genuine. Sisanya cuma noise.'],
      hooks: ['V1 (Curiosity): Gue nemu 1 trick bikin reach naik 300%. V2 (Contrarian): Stop ngejar viral. Slow growth > fast growth. V3 (Emotional): Gue hampir quit X sampai gue sadar 1 hal. V4 (Educational): 3 langkah naikin visibility tanpa tools mahal.'] }
    setOutput(replies[mode]?.[0] || replies.reply[0])
    setHistory(prev => [{ input, output: replies[mode]?.[0] || replies.reply[0], mode, timestamp: new Date().toLocaleTimeString('id-ID') }, ...prev].slice(0, 20))
    setLoading(false) }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"><Bot size={20} className="text-white" /></div><div><h1 className="text-2xl md:text-3xl font-bold">AI Agent 3.0</h1><p className="text-sm text-[#71767b]">Generate reply, draft tweet, dan algo hacks — powered by AI</p></div></div></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-4"><div className="flex flex-wrap gap-2">{modes.map(({ id, label, icon: Icon }) => (<button key={id} onClick={() => { setMode(id); setOutput('') }} className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${mode === id ? 'bg-[#1d9bf0] text-white' : 'bg-[#0a0a0a] text-[#71767b] hover:text-white border border-[#2a2a2a]'}`}><Icon size={15} />{label}</button>))}</div></div>
          <div className="glass rounded-2xl p-5"><label className="text-sm font-medium text-white mb-2 block">{mode === 'reply' ? 'Tweet yang mau dibalas' : mode === 'draft' ? 'Topik / ide tweet' : 'Topik untuk algo hacks'}</label><textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === 'reply' ? 'Paste tweet yang mau kamu balas...' : mode === 'draft' ? 'Tulis topik atau ide tweet kamu...' : 'Topik apa yang mau dibikinin hooks?'} rows={4} className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#1d9bf0] transition-colors resize-none" />
            <div className="flex flex-wrap gap-3 mt-3"><select value={tone} onChange={(e) => setTone(e.target.value)} className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs text-white">{toneOptions.map(t => <option key={t}>{t}</option>)}</select><select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs text-white">{langOptions.map(l => <option key={l}>{l}</option>)}</select></div>
            <button onClick={handleGenerate} disabled={loading || !input.trim()} className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 text-white px-5 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">{loading ? <RefreshCw size={16} className="animate-spin" /> : <Sparkles size={16} />}Generate {mode === 'reply' ? 'Reply' : mode === 'draft' ? 'Tweet' : 'Hooks'}</button></div>
          {output && (<div className="glass rounded-2xl p-5"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-[#1d9bf0] flex items-center gap-1"><Sparkles size={12} /> Generated with AI · {tone} · {lang}</span><div className="flex items-center gap-1"><button onClick={() => navigator.clipboard.writeText(output)} className="p-2 rounded-lg hover:bg-white/5 text-[#71767b] hover:text-white"><Copy size={14} /></button><button onClick={handleGenerate} className="p-2 rounded-lg hover:bg-white/5 text-[#71767b] hover:text-white"><RefreshCw size={14} /></button></div></div><div className="bg-[#0a0a0a] rounded-lg p-4 text-sm text-white whitespace-pre-wrap leading-relaxed">{output}</div></div>)}
        </div>
        <div className="lg:col-span-1"><div className="glass rounded-2xl p-5 sticky top-24"><h3 className="font-semibold text-white mb-4 flex items-center gap-2"><FileText size={16} className="text-[#71767b]" />Riwayat Generate</h3>{history.length === 0 ? (<div className="text-center py-8"><Bot size={32} className="mx-auto mb-2 text-[#333]" /><p className="text-sm text-[#555]">Belum ada riwayat. Mulai generate!</p></div>) : (<div className="space-y-3 max-h-[500px] overflow-y-auto">{history.map((item, i) => (<div key={i} className="bg-[#0a0a0a] rounded-lg p-3 text-xs"><div className="flex items-center justify-between mb-1"><span className="text-[#1d9bf0] font-medium capitalize">{item.mode}</span><span className="text-[#555]">{item.timestamp}</span></div><p className="text-[#a0a0a0] truncate">{item.input}</p><button onClick={() => { setInput(item.input); setMode(item.mode); setOutput(item.output) }} className="text-[#1d9bf0] hover:underline mt-1 text-[10px]">Lihat & pakai lagi</button></div>))}</div>)}</div></div>
      </div>
    </div>
  )
}