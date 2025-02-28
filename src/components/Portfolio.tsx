'use client';

import { useEffect, useRef } from 'react';
import { animatePortfolio } from '@/utils/animations';

export default function Portfolio() {
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animatePortfolio(portfolioRef);
  }, []);

  return (
    <section ref={portfolioRef} className="w-full py-20 bg-gradient-to-br from-zinc-50 to-white relative">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-800">Our Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="portfolio-item group">
              <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-blue-100/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-zinc-800">Project Title {item}</h3>
                    <p className="text-zinc-600 mt-2">Web Design / Development</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}