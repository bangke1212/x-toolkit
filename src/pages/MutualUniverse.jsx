import { useState } from 'react'
import { Users, UserCheck, UserX, UserPlus, Search, ArrowRight, TrendingUp } from 'lucide-react'

const mockData = {
  username: 'creator_id',
  following: 842,
  followers: 1230,
  mutual: 410,
  notFollowback: 432,
  notFollowed: 820,
  suggestions: [
    { username: 'tech_writer', mutuals: 23, score: 94 },
    { username: 'design_daily', mutuals: 18, score: 89 },
    { username: 'growth_hacker', mutuals: 15, score: 87 },
    { username: 'ai_explorer', mutuals: 12, score: 85 },
    { username: 'startup_id', mutuals: 20, score: 92 },
  ]
}

export default function MutualUniverse() {
  const [username, setUsername] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const handleAudit = async () => {
    if (!username.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    setData({ ...mockData, username: username.replace(/@/g, '') })
    setLoading(false)
  }

  if (!data) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Mutual Universe</h1>
              <p className="text-sm text-[#71767b]">Direktori mutual verified + audit following vs followers</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center max-w-md mx-auto">
          <Users size={48} className="mx-auto mb-4 text-[#333]" />
          <h3 className="font-semibold text-white mb-2">Audit Mutual Kamu</h3>
          <p className="text-sm text-[#71767b] mb-6">
            Cari tahu siapa yang belum followback, siapa mutual kamu, dan siapa yang perlu di-unfollow.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71767b]">@</span>
              <input
                type="text"
                placeholder="username X"
                value={username}
                onChange={(e) => setUsername(e.target.value.replace(/@/g, ''))}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#1d9bf0]"
                onKeyDown={(e) => e.key === 'Enter' && handleAudit()}
              />
            </div>
            <button
              onClick={handleAudit}
              disabled={loading || !username.trim()}
              className="bg-[#1d9bf0] hover:bg-[#1a8cd8] disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
            >
              {loading ? <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> : <Search size={16} />}
              Audit
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <Users size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Mutual Universe</h1>
            <p className="text-sm text-[#71767b]">@{data.username}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { icon: Users, label: 'Following', value: data.following, color: 'text-[#1d9bf0]', bg: 'bg-[#1d9bf0]/10' },
          { icon: UserPlus, label: 'Followers', value: data.followers, color: 'text-[#00ba7c]', bg: 'bg-[#00ba7c]/10' },
          { icon: UserCheck, label: 'Mutual', value: data.mutual, color: 'text-[#a855f7]', bg: 'bg-[#a855f7]/10' },
          { icon: UserX, label: 'Belum Folbek', value: data.notFollowback, color: 'text-[#f4212e]', bg: 'bg-[#f4212e]/10' },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="glass rounded-xl p-4">
            <div className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center mb-2`}>
              <Icon size={16} className={color} />
            </div>
            <div className="text-2xl font-bold text-white">{value.toLocaleString()}</div>
            <div className="text-xs text-[#71767b]">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'not-folbek', label: 'Belum Folbek' },
          { id: 'mutuals', label: 'Mutuals' },
          { id: 'suggestions', label: 'Suggestions' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-[#1d9bf0]/10 text-[#1d9bf0]'
                : 'text-[#71767b] hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="glass rounded-2xl p-5">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Ratio Following vs Followers</h4>
                <div className="flex items-center gap-4">
                  <div className="w-full h-4 bg-[#0a0a0a] rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#1d9bf0]" style={{ width: `${(data.following / (data.following + data.followers)) * 100}%` }} />
                    <div className="h-full bg-[#00ba7c]" style={{ width: `${(data.followers / (data.following + data.followers)) * 100}%` }} />
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-[#71767b]">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#1d9bf0] rounded-full" /> Following ({data.following})</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#00ba7c] rounded-full" /> Followers ({data.followers})</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Mutual Rate</h4>
                <div className="text-3xl font-bold gradient-text">{((data.mutual / data.following) * 100).toFixed(1)}%</div>
                <p className="text-xs text-[#71767b] mt-1">{data.mutual} mutual dari {data.following} following</p>
              </div>
            </div>
            <div className="bg-[#ffd400]/10 border border-[#ffd400]/20 rounded-lg p-3 text-xs text-[#ffd400]">
              ⚠️ {data.notFollowback} akun belum followback. Pertimbangkan untuk unfollow atau engage lebih dulu.
            </div>
          </div>
        )}

        {activeTab === 'not-folbek' && (
          <div className="text-center py-8">
            <UserX size={40} className="mx-auto mb-3 text-[#f4212e]" />
            <p className="text-[#71767b] text-sm">{data.notFollowback} akun belum followback</p>
            <p className="text-[#555] text-xs mt-1">Fitur bulk unfollow tersedia di XToolkit PRO</p>
          </div>
        )}

        {activeTab === 'mutuals' && (
          <div className="space-y-3">
            <p className="text-sm text-[#00ba7c] flex items-center gap-1">
              <UserCheck size={14} /> {data.mutual} mutual connections
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 flex items-center gap-2 text-sm">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                  <span className="text-white">mutual_user_{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="space-y-2">
            <p className="text-sm text-[#a0a0a0] mb-3">Akun yang disarankan untuk di-follow berdasarkan mutual network:</p>
            {data.suggestions.map((s, i) => (
              <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#555] w-5">{i + 1}</span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-500" />
                  <div>
                    <p className="text-sm font-medium text-white">{s.username}</p>
                    <p className="text-xs text-[#71767b]">{s.mutuals} mutuals in common</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#00ba7c]">{s.score}% match</span>
                  <button className="bg-[#1d9bf0]/10 hover:bg-[#1d9bf0]/20 text-[#1d9bf0] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}