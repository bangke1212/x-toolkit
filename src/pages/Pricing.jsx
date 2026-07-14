import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Heart, Code, Star, Zap } from 'lucide-react'

const allFeatures = [
  'Shadowban Fast & Deep Scan (4-layer audit)',
  '30+ Growth Tools (diagnose, grow, create, recover)',
  'AI Agent 3.0 — Smart replies & draft tweets',
  'Algo Hacks — 4 versions of algo-friendly hooks',
  'Mutual Universe — Followback audit & mutual directory',
  'Recover Suite — Monetization appeal & cleanup guide',
  'Dashboard — Weekly analytics & engagement charts',
  '7-Day Reports — Visibility & engagement trends',
  'Support System — Fast mode assistance',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Free & Open Source
        </h1>
        <p className="text-[#71767b] max-w-lg mx-auto">
          x-toolkit is completely free. No paywalls, no PRO tiers — just tools to help you grow on X.
        </p>
      </motion.div>

      {/* Free Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass rounded-2xl p-8 md:p-10 border border-[#1d9bf0]/30 relative overflow-hidden mb-10"
      >
        <div className="absolute top-0 right-0 bg-[#1d9bf0] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
          <Heart size={12} /> FREE FOREVER
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">x-toolkit</h3>
          <div className="text-5xl font-extrabold gradient-text mb-2">$0</div>
          <p className="text-sm text-[#71767b]">No hidden fees. No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
          {allFeatures.map((feature, i) => (
            <motion.div
              key={feature}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-2 text-sm"
            >
              <Check size={14} className="text-[#00ba7c] shrink-0 mt-0.5" />
              <span className="text-[#a0a0a0]">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/shadowban"
            className="inline-flex items-center justify-center gap-2 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-[#1d9bf0]/25"
          >
            <Zap size={16} />
            Start Using Now
          </Link>
        </div>
      </motion.div>

      {/* Open Source CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-sm text-[#555] mb-4">
          x-toolkit is open source. Star us on GitHub and contribute!
        </p>
        <a
          href="https://github.com/bangke1212/x-toolkit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#3a3a3a] text-white px-6 py-3 rounded-xl font-medium text-sm transition-all"
        >
          <Code size={16} />
          View on GitHub
          <Star size={14} className="text-[#ffd400]" />
        </a>
      </motion.div>
    </div>
  )
}
