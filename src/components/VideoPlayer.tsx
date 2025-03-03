'use client';

import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  return (
    <ReactPlayer 
      url="/background-video.mp4"
      playing={true}
      loop={true}
      muted={true}
      width="100%"
      height="100%"
      className="object-cover"
    />
  );
}