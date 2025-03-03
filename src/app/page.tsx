'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <Hero />
        <Features />
        <Portfolio />
        <Stats />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
