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
      gsap.fromTo(
        sectionRef.current,
        {
          width: '50%',
        },
        {
          width: '100%',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        '.about-content',
        {
          opacity: 0,
        },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true,
          },
        }
      );

      const aboutVideo = sectionRef.current?.querySelector('.about-video');

      if (!aboutVideo) {
        return;
      }

      gsap.fromTo(
        aboutVideo,
        {
          width: '100%',
          filter: 'saturate(50%)',
        },
        {
          filter: 'saturate(110%)',
          ease: 'none',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: 'top 5%',
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
    <section
      ref={sectionRef}
      id="sobre-metodo"
      aria-labelledby="about-method-title"
      className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] bg-gradient-about flex min-h-svh flex-col items-center justify-center self-center overflow-hidden rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8"
    >
      <div className="about-content flex w-full flex-col items-center justify-center overflow-hidden">
        <SectionTitle id="about-method-title" className="about-title min-w-60.5 text-white/95">
          O que é o Método MindFlow?
        </SectionTitle>

        <SectionDescription
          id="about-method-description"
          className="about-description 3xl:w-[70vw] xs:w-[82vw] mx-0 w-[80vw] text-center text-white/90 md:w-131.5 lg:w-181 xl:w-240.5"
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
