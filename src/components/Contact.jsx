import { useState } from 'react'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    try {
      const res = await fetch(`${baseUrl}/api/audits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setResult({ ok: true, message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setResult({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_70%_10%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-emerald-500/20 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold text-white">Request an Audit</h2>
          <p className="mt-2 text-slate-300">Tell us about your protocol and we’ll get back within 24–48 hours.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input type="email" name="email" required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="company" placeholder="Company / Project" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input name="chain" placeholder="Target chain (e.g., Ethereum, BSC)" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            </div>
            <input name="repo_url" placeholder="Repo URL (optional)" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            <textarea name="scope" required placeholder="Scope summary (contracts, LOC, timelines)" rows="4" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            <textarea name="message" placeholder="Additional details" rows="3" className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
            <button disabled={loading} className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Submit Request'}
            </button>
          </form>

          {result && (
            <div className={`mt-4 text-sm rounded-lg px-4 py-3 ${result.ok ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-red-500/10 text-red-300 border border-red-500/20'}`}>
              {result.message}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
