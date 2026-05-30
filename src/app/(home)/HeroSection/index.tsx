'use client';
import Image from 'next/image';
import PartnerLogoCarousel from './PartnerLogoCarousel';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';
import './hero-section.css';
import Link from 'next/link';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heroSection = sectionRef.current;
      const aboutSection = document.querySelector('.about-section');

      if (!heroSection || !aboutSection) {
        return;
      }

      const heroContent = heroSection.querySelector('.hero-content');
      const heroImage = heroSection.querySelector('.hero-image');
      const partnerWrapper = heroSection.querySelectorAll('.partner-mask');

      if (!heroContent || !heroImage || !partnerWrapper.length) {
        return;
      }

      gsap.set(heroSection, {
        transformOrigin: 'center center',
        force3D: true,
      });

      gsap.set([heroImage, heroContent, partnerWrapper], {
        force3D: true,
        backfaceVisibility: 'hidden',
      });

      gsap.to(heroSection, {
        yPercent: 82,
        scale: 0.92,

        opacity: 0.35,
        filter: 'blur(4px)',

        ease: 'none',

        scrollTrigger: {
          trigger: aboutSection,

          start: 'top 95%',
          end: 'top 70%',

          scrub: 0.8,

          invalidateOnRefresh: true,

          onEnter: () => {
            gsap.set(heroSection, {
              willChange: 'transform, opacity',
            });
          },

          onLeaveBack: () => {
            gsap.set(heroSection, {
              willChange: 'auto',
            });
          },
        },
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        heroImage,
        {
          scale: 1.08,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,

          duration: 1,

          clearProps: 'transform',
        }
      )

        .fromTo(
          heroContent,
          {
            y: 24,
            opacity: 0,
            filter: 'blur(6px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',

            duration: 0.9,

            clearProps: 'filter',
          },
          '-=0.65'
        )

        .fromTo(
          partnerWrapper,
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,

            duration: 0.65,
            stagger: 0.05,
            ease: 'power2.out',

            clearProps: 'transform',
          },
          '-=0.5'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section id="inicio">
      <div
        ref={sectionRef}
        aria-labelledby="hero-section-title"
        className="3xl:pt-[7.292vw] 3xl:pb-[1.667vw] flex min-h-svh w-full flex-col self-center pt-23 pb-4 md:pt-31 md:pb-8 xl:pt-35"
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
            className="hero-image object-cover object-[calc(81%+120px)_center] opacity-0 md:object-[calc(84%+120px)_center] xl:object-center"
          />

          <div
            aria-hidden
            className="bg-gradient-hero-section-bg-overlay absolute h-full w-full bg-size-[100%_100%,165%_200%] md:bg-size-[100%_100%,160%_200%] lg:bg-size-[100%_100%,140%_200%] xl:bg-cover"
          />

          <header
            className="hero-content relative z-10 grid opacity-0"
            style={{ gridTemplateColumns: 'min-content' }}
          >
            <h2
              id="hero-section-title"
              className="3xl:text-[3.438vw] 3xl:mb-[1.667vw] mb-4 text-[8.8vw] font-semibold whitespace-nowrap text-white/95 md:mb-8 md:text-[4.125rem]"
            >
              Liberte sua mente.
            </h2>

            <p className="3xl:text-[1.042vw] 3xl:mb-[3.334vw] mb-8 text-[clamp(1rem,3vw,1.25rem)] font-light text-white/90 md:mb-16">
              <span className="font-medium">Descubra o Método MindFlow:</span> um treinamento online
              que combina neurociência, design e produtividade para te ajudar a ter foco e
              resultados, sem estresse e sem fórmulas mágicas.
            </p>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5511999999999?text=Olá!%20Conheci%20o%20MindFlow%20e%20gostaria%20de%20entrar%20na%20Lista%20VIP%20para%20receber%20mais%20informações."
              className="bg-gradient-button bg-gradient-button-primary 3xl:text-[1.042vw] 3xl:max-w-max 3xl:px-[3.334vw] 3xl:py-[.834vw] max-w-76 rounded-full px-8 py-4 text-center text-[clamp(1rem,3vw,1.25rem)] font-medium text-slate-950 active:scale-90 max-md:w-full md:px-16"
            >
              Entrar na Lista VIP
            </Link>
          </header>
        </div>

        <div
          aria-hidden
          className="3xl:h-[1.667vw] 3xl:pl-[3.334vw] h-8 bg-slate-950 pl-4 md:pl-16"
        >
          <div className="h-full w-full rounded-l-full bg-slate-300" />
        </div>

        <PartnerLogoCarousel />
      </div>
    </section>
  );
};

export default HeroSection;
