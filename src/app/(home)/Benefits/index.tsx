'use client';
import SectionTitle from 'src/components/SectionTitle';
import PlantIcon from 'public/icons/plant.svg';
import { useRef } from 'react';
import { gsap, useGSAP, SplitText } from 'src/lib/gsap';

const listBase = '3xl:min-h-[19.584vw] min-h-60 md:min-h-66 lg:min-h-94';

const listBaseDark =
  'bg-gradient-header 3xl:gap-[1.667vw] 3xl:rounded-[2.083vw] relative flex flex-col justify-end gap-4 overflow-hidden rounded-[1.25rem] bg-slate-950 p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const listBaseLight = 'lg:relative lg:bg-slate-950';

const framedArticleContentBase = 'h-full lg:bg-slate-300 ';

const backgroundCardBase = 'bg-cover bg-top';

const contentBase =
  '3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] relative flex h-full flex-col justify-end gap-4 rounded-[1.25rem] p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const titleBase = '3xl:text-[1.25vw] text-lg font-semibold text-white/95 md:text-2xl';

const descriptionBase = '3xl:text-[1.042vw] text-base text-white/75 md:text-xl';

const benefits = [
  {
    title: 'Mais foco, menos distração',
    description:
      'Treine sua mente para trabalhar com clareza, eliminando ruídos e direcionando atenção para o essencial.',
    variant: 'image',
    image: '/images/focus-card.webp',
    articleClass:
      '3xl:rounded-br-[2.083vw] 3xl:pr-[1.667vw] 3xl:pb-[1.667vw] lg:rounded-br-[2.5rem] lg:pr-8 lg:pb-8',
  },
  {
    title: 'Clareza mental',
    description:
      'Entenda seus padrões, organize seus pensamentos e tome decisões com leveza e consciência.',
    variant: 'dark',
    itemClass:
      '3xl:rounded-bl-none 3xl:p-[1.667vw] 3xl:pb-[3.334vw] 3xl:ps-[3.334vw] lg:rounded-bl-none lg:ps-16 lg:pb-16',
    iconClass:
      'xs:h-19 3xl:h-[7.292vw] 3xl:right-[.625vw] 3xl:top-[-.417vw] absolute -top-2 right-3 h-16 rotate-194 opacity-12 2xl:h-35',
  },
  {
    title: 'Equilíbrio emocional',
    description:
      'Encontre o ponto entre o fazer e o sentir, reduzindo o estresse e recuperando o controle da sua energia.',
    variant: 'dark',
    itemClass: '3xl:rounded-tr-none 3xl:p-[1.667vw] lg:rounded-tr-none',
    iconClass: 'xs:h-19 3xl:h-[7.292vw] absolute top-1 left-0 h-16 rotate-104 opacity-12 2xl:h-35',
  },
  {
    title: 'Produtividade com propósito',
    description:
      'Aumente seu desempenho sem sobrecarga, trabalhando com equilíbrio, foco e satisfação.',
    variant: 'image',
    image: '/images/productivity-card.webp',
    articleClass:
      '3xl:rounded-tl-[2.083vw] 3xl:pt-[1.667vw] 3xl:pl-[1.667vw] lg:rounded-tl-[2.5rem] lg:pt-8 lg:pl-8',
  },
];

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) {
        return;
      }

      const split = SplitText.create(titleRef.current, {
        type: 'chars,words',
        charsClass: 'char',
      });

      gsap.set(split.chars, {
        opacity: 0,
        y: 24,

        force3D: true,
        willChange: 'transform, opacity',
      });

      gsap.to(split.chars, {
        opacity: 1,
        y: 0,

        duration: 0.7,

        stagger: 0.025,

        ease: 'power2.out',

        clearProps: 'willChange',

        scrollTrigger: {
          trigger: sectionRef.current,

          start: 'top 85%',
          end: 'top 55%',

          scrub: 0.8,

          invalidateOnRefresh: true,

          fastScrollEnd: true,
        },
      });

      const mm = gsap.matchMedia();

      const cardsWrapper = gsap.utils.toArray<HTMLElement>('.cards-wrapper');
      const darkCards = gsap.utils.toArray<HTMLElement>('.benefit-card-dark');
      const lightCards = gsap.utils.toArray<HTMLElement>('.benefit-card-light');
      const lightCardsContent = gsap.utils.toArray<HTMLElement>('.benefit-card-light-content');

      mm.add('(min-width: 1024px)', () => {
        gsap.set(cardsWrapper, {
          force3D: true,
          backfaceVisibility: 'hidden',
          transformPerspective: 1000,
        });

        gsap.fromTo(
          cardsWrapper,
          {
            opacity: 0.7,
            scale: 0.94,
          },
          {
            opacity: 1,
            scale: 1,

            ease: 'none',

            clearProps: 'willChange',

            scrollTrigger: {
              trigger: sectionRef.current,

              start: 'top 85%',
              end: 'top 50%',

              scrub: 0.8,

              invalidateOnRefresh: true,

              fastScrollEnd: true,

              onEnter: () => {
                gsap.set(cardsWrapper, {
                  willChange: 'transform, opacity',
                });
              },

              onLeave: () => {
                gsap.set(cardsWrapper, {
                  willChange: 'auto',
                });
              },
            },
          }
        );

        gsap.fromTo(
          lightCardsContent[0],
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

              start: 'top 65%',
              end: 'top 45%',

              scrub: 0.8,

              invalidateOnRefresh: true,

              fastScrollEnd: true,

              onEnter: () => {
                gsap.set(lightCardsContent[0], {
                  willChange: 'transform, opacity, filter',
                });
              },

              onLeave: () => {
                gsap.set(lightCardsContent[0], {
                  willChange: 'auto',
                });
              },
            },
          }
        );

        gsap.fromTo(
          lightCardsContent[1],
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

              start: 'top 30%',
              end: 'top 10%',

              scrub: 0.8,

              invalidateOnRefresh: true,

              fastScrollEnd: true,

              onEnter: () => {
                gsap.set(lightCardsContent[1], {
                  willChange: 'transform, opacity, filter',
                });
              },

              onLeave: () => {
                gsap.set(lightCardsContent[1], {
                  willChange: 'auto',
                });
              },
            },
          }
        );
      });

      mm.add('(max-width: 1023px)', () => {
        [...darkCards, ...lightCards].forEach((card) => {
          gsap.set(card, {
            force3D: true,
            backfaceVisibility: 'hidden',
          });

          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 20,
              filter: 'blur(4px)',
            },
            {
              opacity: 1,
              y: 0,

              filter: 'blur(0px)',

              ease: 'none',

              clearProps: 'filter,willChange',

              scrollTrigger: {
                trigger: card,

                start: 'top 82%',
                end: 'top 65%',

                scrub: 0.8,

                invalidateOnRefresh: true,

                fastScrollEnd: true,

                onEnter: () => {
                  gsap.set(card, {
                    willChange: 'transform, opacity, filter',
                  });
                },

                onLeave: () => {
                  gsap.set(card, {
                    willChange: 'auto',
                  });
                },
              },
            }
          );
        });
      });

      return () => {
        split.revert();
        mm.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      aria-labelledby="benefits-title"
      className="flex min-h-svh flex-col"
    >
      <SectionTitle ref={titleRef} id="benefits-title" className="text-slate-950">
        O que você vai conquistar
      </SectionTitle>

      <ul className="cards-wrapper grid flex-1 max-md:gap-4 md:max-lg:gap-8 lg:grid-cols-2">
        {benefits.map((benefit) => {
          const isImageCard = benefit.variant === 'image';

          return (
            <li
              key={benefit.title}
              className={`${listBase} ${
                isImageCard
                  ? `benefit-card-light ${listBaseLight}`
                  : `benefit-card-dark ${listBaseDark} ${benefit.itemClass}`
              }`}
            >
              <article
                className={
                  isImageCard
                    ? `${framedArticleContentBase} ${benefit.articleClass}`
                    : '3xl:gap-[1.667vw] flex flex-col gap-4 md:gap-8'
                }
              >
                {isImageCard ? (
                  <div
                    className={`benefit-card-light-content ${contentBase} ${backgroundCardBase}`}
                    style={{
                      backgroundImage: `var(--background-image-gradient-card), url(${benefit.image})`,
                    }}
                  >
                    <h3 className={titleBase}>{benefit.title}</h3>

                    <p className={descriptionBase}>{benefit.description}</p>
                  </div>
                ) : (
                  <>
                    <PlantIcon aria-hidden="true" focusable="false" className={benefit.iconClass} />

                    <h3 className={titleBase}>{benefit.title}</h3>

                    <p className={descriptionBase}>{benefit.description}</p>
                  </>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Benefits;
