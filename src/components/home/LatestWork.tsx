'use client';

import ReactPlayer from 'react-player';

export default function LatestWork() {

  return (
    <section className="w-full py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-slate-900">
          Our Latest and Best AI Generated Video
        </h2>
        <p className="text-xl text-center text-blue-600 mb-12 font-semibold">
          #OmniGen
        </p>
        
        <div className="max-w-[500px] mx-auto">
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}> 
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <ReactPlayer
                url="/veinydih.mp4"
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                playsinline={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            Try It Yourself →
          </button>
        </div>
      </div>
    </section>
  );
}