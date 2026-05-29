'use client';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import './faq.css';
import FAQAccordion from './FAQAccordion';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap, useGSAP, SplitText } from 'src/lib/gsap';

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const mm = gsap.matchMedia();

      if (!section) {
        return;
      }

      const title = section.querySelector('.faq-title');
      const description = section.querySelector('.faq-description');
      const button = section.querySelector('.faq-button');
      const faqItems = gsap.utils.toArray<HTMLElement>('.faq-item');

      if (!title || !description || !button || !faqItems.length) {
        return;
      }

      gsap.set([title, description, button, faqItems], {
        willChange: 'transform, opacity',
        force3D: true,
        backfaceVisibility: 'hidden',
      });

      const splitTitle = SplitText.create(title, {
        type: 'words',
      });

      const splitDescription = SplitText.create(description, {
        type: 'words',
      });

      mm.add(
        {
          desktop: '(min-width: 1024px)',
          mobile: '(max-width: 1023px)',
        },
        (context) => {
          const { desktop } = context.conditions!;

          const introTl = gsap.timeline({
            defaults: {
              ease: 'power3.out',
            },

            scrollTrigger: {
              trigger: section,
              start: desktop ? 'top 35%' : 'top 70%',
              end: desktop ? 'top 15%' : 'top 55%',
              scrub: 0.8,
            },
          });

          introTl
            .from(splitTitle.words, {
              yPercent: -100,
              opacity: 0,
              stagger: 0.035,
              duration: 0.7,
            })
            .from(
              splitDescription.words,
              {
                yPercent: 40,
                opacity: 0,
                stagger: 0.012,
                duration: 0.45,
                ease: 'power2.out',
              },
              0.12
            )
            .from(
              button,
              {
                opacity: 0,
                scale: 0.92,
                y: 16,
                filter: 'blur(4px)',
                duration: 0.55,
                ease: 'power2.out',
              },
              0.22
            );
        }
      );

      faqItems.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          scale: 0.96,
          y: 24,
          filter: 'blur(4px)',

          duration: 0.8,
          ease: 'power3.out',

          clearProps: 'all',

          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            end: 'top 85%',
            scrub: 0.8,
          },

          delay: index * 0.03,
        });
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
      id="faq"
      aria-labelledby="faq-title"
      className="flex overflow-hidden max-xl:flex-col lg:grid lg:grid-cols-2 lg:items-center"
    >
      <header className="faq-wrapper inverted-radius 3xl:p-[1.667vw] flex h-full flex-col justify-center p-4 md:p-8">
        <SectionTitle
          id="faq-title"
          className="faq-title text-white/95 max-lg:mx-auto max-lg:max-w-160 lg:text-left"
        >
          Dúvidas frequentes
        </SectionTitle>

        <SectionDescription
          id="faq-description"
          className="faq-description text-white/90 max-lg:mx-auto max-lg:max-w-160 max-lg:text-center"
        >
          Não encontrou o que procurava? Tire suas dúvidas com a gente e descubra como o MindFlow
          pode transformar sua rotina.
        </SectionDescription>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20entender%20melhor%20como%20o%20MindFlow%20pode%20me%20ajudar."
          aria-describedby="faq-description"
          className="faq-button bg-gradient-button bg-gradient-button-whatsapp 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 active:scale-90! max-lg:self-center md:max-w-max md:px-16"
        >
          <WhatsappIcon
            aria-hidden="true"
            focusable="false"
            className="animate-spin-slow 3xl:h-[1.771vw] h-5 md:h-6"
          />

          <span>Perguntar no Whatsapp</span>
        </Link>
      </header>

      <FAQAccordion />
    </section>
  );
};

export default FAQ;
