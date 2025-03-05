'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
});

export default function Hero() {
  const router = useRouter();
  const [currentVideo, setCurrentVideo] = useState("/video.mp4");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleProgress = ({ played }: { played: number }) => {
    if (played > 0.80 && !isTransitioning) {
      setIsTransitioning(true);
    }
  };

  const handleVideoEnd = () => {
    setTimeout(() => {
      setCurrentVideo(currentVideo === "/Omnigen_Reklame_Video.mp4" ? "/Omnigen_Reklame_Video.mp4" : "/Omnigen_Reklame_Video.mp4");
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="w-screen min-h-screen flex flex-col items-center">
      // ... in the Hero section
      <div className="w-full relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              #1 AI VIDEO PLATFORM FOR ANYONE
            </div>
            <h1 className="text-6xl md:text-9x font-bold text-slate-900">
              OmniGen
            </h1>
            <span className="text-3xl text-slate-800 font-semibold">Every AI. Endless creativity</span>
            <p className="text-xl text-slate-700 max-w-2xl bg-white/90 shadow-sm p-6 rounded-2xl">
              Create studio-quality videos with AI avatars and voiceovers in 140+ languages.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-[80%] translate-y-[-15%] rounded-[3rem] overflow-hidden shadow-[0_0_100px_20px_rgba(59,130,246,0.2)] bg-white/80 backdrop-blur-lg p-1">
        <div className="relative">
          <div className={`transition-all ease-in-out duration-500 rounded-[2.75rem] overflow-hidden ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {isMounted && (
              <ReactPlayer
                url={currentVideo}
                playing
                loop={false}
                muted={isMuted}
                volume={0.25}
                width="100%"
                height="100%"
                playsinline
                className="object-cover w-full h-full"
                onProgress={handleProgress}
                onEnded={handleVideoEnd}
              />
            )}
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all z-10"
          >
            {isMuted ? (
              <HiVolumeOff className="w-6 h-6 text-blue-600" />
            ) : (
              <HiVolumeUp className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}