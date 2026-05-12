'use client';
import '@videojs/react/video/skin.css';
import { createPlayer, videoFeatures } from '@videojs/react';
import { VideoSkin, Video } from '@videojs/react/video';
import './about-method-video-player.css';
import { useEffect } from 'react';

const Player = createPlayer({
  features: videoFeatures,
});

const AboutMethodVideoPlayer = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.media-icon');

    icons.forEach((icon) => {
      if (!icon.getAttribute('viewBox')) {
        const width = icon.getAttribute('width');
        const height = icon.getAttribute('height');

        if (width && height) {
          icon.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
      }
    });
  }, []);

  return (
    <Player.Provider>
      <figure className="contents">
        <VideoSkin className="3xl:rounded-[2.083vw]! aspect-3/1 min-h-70 w-full flex-1 overflow-hidden rounded-[1.25rem]! md:rounded-[2.5rem]!">
          <Video
            src="/video/about-method.mp4"
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster="/images/about-method-poster.png"
            aria-describedby="about-method-description"
          />
        </VideoSkin>

        <figcaption className="sr-only">
          Vídeo demonstrando o funcionamento do Método MindFlow.
        </figcaption>
      </figure>
    </Player.Provider>
  );
};

export default AboutMethodVideoPlayer;
