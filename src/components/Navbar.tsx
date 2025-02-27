import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              OmniGen
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-slate-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/templates" className="text-slate-600 hover:text-blue-600 transition-colors">
              Templates
            </Link>
            <Link href="/enterprise" className="text-slate-600 hover:text-blue-600 transition-colors">
              Enterprise
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-600 hover:text-blue-600 transition-colors">
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 