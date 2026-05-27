'use client';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import DiamondIcon from 'public/icons/diamond.svg';
import Image from 'next/image';
import './bonus-cta.css';
import { useRef } from 'react';
import { gsap, useGSAP, SplitText } from 'src/lib/gsap';

const BonusCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) {
        return;
      }

      const title = sectionRef.current.querySelector('.bonus-title');
      const description = sectionRef.current.querySelector('.bonus-description');

      if (!title || !description) {
        return;
      }

      const splitTitle = SplitText.create(title, {
        type: 'words',
      });

      const splitDescription = SplitText.create(description, {
        type: 'words',
      });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true,
          },
        });

        tl.fromTo(
          '.image-bonus',
          {
            opacity: 0,
            scale: 0.8,
            filter: 'blur(12px)',
          },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            ease: 'none',
            duration: 1.2,
          }
        )
          .from(
            splitTitle.words,
            {
              yPercent: 100,
              opacity: 0,
              stagger: 0.03,
              ease: 'power4.out',
              duration: 0.8,
            },
            0.2
          )
          .from(
            splitDescription.words,
            {
              yPercent: 100,
              opacity: 0,
              stagger: 0.03,
              ease: 'power4.out',
              duration: 0.6,
            },
            0.6
          )
          .from(
            '.bonus-button',
            {
              y: 30,
              opacity: 0,
              scale: 0.95,
              filter: 'blur(6px)',
              ease: 'power3.out',
              duration: 0.6,
            },
            1
          );
      });

      mm.add('(max-width: 1023px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 10%',
            scrub: true,
          },
        });

        tl.from(splitTitle.words, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.03,
          ease: 'power4.out',
          duration: 0.8,
        })
          .from(
            splitDescription.words,
            {
              yPercent: 100,
              opacity: 0,
              stagger: 0.03,
              ease: 'power4.out',
              duration: 0.6,
            },
            0.2
          )
          .fromTo(
            '.bonus-button',
            {
              y: 30,
              opacity: 0,
              scale: 0.95,
              filter: 'blur(6px)',
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              ease: 'power3.out',
              duration: 0.6,
            },
            0.6
          )
          .fromTo(
            '.image-bonus',
            {
              opacity: 0,
              scale: 0.8,
              filter: 'blur(12px)',
            },
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              ease: 'none',
              duration: 1,
            },
            1
          );
      });

      return () => {
        splitTitle.revert();
        splitDescription.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="bonus-cta"
      aria-labelledby="bonus-cta-title"
      className="bonus-wrapper inverted-radius 3xl:p-[1.667vw] 3xl:gap-[1.667vw] flex min-h-svh gap-4 p-4 max-xl:flex-col md:gap-8 md:p-8 lg:grid lg:grid-cols-2 lg:items-center"
    >
      <div className="flex flex-col lg:order-2">
        <SectionTitle
          id="bonus-cta-title"
          className="bonus-title text-white/95 max-lg:mx-auto max-lg:max-w-160 lg:text-left"
        >
          Entre para a lista VIP e garanta um bônus exclusivo
        </SectionTitle>

        <SectionDescription
          id="bonus-cta-description"
          className="bonus-description inline-block text-white/90 max-lg:mx-auto max-lg:text-center"
        >
          Ao se inscrever, você recebe: Acesso antecipado ao lançamento, Desconto exclusivo, E-book
          &apos;Rotina com Clareza&apos;.
        </SectionDescription>

        <button
          type="button"
          aria-describedby="bonus-cta-description"
          className="bonus-button bg-gradient-button bg-gradient-button-secondary 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex w-full items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 active:scale-90 max-lg:self-center md:max-w-max md:px-16"
        >
          <DiamondIcon
            aria-hidden="true"
            className="animate-spin-slow 3xl:h-[1.771vw] h-5 md:h-6"
          />
          <span>Quero entrar na lista VIP</span>
        </button>
      </div>

      <Image
        src="/images/vip-list-card.webp"
        alt="Mulher sorrindo enquanto usa um tablet em um ambiente confortável"
        width={1440}
        height={1381}
        quality={90}
        sizes="
          (max-width: 768px) 100vw,
          (max-width: 1280px) 50vw,
          900px
        "
        loading="eager"
        decoding="async"
        className="image-bonus 3xl:rounded-[2.083vw] h-full w-full rounded-[1.25rem] object-cover max-xl:flex-1 md:min-h-105 md:rounded-[2.5rem] lg:order-1"
      />
    </section>
  );
};

export default BonusCTA;
