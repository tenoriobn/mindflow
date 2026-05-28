'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';

const BrandSignature = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const chars = gsap.utils.toArray<HTMLElement>(section.querySelectorAll('.brand-char'));

      gsap.set(chars, {
        willChange: 'transform, opacity, filter',
        force3D: true,
        backfaceVisibility: 'hidden',
      });

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          yPercent: 12,
          scale: 0.94,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          yPercent: 0,
          scale: 1,
          filter: 'blur(0px)',
          stagger: 0.035,
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 35%',
            scrub: 0.8,
          },
          clearProps: 'willChange',
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
      aria-labelledby="brand-signature-title"
      className="3xl:pl-[1.667vw] pb-px pl-4 md:pl-8"
    >
      <div className="3xl:p-[1.667vw] 3xl:rounded-l-[2.083vw] rounded-bl-[1.25rem] bg-slate-300 p-4 md:rounded-bl-[2.5rem] md:p-8 lg:rounded-l-[2.5rem]">
        <h2
          id="brand-signature-title"
          className="3xl:text-[18vw] text-center text-[30.96vw] leading-[84%] font-semibold break-all select-none md:text-[31.7vw] lg:text-[17.442vw] xl:text-[18.2vw] 2xl:text-[17.2vw]"
        >
          {'MindFlow'.split('').map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="brand-char bg-gradient-text-animated inline-block transform-[translateZ(0)] bg-clip-text text-transparent will-change-transform backface-hidden"
            >
              {char}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default BrandSignature;
