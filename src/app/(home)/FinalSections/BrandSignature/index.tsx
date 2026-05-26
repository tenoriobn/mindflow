import { useRef } from 'react';
import { gsap, useGSAP } from 'src/lib/gsap';

const BrandSignature = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>('.brand-char');

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
          filter: 'blur(12px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
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
      aria-labelledby="brand-signature-title"
      className="3xl:pl-[1.667vw] pl-4 md:pl-8"
    >
      <div className="3xl:p-[1.667vw] 3xl:rounded-l-[2.083vw] rounded-bl-[1.25rem] bg-slate-300 p-4 md:rounded-bl-[2.5rem] md:p-8 lg:rounded-l-[2.5rem]">
        <h2
          id="brand-signature-title"
          className="3xl:text-[18vw] text-center text-[30.96vw] leading-[84%] font-semibold break-all select-none md:text-[31.7vw] lg:text-[17.442vw] xl:text-[18.2vw] 2xl:text-[17.2vw]"
        >
          {'MindFlow'.split('').map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="brand-char bg-gradient-text-animated inline-block bg-clip-text text-transparent"
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
