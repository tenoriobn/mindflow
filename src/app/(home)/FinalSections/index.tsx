'use client';
import BonusCTA from './BonusCTA';
import BrandSignature from './BrandSignature';
import FAQ from './FAQ';
import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';

const FinalSections = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) {
        return;
      }

      gsap.fromTo(
        sectionRef.current,
        {
          marginTop: '0',
        },
        {
          ease: 'none',
          marginTop: '-100vh',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top top',
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
    <div
      ref={sectionRef}
      className="final-section bg-gradient-header 3xl:rounded-t-[2.083vw] relative z-20 min-h-svh overflow-hidden rounded-t-[1.25rem] bg-slate-950 will-change-transform md:rounded-t-[2.5rem]"
    >
      <BonusCTA />
      <FAQ />
      <BrandSignature />
    </div>
  );
};

export default FinalSections;
