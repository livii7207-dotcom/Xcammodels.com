import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="border-t border-[#3d4570] bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="font-heading font-bold text-xl text-white">
              X<span className="text-[#ff1493]">Cam</span>Models
            </Link>
            <p className="text-sm text-gray-400 mt-1">Empowering cam models to earn more.</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/apply" className="hover:text-white transition-colors">Apply</Link>
            <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:support@xcammodels.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">
          &copy; {new Date().getFullYear()} XCamModels. All rights reserved. For adults 18+ only.
        </p>
      </div>
    </footer>
  )
}
