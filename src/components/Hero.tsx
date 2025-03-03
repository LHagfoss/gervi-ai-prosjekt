'use client';

import ReactPlayer from 'react-player'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter();
  const [currentVideo, setCurrentVideo] = useState("/background.mp4");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProgress = ({ played }: { played: number }) => {
    if (played > 0.80 && !isTransitioning) {
      setIsTransitioning(true);
    }
  };

  const handleVideoEnd = () => {
    setTimeout(() => {
      setCurrentVideo(currentVideo === "/background.mp4" ? "/nig.mp4" : "/background.mp4");
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="w-screen min-h-screen flex flex-col items-center">
      <div className="w-full relative min-h-[90vh] flex items-center justify-center bg-linear-to-br from-white to-blue-50">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-xs"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              #1 AI VIDEO PLATFORM FOR ANYONE
            </div>
            <h1 className="text-6xl md:text-9xl leading-[50%] font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-800">
              OmniGen
            </h1>
            <span className="text-3xl text-blue-700 font-semibold">Every AI. Endless creativity</span>
            <p className="text-xl text-blue-950 max-w-2xl bg-white/50 backdrop-blur-xs p-6 rounded-2xl shadow-xl">
              Create studio-quality videos with AI avatars and voiceovers in 140+ languages. It's as easy as making a slide deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button 
                onClick={() => router.push('/Generate')}
                className="bg-blue-600/90 backdrop-blur-xs hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Get started for FREE →
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-blue-900 mt-4 bg-white/60 backdrop-blur-xs px-6 py-3 rounded-full shadow-md">
              <span>No credit card required</span>
              <span className="w-[1px] h-4 bg-blue-200"></span>
              <span className="flex items-center gap-1">
                <span>Rated 4.7/5 on G2</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] translate-y-[-15%] rounded-[3rem] overflow-hidden shadow-[0_0_100px_20px_rgba(59,130,246,0.2)] bg-white/80 backdrop-blur-lg p-1">
        <div className={`transition-all ease-in-out duration-500 rounded-[2.75rem] overflow-hidden ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <ReactPlayer
            url={currentVideo}
            playing
            loop={false}
            muted
            width="100%"
            height="100%"
            playsinline
            className="object-cover w-full h-full"
            onProgress={handleProgress}
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </section>
  )
}