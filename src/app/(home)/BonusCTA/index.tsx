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
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const title = section.querySelector('.bonus-title');
      const description = section.querySelector('.bonus-description');
      const button = section.querySelector('.bonus-button');
      const image = section.querySelector('.image-bonus');

      if (!title || !description || !button || !image) {
        return;
      }

      gsap.set([title, description, button, image], {
        autoAlpha: 1,
      });

      gsap.set([button, image], {
        force3D: true,
        backfaceVisibility: 'hidden',
        transformPerspective: 1000,
        willChange: 'transform, opacity, filter',
      });

      const splitTitle = SplitText.create(title, {
        type: 'words',
        wordsClass: 'bonus-title-word',
      });

      const splitDescription = SplitText.create(description, {
        type: 'words',
        wordsClass: 'bonus-description-word',
      });

      gsap.set([...splitTitle.words, ...splitDescription.words], {
        transformOrigin: 'bottom center',
        willChange: 'transform, opacity',
      });

      gsap.set(button, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: 'blur(6px)',
      });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },

          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            end: 'top 15%',
            scrub: 0.8,
          },
        });

        tl.fromTo(
          image,
          {
            autoAlpha: 0,
            scale: 0.92,
            filter: 'blur(10px)',
          },
          {
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'none',
          }
        )

          .from(
            splitTitle.words,
            {
              yPercent: 100,
              autoAlpha: 0,
              stagger: 0.025,
              duration: 0.8,
              ease: 'power4.out',
            },
            0.15
          )

          .from(
            splitDescription.words,
            {
              yPercent: 100,
              autoAlpha: 0,
              stagger: 0.018,
              duration: 0.65,
              ease: 'power4.out',
            },
            0.35
          )
          .to(
            button,
            {
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              autoAlpha: 1,
              duration: 0.5,
              ease: 'power3.out',
            },
            0.6
          );
      });

      mm.add('(max-width: 1023px)', () => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },

          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            end: 'top 40%',
            scrub: 0.8,
          },
        });

        tl.from(splitTitle.words, {
          yPercent: 100,
          autoAlpha: 0,
          stagger: 0.03,
          duration: 0.75,
          ease: 'power4.out',
        })

          .from(
            splitDescription.words,
            {
              yPercent: 100,
              autoAlpha: 0,
              stagger: 0.02,
              duration: 0.6,
              ease: 'power4.out',
            },
            0.15
          )

          .fromTo(
            button,
            {
              y: 24,
              autoAlpha: 0,
              scale: 0.96,
              filter: 'blur(4px)',
            },
            {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.5,
            },
            0.35
          )

          .fromTo(
            image,
            {
              autoAlpha: 0,
              scale: 0.92,
              filter: 'blur(10px)',
            },
            {
              autoAlpha: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'none',
            },
            0.45
          );
      });

      return () => {
        mm.revert();

        splitTitle.revert();
        splitDescription.revert();

        gsap.set([button, image, ...splitTitle.words, ...splitDescription.words], {
          clearProps: 'all',
        });
      };
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
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
          className="bonus-button bg-gradient-button bg-gradient-button-secondary 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex w-full items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 opacity-0 active:scale-90 max-lg:self-center md:max-w-max md:px-16"
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
        priority
        decoding="async"
        className="image-bonus 3xl:rounded-[2.083vw] h-full w-full rounded-[1.25rem] object-cover max-xl:flex-1 md:min-h-105 md:rounded-[2.5rem] lg:order-1"
      />
    </section>
  );
};

export default BonusCTA;
