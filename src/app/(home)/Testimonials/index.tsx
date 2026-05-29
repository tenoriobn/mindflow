'use client';
import Image from 'next/image';
import SectionTitle from 'src/components/SectionTitle';
import { testimonialsData } from './testimonialsData';
import './testimonials.css';
import { useRef } from 'react';
import { gsap, useGSAP, SplitText } from 'src/lib/gsap';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const testimonials = sectionRef.current;
      const finalSection = document.querySelector('.final-section');

      if (!testimonials || !finalSection) {
        return;
      }

      gsap.set(testimonials, {
        force3D: true,
        backfaceVisibility: 'hidden',
        transformPerspective: 1000,
        transformOrigin: 'center center',
      });

      gsap.to(testimonials, {
        yPercent: 65,

        scale: 0.92,

        autoAlpha: 0.35,

        ease: 'none',

        clearProps: 'willChange',

        scrollTrigger: {
          trigger: finalSection,

          start: 'top 50%',
          end: 'top 25%',

          scrub: 0.8,

          invalidateOnRefresh: true,

          fastScrollEnd: true,

          onEnter: () => {
            gsap.set(testimonials, {
              willChange: 'transform, opacity',
            });
          },

          onLeave: () => {
            gsap.set(testimonials, {
              willChange: 'auto',
            });
          },

          onLeaveBack: () => {
            gsap.set(testimonials, {
              willChange: 'transform, opacity',
            });
          },
        },
      });

      if (!titleRef.current) {
        return;
      }

      const split = SplitText.create(titleRef.current, {
        type: 'chars',
        charsClass: 'bandChar',
      });

      gsap.set(split.chars, {
        opacity: 0,
        y: 20,

        force3D: true,
        backfaceVisibility: 'hidden',
        willChange: 'transform, opacity',
      });

      gsap.to(split.chars, {
        opacity: 1,
        y: 0,

        duration: 0.7,

        stagger: -0.03,

        ease: 'power2.out',

        clearProps: 'willChange',

        scrollTrigger: {
          trigger: sectionRef.current,

          start: 'top 90%',
          end: 'top 55%',

          scrub: 0.8,

          invalidateOnRefresh: true,

          fastScrollEnd: true,
        },
      });

      const testimonialsWrapper = sectionRef.current?.querySelector('.testimonials-fade-container');

      const testimonialColumns = gsap.utils.toArray<HTMLElement>('.testimonials-mask');

      if (testimonialsWrapper) {
        gsap.set(testimonialsWrapper, {
          force3D: true,
          backfaceVisibility: 'hidden',
          transformPerspective: 1000,
        });

        gsap.fromTo(
          testimonialsWrapper,
          {
            opacity: 0,
            rotateY: -6,
            y: 24,
          },
          {
            opacity: 1,
            rotateY: 0,
            y: 0,

            ease: 'none',

            clearProps: 'willChange',

            scrollTrigger: {
              trigger: sectionRef.current,

              start: 'top 92%',
              end: 'top 40%',

              scrub: 0.8,

              invalidateOnRefresh: true,

              fastScrollEnd: true,

              onEnter: () => {
                gsap.set(testimonialsWrapper, {
                  willChange: 'transform, opacity',
                });
              },

              onLeave: () => {
                gsap.set(testimonialsWrapper, {
                  willChange: 'auto',
                });
              },
            },
          }
        );
      }

      gsap.fromTo(
        testimonialColumns[0],
        {
          opacity: 0,
          y: 24,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          y: 0,

          filter: 'blur(0px)',

          ease: 'none',

          clearProps: 'filter,willChange',

          scrollTrigger: {
            trigger: sectionRef.current,

            start: 'top 88%',
            end: 'top 40%',

            scrub: 0.8,

            invalidateOnRefresh: true,

            fastScrollEnd: true,

            onEnter: () => {
              gsap.set(testimonialColumns[0], {
                willChange: 'transform, opacity, filter',
              });
            },

            onLeave: () => {
              gsap.set(testimonialColumns[0], {
                willChange: 'auto',
              });
            },
          },
        }
      );

      gsap.fromTo(
        testimonialColumns[1],
        {
          opacity: 0,
          y: 32,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          y: 0,

          filter: 'blur(0px)',

          ease: 'none',

          clearProps: 'filter,willChange',

          scrollTrigger: {
            trigger: sectionRef.current,

            start: 'top 82%',
            end: 'top 35%',

            scrub: 0.8,

            invalidateOnRefresh: true,

            fastScrollEnd: true,
          },
        }
      );

      gsap.fromTo(
        testimonialColumns[2],
        {
          opacity: 0,
          y: 40,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          y: 0,

          filter: 'blur(0px)',

          ease: 'none',

          clearProps: 'filter,willChange',

          scrollTrigger: {
            trigger: sectionRef.current,

            start: 'top 76%',
            end: 'top 30%',

            scrub: 0.8,

            invalidateOnRefresh: true,

            fastScrollEnd: true,
          },
        }
      );

      return () => {
        split.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section id="depoimentos">
      <div
        ref={sectionRef}
        aria-labelledby="testimonials-title"
        className="relative z-10 flex min-h-svh flex-col overflow-hidden max-md:max-h-152 md:max-h-svh"
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
                          <p className="3xl:text-[1.042vw] text-xl font-medium italic md:text-2xl">
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
      </div>
    </section>
  );
};

export default Testimonials;
