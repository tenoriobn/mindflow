'use client';
import dynamic from 'next/dynamic';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import { gsap, useGSAP } from 'src/lib/gsap';
import { useRef } from 'react';

const AboutMethodVideoPlayer = dynamic(() => import('./AboutMethodVideoPlayer'), {
  ssr: false,
});

const AboutMethod = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const title = section.querySelector('.about-title');
      const description = section.querySelector('.about-description');

      if (!title || !description) {
        return;
      }

      gsap.set([title, description], {
        force3D: true,
        backfaceVisibility: 'hidden',
        transformPerspective: 1000,
        willChange: 'clip-path, opacity, transform',
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out',
        },

        scrollTrigger: {
          trigger: section,

          start: 'top 92%',
          end: 'top 45%',

          scrub: 0.8,

          invalidateOnRefresh: true,

          onLeave: () => {
            gsap.set([title, description], {
              willChange: 'auto',
            });
          },

          onLeaveBack: () => {
            gsap.set([title, description], {
              willChange: 'clip-path, opacity, transform',
            });
          },
        },
      });

      tl.to(title, {
        opacity: 1,

        clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',

        duration: 1,

        clearProps: 'willChange',
      }).to(
        description,
        {
          opacity: 1,

          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',

          duration: 0.85,

          clearProps: 'willChange',
        },
        0.25
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="sobre-metodo"
      aria-labelledby="about-method-title"
      className="about-section 3xl:p-[1.667vw] 3xl:rounded-[2.083vw] bg-gradient-about relative z-20 flex min-h-svh w-full flex-col items-center justify-center self-center overflow-hidden rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8"
    >
      <div className="about-content flex w-full flex-col items-center justify-center overflow-hidden">
        <SectionTitle
          id="about-method-title"
          className="about-title min-w-60.5 text-white/95 opacity-0 [clip-path:polygon(50%_0%,50%_0%,50%_100%,50%_100%)]"
        >
          O que é o Método MindFlow?
        </SectionTitle>

        <SectionDescription
          id="about-method-description"
          className="about-description 3xl:w-[70vw] xs:w-[82vw] mx-0 w-[80vw] text-center text-white/90 opacity-0 [clip-path:polygon(50%_0%,50%_0%,50%_100%,50%_100%)] md:w-131.5 lg:w-181 xl:w-240.5"
        >
          Sistema de organização mental que une neurociência e ferramentas digitais simples. Em 4
          módulos, o aluno aprende a estruturar uma rotina leve, entender sua mente e usar
          tecnologia de forma estratégica.
        </SectionDescription>
      </div>

      <AboutMethodVideoPlayer />
    </section>
  );
};

export default AboutMethod;
