import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Lock Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for mood, non-blocking */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_40%,rgba(34,197,94,0.18),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Enterprise-grade audits for Web3 teams
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          Secure Your Smart Contracts with Confidence
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          We blend automated analysis with deep manual review to uncover vulnerabilities, harden your protocol, and protect your users.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition">
            Request an Audit
          </a>
          <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition border border-white/10">
            See How We Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
