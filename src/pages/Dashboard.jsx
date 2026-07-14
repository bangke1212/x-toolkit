import { BarChart3, TrendingUp, Users, Eye, Heart, Repeat, MessageCircle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as ReBarChart, Bar } from 'recharts'

const weeklyData = [
  { day: 'Sen', impressions: 2400, engagements: 400, followers: 120 },
  { day: 'Sel', impressions: 3200, engagements: 550, followers: 150 },
  { day: 'Rab', impressions: 2800, engagements: 480, followers: 90 },
  { day: 'Kam', impressions: 4100, engagements: 720, followers: 210 },
  { day: 'Jum', impressions: 3800, engagements: 650, followers: 180 },
  { day: 'Sab', impressions: 2900, engagements: 420, followers: 100 },
  { day: 'Min', impressions: 3500, engagements: 580, followers: 160 },
]

const engagementBreakdown = [
  { type: 'Likes', value: 2450, color: '#f4212e' },
  { type: 'Retweets', value: 890, color: '#00ba7c' },
  { type: 'Replies', value: 560, color: '#1d9bf0' },
  { type: 'Bookmarks', value: 340, color: '#a855f7' },
]

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
            <BarChart3 size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-[#71767b]">Overview performa akun X-mu</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { icon: Eye, label: 'Total Impressions', value: '22.7K', change: '+12%', up: true },
          { icon: Heart, label: 'Total Likes', value: '2.4K', change: '+8%', up: true },
          { icon: Repeat, label: 'Total Retweets', value: '890', change: '+15%', up: true },
          { icon: Users, label: 'New Followers', value: '1.0K', change: '+5%', up: true },
        ].map(({ icon: Icon, label, value, change, up }) => (
          <div key={label} className="glass rounded-xl p-4 card-hover">
            <Icon size={18} className="text-[#1d9bf0] mb-2" />
            <div className="text-xl font-bold text-white">{value}</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-[#71767b]">{label}</span>
              <span className={`text-xs font-medium ${up ? 'text-[#00ba7c]' : 'text-[#f4212e]'}`}>{change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass rounded-2xl p-5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-[#1d9bf0]" />
            Impressions Mingguan
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="day" stroke="#555" tick={{ fontSize: 12 }} />
              <YAxis stroke="#555" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#161616', border: '1px solid #2a2a2a', borderRadius: '8px', fontSize: 12 }} labelStyle={{ color: '#e7e9ea' }} />
              <Line type="monotone" dataKey="impressions" stroke="#1d9bf0" strokeWidth={2} dot={{ fill: '#1d9bf0', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-2xl p-5">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <MessageCircle size={16} className="text-[#a855f7]" />
            Engagement Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <ReBarChart data={engagementBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="type" stroke="#555" tick={{ fontSize: 12 }} />
              <YAxis stroke="#555" tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#161616', border: '1px solid #2a2a2a', borderRadius: '8px', fontSize: 12 }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {engagementBreakdown.map((entry, index) => (<rect key={index} fill={entry.color} />))}
              </Bar>
            </ReBarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Visibility Score', value: '78/100', color: 'text-[#00ba7c]', bar: 78 },
          { label: 'Trust Score', value: '85/100', color: 'text-[#1d9bf0]', bar: 85 },
          { label: 'Engagement Rate', value: '4.2%', color: 'text-[#a855f7]', bar: 42 },
        ].map(({ label, value, color, bar }) => (
          <div key={label} className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-2"><span className="text-sm text-[#71767b]">{label}</span><span className={`font-bold text-sm ${color}`}>{value}</span></div>
            <div className="w-full h-2 bg-[#0a0a0a] rounded-full overflow-hidden"><div className={`h-full rounded-full bg-current ${color}`} style={{ width: `${bar}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}