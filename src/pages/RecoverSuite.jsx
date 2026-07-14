import { useState } from 'react'
import { Crosshair, FileText, BarChart3, CheckCircle, AlertTriangle, ArrowRight, Shield } from 'lucide-react'

const steps = [
  { num: 1, title: 'Identifikasi Penyebab', desc: 'Audit akun untuk tahu kenapa monetisasi di-pause — shadowban, policy violation, atau konten bermasalah.' },
  { num: 2, title: 'Cleanup Konten', desc: 'Download & analisis tweets.js archive. Hapus atau privasi postingan yang berpotensi melanggar.' },
  { num: 3, title: 'Cool-down Period', desc: 'Istirahatkan akun 24-72 jam. Jangan post, reply, atau engage secara agresif.' },
  { num: 4, title: 'Submit Appeal', desc: 'Gunakan template appeal yang sudah teruji — lengkap dengan bukti cleanup dan rencana konten ke depan.' },
  { num: 5, title: 'Pantau & Adjust', desc: 'Monitor status monetisasi dan shadowban. Adjust strategi konten berdasarkan hasil audit.' },
]

export default function RecoverSuite() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <Crosshair size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Recover Suite</h1>
            <p className="text-sm text-[#71767b]">Pulihkan monetisasi & visibility akun X-Mu dengan langkah terstruktur</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Shield size={18} className="text-[#1d9bf0]" />
              5 Langkah Recovery
            </h2>
            <div className="space-y-1">
              {steps.map((step, i) => (
                <button key={i} onClick={() => setActiveStep(i)} className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-4 ${activeStep === i ? 'bg-[#1d9bf0]/10 border border-[#1d9bf0]/20' : 'hover:bg-white/5 border border-transparent'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${activeStep === i ? 'bg-[#1d9bf0] text-white' : 'bg-[#0a0a0a] text-[#71767b]'}`}>{step.num}</div>
                  <div>
                    <h4 className={`font-semibold text-sm ${activeStep === i ? 'text-[#1d9bf0]' : 'text-white'}`}>{step.title}</h4>
                    <p className="text-xs text-[#71767b] mt-0.5">{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 mt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ff7a00]/10 flex items-center justify-center">
                <span className="text-[#ff7a00] font-bold">{steps[activeStep].num}</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{steps[activeStep].title}</h3>
                <p className="text-xs text-[#71767b]">{steps[activeStep].desc}</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-5">
              {activeStep === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-white">🔍 <strong>Langkah Identifikasi:</strong></p>
                  <ul className="space-y-2 text-sm text-[#a0a0a0]">
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#00ba7c] mt-0.5 shrink-0" />Cek status monetisasi di X Settings → Monetization</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#00ba7c] mt-0.5 shrink-0" />Jalankan Shadowban Audit untuk cek visibility</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#00ba7c] mt-0.5 shrink-0" />Review email dari X — biasanya ada info spesifik pelanggaran</li>
                    <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-[#ffd400] mt-0.5 shrink-0" />Periksa 30 hari terakhir postingan — cek policy violation</li>
                  </ul>
                </div>
              )}
              {activeStep === 1 && (
                <div className="space-y-3">
                  <p className="text-sm text-white">🧹 <strong>Cleanup Guide:</strong></p>
                  <ol className="space-y-2 text-sm text-[#a0a0a0] list-decimal list-inside">
                    <li>Download X archive (Settings → Your Account → Download Archive)</li>
                    <li>Extract tweets.js dan cari kata kunci sensitif</li>
                    <li>Hapus tweet yang berpotensi policy violation</li>
                    <li>Ubah visibility tweet sensitif ke "Followers only"</li>
                    <li>Hapus retweet dari akun yang di-suspend</li>
                  </ol>
                </div>
              )}
              {activeStep === 2 && (
                <div className="space-y-3">
                  <p className="text-sm text-white">⏸️ <strong>Cool-down Protocol:</strong></p>
                  <div className="bg-[#ffd400]/10 border border-[#ffd400]/20 rounded-lg p-4 text-sm text-[#a0a0a0]">
                    <strong className="text-[#ffd400]">Durasi:</strong> 24-72 jam<br />
                    <strong className="text-[#ffd400]">Yang BOLEH:</strong> Like post orang lain<br />
                    <strong className="text-[#ffd400]">Yang DILARANG:</strong> Post, reply, quote, retweet, DM massal, follow/unfollow massal
                  </div>
                </div>
              )}
              {activeStep === 3 && (
                <div className="space-y-3">
                  <p className="text-sm text-white">📝 <strong>Template Appeal:</strong></p>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 text-xs text-[#a0a0a0] whitespace-pre-wrap leading-relaxed">
{`Dear X Support Team,

I am writing to appeal the monetization pause on my account (@username).

I have reviewed X's monetization policies and taken the following actions:
1. Deleted/edited tweets that may have violated policies
2. Reviewed my content strategy to align with guidelines
3. Completed the cool-down period

I understand the importance of maintaining a healthy platform and am committed to following all guidelines moving forward.

Please review my account for monetization reinstatement.

Thank you.`}
                  </div>
                  <button className="text-xs text-[#1d9bf0] hover:underline flex items-center gap-1">
                    Copy template <FileText size={12} />
                  </button>
                </div>
              )}
              {activeStep === 4 && (
                <div className="space-y-3">
                  <p className="text-sm text-white">📊 <strong>Monitoring Plan:</strong></p>
                  <ul className="space-y-2 text-sm text-[#a0a0a0]">
                    <li className="flex items-start gap-2"><BarChart3 size={14} className="text-[#1d9bf0] mt-0.5 shrink-0" />Cek Shadowban Hub setiap 2-3 hari selama 2 minggu</li>
                    <li className="flex items-start gap-2"><BarChart3 size={14} className="text-[#1d9bf0] mt-0.5 shrink-0" />Posting konten "aman" dulu (edukasi, tips, thread informatif)</li>
                    <li className="flex items-start gap-2"><BarChart3 size={14} className="text-[#1d9bf0] mt-0.5 shrink-0" />Hindari topik kontroversial selama 2-4 minggu</li>
                    <li className="flex items-start gap-2"><BarChart3 size={14} className="text-[#1d9bf0] mt-0.5 shrink-0" />&ika 2 minggu belum pulih → ulang dari step 1</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Crosshair size={16} className="text-[#ff7a00]" />
              Quick Recovery
            </h3>
            <p className="text-sm text-[#71767b] mb-4">Butuh bantuan recover monetisasi? Pakai AI Playbook buat panduan personal.</p>
            <button className="w-full bg-[#ff7a00] hover:bg-[#e06e00] text-white px-4 py-3 rounded-lg font-medium text-sm transition-all">
              Generate AI Playbook
            </button>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white mb-3">Statistik Recovery</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#71767b]">Recovery rate</span>
                <span className="text-[#00ba7c] font-medium">78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71767b]">Avg recovery time</span>
                <span className="text-white font-medium">4.2 hari</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71767b]">Success after 1st appeal</span>
                <span className="text-[#1d9bf0] font-medium">62%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}