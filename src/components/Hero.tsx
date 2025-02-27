"use client"

import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState("/background.mp4");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProgress = ({ played }: {played: any}) => {
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
      <div className="w-full relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              #1 AI VIDEO PLATFORM FOR ANYONE
            </div>
            <h1 className="text-6xl md:text-9xl leading-[50%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              OmniGen
            </h1>
            <span className="text-3xl text-blue-600">Every AI. Endless creativity</span>
            <p className="text-xl text-slate-600 max-w-2xl">
              Create studio-quality videos with AI avatars and voiceovers in 140+ languages. It's as easy as making a slide deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Get started for FREE →
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 mt-4">
              <span>No credit card required</span>
              <span className="flex items-center gap-1">
                <span>Rated 4.7/5 on G2</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] translate-y-[-15%] rounded-[3rem] overflow-hidden shadow-[0_0_100px_20px_rgba(37,99,235,0.3)] bg-blue-600">
        <div className={`transition-all ease-in-out duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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