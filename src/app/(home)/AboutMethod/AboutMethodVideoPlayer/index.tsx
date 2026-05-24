'use client';
import '@videojs/react/video/skin.css';
import { createPlayer, videoFeatures } from '@videojs/react';
import { VideoSkin, Video } from '@videojs/react/video';
import './about-method-video-player.css';
import { useEffect } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import { useRef } from 'react';

const Player = createPlayer({
  features: videoFeatures,
});

const AboutMethodVideoPlayer = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  useGSAP(
    () => {
      const aboutVideo = sectionRef.current?.querySelector('.about-video');

      if (!aboutVideo) {
        return;
      }

      gsap.fromTo(
        aboutVideo,
        {
          width: '50%',
          filter: 'saturate(50%)',
        },
        {
          width: '100%',
          filter: 'saturate(110%)',
          ease: 'none',
          scrollTrigger: {
            trigger: aboutVideo,
            start: 'top 99%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <Player.Provider>
      <figure className="contents" ref={sectionRef}>
        <VideoSkin className="about-video 3xl:rounded-[2.083vw]! aspect-3/1 min-h-70 flex-1 overflow-hidden rounded-[1.25rem]! md:rounded-[2.5rem]!">
          <Video
            src="/video/about-method.mp4"
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster="/images/about-method-poster.avif"
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
