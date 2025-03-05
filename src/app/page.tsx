'use client';

import Hero from '@/components/home/Header';
import Features from '@/components/home/Features';
import Footer from '@/components/Footer';
import Team from '@/components/home/Team';
import Stats from '@/components/home/Stats';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent)] pointer-events-none"></div>
        <Hero />
        <Features />
        <Stats />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
