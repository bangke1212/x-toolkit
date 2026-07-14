import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot, Send, Sparkles, Copy, RefreshCw, Zap,
  PenLine, MessageCircle, FileText, Check, Trash2,
  User, ArrowRight
} from 'lucide-react'

const API_URL = 'https://api.hcnsec.cn/v1/chat/completions'
const API_KEY = 'sk-6Tvn0yQbTDFfqbtgK4ldWIahdpIME5w87EEHGZQZFvEvdwmS'
const MODEL = 'auto'

const modes = [
  { id: 'reply', label: 'Smart Reply', icon: MessageCircle, desc: 'Generate engaging & natural tweet replies' },
  { id: 'draft', label: 'Draft Tweet', icon: PenLine, desc: 'Create algo-friendly tweets from scratch' },
  { id: 'hooks', label: 'Emotional Hook', icon: Zap, desc: 'One powerful emotional hook for your tweet' },
]

const toneOptions = ['Casual', 'Professional', 'Witty', 'Inspirational', 'Sarcastic', 'Educational']
const langOptions = ['ID', 'EN', 'Mixed ID/EN']

const getSystemPrompt = (mode, tone, lang) => {
  const langRules = {
    'ID': 'CRITICAL: You MUST reply entirely in Bahasa Indonesia. Use casual, natural Indonesian like how Indonesian Twitter users speak. NEVER use English. NEVER mix languages.',
    'EN': 'CRITICAL: You MUST reply entirely in English. Use natural, conversational English like a native speaker on X/Twitter. NEVER use Indonesian. NEVER mix languages.',
    'Mixed ID/EN': 'Reply in a mix of Indonesian and English, casual and natural like Indonesian Twitter users who code-switch.'
  }

  const toneInstruction = {
    Casual: 'Keep it casual, friendly, and cool.',
    Professional: 'Be professional but not stiff.',
    Witty: 'Make it witty, clever, and maybe a bit sarcastic.',
    Inspirational: 'Make it motivational and uplifting.',
    Sarcastic: 'Be playfully sarcastic and edgy.',
    Educational: 'Be informative and educational, like a thread style.',
  }[tone]

  const modeInstruction = {
    reply: `You are an AI that writes smart, engaging replies to tweets. Given a tweet, craft a natural reply that adds value — agree, disagree respectfully, add insight, or ask a follow-up question. ${toneInstruction} ${langRules[lang]} Reply with ONLY the reply text, no quotes, no explanations. CRITICAL: MAX 280 CHARACTERS total — this is the X/Twitter limit. Write MAX 2-3 very short sentences. If it exceeds 280 chars, it will be cut off. Keep it extremely concise.`,
    draft: `You are an AI that drafts viral-worthy tweets. Given a topic, write a compelling tweet. ${toneInstruction} ${langRules[lang]} Use hooks, line breaks, and engaging structure. Make it algo-friendly: strong hook, valuable content, clear CTA. CRITICAL: MAX 280 CHARACTERS total — X/Twitter hard limit. Use short, punchy sentences with line breaks. Do NOT exceed 280 characters. Keep it tight and impactful. Reply with ONLY the tweet text, no quotes around it.`,
    hooks: `You are an AI that generates ONE emotional tweet hook for a given topic. ${toneInstruction} ${langRules[lang]} Craft a single powerful, emotional hook that grabs attention. Use strong imagery, raw emotion, and a CTA. MUST be UNDER 200 words, fit in one X/Twitter post. Reply with ONLY the hook text.`,
  }[mode]

  return modeInstruction
}

