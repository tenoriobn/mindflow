'use client';
import Image from 'next/image';
import './hero-section.css';
import PartnerLogoCarousel from './PartnerLogoCarousel';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTitle = 'Liberte sua mente.';

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      timeline
        .fromTo(
          '.hero-image',
          {
            scale: 1.08,
            ease: 'power2.out',
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.6,
            ease: 'power2.out',
          },
          '<10%'
        )
        .fromTo(
          '.hero-title-char',
          {
            filter: 'blur(10px)',
          },
          {
            filter: 'blur(0px)',
            opacity: 1,
            duration: 0.75,
            stagger: {
              each: 0.028,
              ease: 'power2.inOut',
            },
          },
          '<40%'
        )
        .fromTo(
          '.hero-description',
          {
            scale: 1.08,
            filter: 'blur(10px)',
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.75,
            filter: 'blur(0px)',
            ease: 'back.out(2.2)',
          },
          '<70%'
        )
        .fromTo(
          '.hero-button',
          {
            scale: 1.08,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            filter: 'blur(0px)',
          },
          '<40%'
        )
        .fromTo(
          '.partner-icons',
          {
            scale: 1.08,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            filter: 'blur(0px)',
          },
          '<80%'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="inicio"
      aria-labelledby="hero-section-title"
      ref={sectionRef}
      className="panel hero-section 3xl:pt-[7.913vw] flex min-h-svh w-full flex-col pt-23 md:pt-31 xl:pt-35"
    >
      <div className="3xl:p-[1.667vw] 3xl:rounded-tl-[2.083vw] 3xl:rounded-r-[2.083vw] relative isolate grid flex-1 items-center overflow-hidden rounded-tl-[1.25rem] rounded-r-[1.25rem] bg-slate-950 p-4 md:rounded-tl-[2.5rem] md:rounded-r-[2.5rem] md:p-8">
        <Image
          src="/images/bg-herosection.webp"
          alt="Imagem de fundo com mulher respirando profundamente em um ambiente floral"
          aria-hidden="true"
          fill
          preload
          fetchPriority="high"
          loading="eager"
          quality={90}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1440px) 1400px,
            1920px
          "
          className="hero-image object-cover object-[calc(81%+120px)_center] md:object-[calc(84%+120px)_center] xl:object-center"
        />

        <div
          aria-hidden
          className="bg-gradient-hero-section-bg-overlay absolute h-full w-full bg-size-[100%_100%,165%_200%] md:bg-size-[100%_100%,160%_200%] lg:bg-size-[100%_100%,140%_200%] xl:bg-cover"
        />

        <header className="relative z-10 grid" style={{ gridTemplateColumns: 'min-content' }}>
          <h2
            id="hero-section-title"
            className="3xl:text-[4.8vw] 3xl:mb-[1.667vw] mb-4 text-[8.8vw] font-semibold whitespace-nowrap text-white/95 md:mb-8 md:text-[4.125rem]"
          >
            {heroTitle.split('').map((character, index) => (
              <span
                key={`${character}-${index}`}
                className="hero-title-char inline-block will-change-transform"
              >
                {character === ' ' ? '\u00A0' : character}
              </span>
            ))}
          </h2>

          <p className="hero-description 3xl:text-[1.46vw] 3xl:mb-[3.334vw] mb-8 text-[clamp(1rem,3vw,1.25rem)] font-light text-white/90 md:mb-16">
            <span className="font-medium">Descubra o Método MindFlow:</span> um treinamento online
            que combina neurociência, design e produtividade para te ajudar a ter foco e resultados,
            sem estresse e sem fórmulas mágicas.
          </p>

          <button
            type="button"
            className="hero-button bg-gradient-button bg-gradient-button-primary 3xl:text-[1.46vw] 3xl:max-w-max 3xl:px-[3.334vw] 3xl:py-[.834vw] max-w-76 rounded-full px-8 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-slate-950 active:scale-90 max-md:w-full md:px-16"
          >
            Entrar na Lista VIP
          </button>
        </header>
      </div>

      <div aria-hidden className="3xl:h-[1.667vw] 3xl:pl-[3.334vw] h-8 bg-slate-950 pl-4 md:pl-16">
        <div className="h-full w-full rounded-l-full bg-slate-300" />
      </div>

      <PartnerLogoCarousel />
    </section>
  );
};

export default HeroSection;
