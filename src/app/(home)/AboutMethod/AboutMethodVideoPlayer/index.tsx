'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import { useResponsiveIcons } from './useResponsiveIcons';
import { createPlayer, videoFeatures } from '@videojs/react';
import { VideoSkin, Video } from '@videojs/react/video';
import '@videojs/react/video/skin.css';
import './about-method-video-player.css';

const Player = createPlayer({
  features: videoFeatures,
});

const AboutMethodVideoPlayer = () => {
  useResponsiveIcons();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const aboutVideo = section.querySelector('.about-video');

      if (!aboutVideo) {
        return;
      }

      gsap.set(aboutVideo, {
        force3D: true,

        backfaceVisibility: 'hidden',

        transformPerspective: 1000,

        transformOrigin: 'center center',

        contain: 'layout paint style',

        willChange: 'auto',
      });

      gsap.fromTo(
        aboutVideo,
        {
          width: '50%',

          autoAlpha: 0.85,
        },
        {
          width: '100%',

          autoAlpha: 1,

          ease: 'none',

          clearProps: 'willChange',

          scrollTrigger: {
            trigger: aboutVideo,

            start: 'top 95%',
            end: 'top 35%',

            scrub: 0.8,

            invalidateOnRefresh: true,

            fastScrollEnd: true,

            onEnter: () => {
              gsap.set(aboutVideo, {
                willChange: 'width, opacity',
              });
            },

            onLeave: () => {
              gsap.set(aboutVideo, {
                willChange: 'auto',
              });
            },

            onLeaveBack: () => {
              gsap.set(aboutVideo, {
                willChange: 'width, opacity',
              });
            },
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
