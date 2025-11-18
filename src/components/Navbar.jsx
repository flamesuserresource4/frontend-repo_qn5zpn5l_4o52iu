import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg">Aegis Audits</a>
        <button onClick={() => setOpen(!open)} className="sm:hidden text-white/80">Menu</button>
        <nav className="hidden sm:flex items-center gap-6 text-slate-300">
          <a href="#features" className="hover:text-white">Methodology</a>
          <a href="#contact" className="hover:text-white">Request Audit</a>
          <a href="#" className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20">Book a Call</a>
        </nav>
      </div>
      {open && (
        <div className="sm:hidden px-6 pb-4 space-y-2 text-slate-300">
          <a href="#features" className="block">Methodology</a>
          <a href="#contact" className="block">Request Audit</a>
          <a href="#" className="inline-block px-3 py-1.5 rounded-lg bg-white/10 text-white">Book a Call</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
