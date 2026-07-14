import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Wrench, RotateCcw, Users, Bot, BarChart3,
  TrendingUp, Zap, ArrowRight, Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Shadowban Hub',
    desc: 'Fast & deep scan with 4-layer audit to detect shadowbans on your X account.',
    link: '/shadowban',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Tools Hub',
    desc: '30+ tools: diagnose, grow, create, recover — all in one place.',
    link: '/tools',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: RotateCcw,
    title: 'Recover Suite',
    desc: 'Monetization appeal guide & cleanup for limited accounts.',
    link: '/recover',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Mutual Universe',
    desc: 'Followback audit & mutual directory to build a solid community.',
    link: '/mutual',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'AI Agent 3.0',
    desc: 'Smart replies, auto draft tweets, and algo hacks powered by AI.',
    link: '/agent',
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    icon: BarChart3,
    title: 'Dashboard',
    desc: 'Weekly analytics & engagement charts to track your performance.',
    link: '/dashboard',
    gradient: 'from-rose-500 to-pink-500',
  },
]

const stats = [
  { value: '30+', label: 'Growth Tools' },
  { value: '4-Layer', label: 'Shadowban Audit' },
  { value: 'AI 3.0', label: 'Smart Agent' },
  { value: '100%', label: 'Free Forever' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d9bf0]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1d9bf0]/10 text-[#1d9bf0] border border-[#1d9bf0]/20 mb-6">
              <Sparkles size={12} />
              Free & Open Source X Growth Toolkit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-white">Grow on X, </span>
            <span className="gradient-text">effortlessly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#71767b] max-w-2xl mx-auto mb-10"
          >
            An all-in-one toolkit for shadowban audits, engagement optimization,
            monetization recovery, and growing your X account — completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/shadowban"
              className="inline-flex items-center gap-2 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-[#1d9bf0]/25 hover:shadow-xl hover:shadow-[#1d9bf0]/30"
            >
              <Shield size={18} />
              Check Shadowban Now
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#3a3a3a] text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
            >
              <Wrench size={18} />
              Explore Tools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="glass rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-extrabold gradient-text">{value}</div>
                <div className="text-sm text-[#71767b] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Everything You Need
          </h2>
          <p className="text-[#71767b] max-w-lg mx-auto">
            From shadowban audits to AI agents — one toolkit for your entire X growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc, link, gradient }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <Link
                to={link}
                className="block glass rounded-xl p-5 card-hover h-full transition-all hover:border-[#1d9bf0]/30"
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-[#71767b] leading-relaxed">{desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="glass rounded-2xl p-8 md:p-12 text-center bg-gradient-to-r from-[#1d9bf0]/5 to-violet-500/5"
        >
          <TrendingUp size={40} className="mx-auto mb-4 text-[#1d9bf0]" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Boost Your X Account?
          </h2>
          <p className="text-[#71767b] max-w-md mx-auto mb-8">
            Start now, completely free. Audit shadowbans, optimize content, and grow your X account with x-toolkit.
          </p>
          <Link
            to="/shadowban"
            className="inline-flex items-center gap-2 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-[#1d9bf0]/25"
          >
            <Zap size={18} />
            Start Free Scan
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
