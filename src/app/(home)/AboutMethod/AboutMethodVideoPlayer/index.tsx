'use client';
import '@videojs/react/video/skin.css';
import { createPlayer, videoFeatures } from '@videojs/react';
import { VideoSkin, Video } from '@videojs/react/video';
import './about-method-video-player.css';

const Player = createPlayer({
  features: videoFeatures,
});

const AboutMethodVideoPlayer = () => {
  return (
    <Player.Provider>
      <VideoSkin className="3xl:rounded-[2.083vw]! aspect-3/1 w-full flex-1 overflow-hidden rounded-[1.25rem]! md:rounded-[2.5rem]!">
        <Video
          src="/video/about-method.mp4"
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          // poster=''
        />
      </VideoSkin>
    </Player.Provider>
  );
};

export default AboutMethodVideoPlayer;
