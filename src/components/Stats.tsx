'use client';

import { useEffect, useRef } from 'react';
import { animateStats } from '@/utils/animations';
import { FaProjectDiagram, FaSmile, FaUsers, FaClock } from 'react-icons/fa';

export default function Stats() {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animateStats(statsRef);
  }, []);

  return (
    <section ref={statsRef} className="w-full py-20 bg-gradient-to-r from-blue-600/90 to-blue-800/90 relative">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-950">Our Impact by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaProjectDiagram />, count: "500+", label: "Projects Completed" },
            { icon: <FaSmile />, count: "98%", label: "Client Satisfaction" },
            { icon: <FaUsers />, count: "50+", label: "Team Members" },
            { icon: <FaClock />, count: "10+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="stat-item group bg-blue-200 rounded-3xl">
              <div className="backdrop-blur-md p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="text-4xl text-zinc-950 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-zinc-950">{stat.count}</h3>
                <p className="text-lg text-zinc-950">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}