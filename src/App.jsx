import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <footer className="bg-slate-950 border-t border-white/10 py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Aegis Audits — Security-first smart contract reviews.
      </footer>
    </div>
  )
}

export default App
