'use client';

import { useEffect, useRef } from 'react';
import { animateTeam } from '@/utils/animations';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Team() {
  const teamRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animateTeam(teamRef);
  }, []);

  return (
    <section ref={teamRef} className="w-full py-20 bg-gradient-to-br from-white to-blue-50 relative">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="team-member group">
              <div className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 bg-blue-100/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-zinc-800">Team Member {member}</h3>
                  <p className="text-blue-600 mb-4">Position Title</p>
                  <p className="text-zinc-600 mb-4">Short bio about this team member and their role in the company.</p>
                  <div className="flex space-x-4">
                    {[FaTwitter, FaGithub, FaLinkedin].map((Icon, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="text-zinc-400 hover:text-blue-500 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}