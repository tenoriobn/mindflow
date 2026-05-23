'use client';
import Image from 'next/image';
import SectionTitle from 'src/components/SectionTitle';
import { testimonialsData } from './testimonialsData';
import './testimonials.css';
import { useRef } from 'react';
import { gsap, useGSAP, SplitText } from 'src/lib/gsap';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) {
        return;
      }

      const split = SplitText.create(titleRef.current, {
        type: 'chars',
        charsClass: 'bandChar',
      });

      gsap.set(split.chars, {
        opacity: 0,
        transformPerspective: 200,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      });

      gsap.fromTo(
        split.chars,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: 'power2.out',
          stagger: -0.05,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      const testimonialsWrapper = sectionRef.current?.querySelector('.testimonials-fade-container');

      const testimonialColumns = gsap.utils.toArray<HTMLElement>('.testimonials-mask');

      if (testimonialsWrapper) {
        gsap.fromTo(
          testimonialsWrapper,
          {
            opacity: 0,
            rotateY: -12,
            transformPerspective: 1200,
            transformOrigin: 'left center',
          },
          {
            opacity: 1,
            rotateY: 0,
            ease: 'none',

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              end: 'top 20%',
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        testimonialColumns[0],
        {
          opacity: 0,
          y: 40,
          filter: 'blur(12px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'none',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      if (testimonialColumns[1]) {
        gsap.fromTo(
          testimonialColumns[1],
          {
            opacity: 0,
            y: 50,
            filter: 'blur(12px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            ease: 'none',

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: 'top 15%',
              scrub: true,
            },
          }
        );
      }

      if (testimonialColumns[2]) {
        gsap.fromTo(
          testimonialColumns[2],
          {
            opacity: 0,
            y: 60,
            filter: 'blur(12px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            ease: 'none',

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 30%',
              end: 'top 10%',
              scrub: true,
            },
          }
        );
      }

      return () => {
        split.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="flex min-h-svh flex-col overflow-hidden max-md:max-h-152 md:max-h-svh"
    >
      <SectionTitle
        ref={titleRef}
        id="testimonials-title"
        className="text-slate-950 backface-hidden transform-3d"
      >
        O que nossos alunos <span className="inline-block">dizem</span>
      </SectionTitle>

      <div className="testimonials-fade-container 3xl:gap-[1.667vw] grid flex-1 grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {[0, 1, 2].map((column) => {
          const items = testimonialsData.filter((_, index) => index % 3 === column);

          return (
            <div
              key={column}
              className={`testimonials-mask 3xl:my-[.104vw] relative my-0.5 overflow-hidden ${column === 1 ? 'hidden md:block' : ''} ${column === 2 ? 'hidden xl:block' : ''} `}
            >
              <ul
                className={`3xl:gap-[1.667vw] flex flex-col gap-4 will-change-transform md:gap-8 ${
                  column === 1 ? 'animate-testimonials-reverse' : 'animate-testimonials'
                }`}
              >
                {[...items, ...items].map(({ id, quote, name, avatar, handle }, index) => (
                  <li key={`${id}-${index}`}>
                    <article className="3xl:rounded-[2.083vw] 3xl:p-[1.667vw] 3xl:gap-[1.667vw] transition-default flex flex-col gap-8 rounded-[1.25rem] bg-slate-200/80 p-4 text-slate-950/45 select-none hover:bg-slate-950/10 md:rounded-[2.5rem] md:p-8">
                      <blockquote>
                        <p className="3xl:text-[1.46vw] text-xl font-medium italic md:text-2xl">
                          {quote}
                        </p>
                      </blockquote>

                      <footer className="3xl:gap-[0.834vw] flex items-center gap-4">
                        <Image
                          width={80}
                          height={80}
                          src={avatar}
                          alt={`Foto de perfil de ${name}`}
                          className="3xl:w-[4.271vw] 3xl:h-[4.271vw] h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
                        />

                        <div className="3xl:gap-[.0105vw] flex flex-col gap-0.5">
                          <cite className="3xl:text-[1.25vw] text-lg font-semibold not-italic md:text-xl">
                            {name}
                          </cite>

                          <p className="3xl:text-[1.042vw] text-sm md:text-base">{handle}</p>
                        </div>
                      </footer>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
