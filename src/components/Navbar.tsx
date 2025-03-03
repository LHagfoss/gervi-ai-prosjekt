"use client"

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [showTooltip, setShowTooltip] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTooltip = () => setShowTooltip(!showTooltip);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
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
            {session ? (
              <>
                <div className="relative" ref={dropdownRef}>
                  <div 
                    className="cursor-pointer"
                    onClick={toggleTooltip}
                  >
                    {session.user?.image && (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all">
                        <Image
                          src={session.user.image}
                          alt="Profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  {showTooltip && (
                    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg py-3 px-4 min-w-[240px] border border-slate-200">
                      <div className="flex flex-col gap-2">
                        <p className="text-slate-900 font-medium">{session.user?.name}</p>
                        <p className="text-slate-500 text-sm pb-2 border-b border-slate-100">
                          {session.user?.email}
                        </p>
                        <button 
                          onClick={() => signOut()}
                          className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors w-full cursor-pointer text-left mt-1 py-1"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <Link 
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <button 
                  onClick={() => signIn('google')}
                  className="text-slate-600 hover:text-blue-600 transition-colors hover:cursor-pointer"
                >
                  Log in
                </button>
                <Link 
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}