'use client';

import { FiMonitor, FiCpu, FiGlobe, FiLayers, FiShield, FiUsers } from 'react-icons/fi';

export default function Features() {
  return (
    <section className="py-24 px-4 relative bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Experience the next generation of AI-powered video creation with our cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FiMonitor className="w-8 h-8" />,
              title: "Intuitive Interface",
              description: "User-friendly platform that makes video creation simple and efficient"
            },
            {
              icon: <FiCpu className="w-8 h-8" />,
              title: "Advanced AI",
              description: "State-of-the-art artificial intelligence for realistic avatars and voices"
            },
            {
              icon: <FiGlobe className="w-8 h-8" />,
              title: "140+ Languages",
              description: "Create content in multiple languages to reach a global audience"
            },
            {
              icon: <FiLayers className="w-8 h-8" />,
              title: "Custom Templates",
              description: "Pre-built templates to jumpstart your video creation process"
            },
            {
              icon: <FiShield className="w-8 h-8" />,
              title: "Enterprise Security",
              description: "Bank-level security to protect your content and data"
            },
            {
              icon: <FiUsers className="w-8 h-8" />,
              title: "Team Collaboration",
              description: "Work together seamlessly with your team members"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100"
            >
              <div className="relative">
                <div className="bg-blue-50 p-4 rounded-xl inline-block text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600/90 backdrop-blur-xs hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}