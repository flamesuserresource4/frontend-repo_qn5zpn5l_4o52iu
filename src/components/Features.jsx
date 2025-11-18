function Features() {
  const items = [
    {
      title: 'Static & Dynamic Analysis',
      desc: 'Slither, Mythril, Foundry tests, and custom detectors to surface anti-patterns and known CVEs.',
    },
    {
      title: 'Manual Review & Threat Modeling',
      desc: 'Experienced auditors evaluate invariants, privilege boundaries, and potential attack paths.',
    },
    {
      title: 'Fuzzing & Differential Testing',
      desc: 'Property-based tests and fuzz campaigns to explore edge cases across EVM behavior.',
    },
    {
      title: 'Actionable Reports',
      desc: 'Clear severity ratings, reproducible PoCs, and mitigations prioritized for impact.',
    },
  ]

  return (
    <section id="features" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_30%_10%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Audit Methodology</h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">
          A rigorous process designed to find the bugs that matter and help you ship with confidence.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-sm">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
