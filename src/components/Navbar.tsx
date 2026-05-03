import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e27]/95 backdrop-blur border-b border-[#3d4570]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl text-white">
          X<span className="text-[#ff1493]">Cam</span>Models
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors ${location === '/' ? 'text-[#ff1493]' : 'text-gray-300 hover:text-white'}`}>Home</Link>
          <a href="/#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="/#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
          <Link href="/apply" className="bg-[#ff1493] hover:bg-[#e0127e] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Apply Now
          </Link>
        </div>
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#3d4570] bg-[#0a0e27] px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setOpen(false)}>Home</Link>
          <a href="/#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setOpen(false)}>How It Works</a>
          <a href="/#faq" className="text-sm font-medium text-gray-300 hover:text-white" onClick={() => setOpen(false)}>FAQ</a>
          <Link href="/apply" className="bg-[#ff1493] hover:bg-[#e0127e] text-white text-sm font-semibold px-5 py-2 rounded-full text-center transition-colors" onClick={() => setOpen(false)}>
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  )
}