export default function AiAgent() {
  const [mode, setMode] = useState('reply')
  const [tone, setTone] = useState('Casual')
  const [lang, setLang] = useState('ID')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [history, setHistory] = useState([])
  const [error, setError] = useState('')
  const resultRef = useRef(null)

  const handleGenerate = async () => {
    if (!input.trim()) return
    setLoading(true)
    setError('')
    setOutput('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: getSystemPrompt(mode, tone, lang) },
            { role: 'user', content: input.trim() }
          ],
          temperature: 0.7,
          max_tokens: mode === 'hooks' ? 200 : 150,
        }),
      })

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(`API error (${response.status}): ${errText.slice(0, 200)}`)
      }

      const data = await response.json()
      const generated = data.choices?.[0]?.message?.content?.trim() || '(empty response)'

      setOutput(generated)
      setHistory(prev => [{
        id: Date.now(),
        input: input.trim(),
        output: generated,
        mode,
        tone,
        lang,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      }, ...prev].slice(0, 30))

      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
    } catch (err) {
      setError(err.message || 'Failed to generate. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleGenerate()
    }
  }

  const clearHistory = () => setHistory([])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">AI Agent 3.0</h1>
            <p className="text-sm text-[#71767b]">
              Smart replies, tweet drafts & algo hacks — powered by free-tier hcnsec.cn LLM
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Mode Selector */}
          <div className="glass rounded-2xl p-4">
            <div className="flex flex-wrap gap-2">
              {modes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => { setMode(id); setOutput(''); setError('') }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    mode === id
                      ? 'bg-[#1d9bf0] text-white shadow-lg shadow-[#1d9bf0]/20'
                      : 'bg-[#0a0a0a] text-[#71767b] hover:text-white border border-[#2a2a2a]'
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="glass rounded-2xl p-5">
            <label className="text-sm font-medium text-white mb-2 block">
              {mode === 'reply'
                ? 'Tweet to reply to'
                : mode === 'draft'
                ? 'Topic / tweet idea'
                : 'Topic for emotional hook'}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                mode === 'reply'
                  ? 'Paste the tweet you want to reply to...'
                  : mode === 'draft'
                  ? 'What do you want to tweet about?'
                  : 'What topic for an emotional hook?'
              }
              rows={4}
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#1d9bf0] transition-colors resize-none"
            />

            <div className="flex flex-wrap items-center gap-3 mt-3">
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs text-white cursor-pointer hover:border-[#3a3a3a] transition-colors"
              >
                {toneOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs text-white cursor-pointer hover:border-[#3a3a3a] transition-colors"
              >
                {langOptions.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <span className="text-[10px] text-[#555] ml-auto hidden sm:inline">
                Ctrl+Enter to generate
              </span>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate {mode === 'reply' ? 'Reply' : mode === 'draft' ? 'Tweet' : 'Hook'}
                </>
              )}
            </button>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="glass rounded-xl p-4 border border-[#f4212e]/30 bg-[#f4212e]/5"
              >
                <p className="text-sm text-[#f4212e]">{error}</p>
                <button
                  onClick={handleGenerate}
                  className="text-xs text-[#f4212e] underline mt-1 hover:no-underline"
                >
                  Try again
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Output */}
          <AnimatePresence>
            {output && (
              <motion.div
                ref={resultRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#1d9bf0] flex items-center gap-1">
                    <Sparkles size={12} />
                    AI Generated · {tone} · {lang}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(output)}
                      className="p-2 rounded-lg hover:bg-white/5 text-[#71767b] hover:text-white transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check size={14} className="text-[#00ba7c]" /> : <Copy size={14} />}
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="p-2 rounded-lg hover:bg-white/5 text-[#71767b] hover:text-white transition-colors"
                      title="Regenerate"
                    >
                      <RefreshCw size={14} />
                    </button>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-4 text-sm text-white whitespace-pre-wrap leading-relaxed">
                  {output}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* History Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass rounded-2xl p-5 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <FileText size={16} className="text-[#71767b]" />
                History
              </h3>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="p-1.5 rounded-lg hover:bg-white/5 text-[#555] hover:text-[#f4212e] transition-colors"
                  title="Clear history"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="text-center py-8">
                <Bot size={32} className="mx-auto mb-2 text-[#333]" />
                <p className="text-sm text-[#555]">No history yet. Start generating!</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {history.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[#0a0a0a] rounded-lg p-3 text-xs group cursor-pointer hover:bg-[#111] transition-colors"
                    onClick={() => {
                      setInput(item.input)
                      setMode(item.mode)
                      setOutput(item.output)
                      resultRef.current?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#1d9bf0] font-medium capitalize flex items-center gap-1">
                        {modes.find(m => m.id === item.mode)?.label || item.mode}
                      </span>
                      <span className="text-[#555]">{item.timestamp}</span>
                    </div>
                    <p className="text-[#a0a0a0] truncate">
                      <User size={10} className="inline mr-1 text-[#555]" />
                      {item.input}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] text-[#1d9bf0] group-hover:underline">
                        <ArrowRight size={10} className="inline mr-0.5" />
                        View & Reuse
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
