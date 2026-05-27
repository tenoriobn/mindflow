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
      if (!sectionRef.current) {
        return;
      }
      const title = sectionRef.current.querySelector('.faq-title');
      const description = sectionRef.current.querySelector('.faq-description');

      if (!title || !description) {
        return;
      }

      const splitTitle = SplitText.create(title, {
        type: 'words',
      });

      const splitDescription = SplitText.create(description, {
        type: 'words',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          end: 'top 10%',
          scrub: 0.8,
        },
      });

      tl.from(splitTitle.words, {
        y: -30,
        opacity: 0,
        stagger: 0.04,
        ease: 'power3.out',
        duration: 0.8,
      })
        .from(
          splitDescription.words,
          {
            y: 15,
            opacity: 0,
            stagger: 0.015,
            ease: 'power2.out',
            duration: 0.5,
          },
          0.15
        )
        .from(
          '.faq-button',
          {
            opacity: 0,
            scale: 0.5,
            filter: 'blur(6px)',
            ease: 'power3.out',
            duration: 0.6,
          },
          0.3
        );

      gsap.from('.faq-item', {
        scale: 0.8,
        opacity: 0,
        filter: 'blur(10px)',
        stagger: 0.12,
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: {
          trigger: '.faq-item',
          start: 'top 60%',
          end: 'top 10%',
          scrub: 0.8,
        },
      });
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
      className="flex overflow-hidden max-xl:flex-col lg:grid lg:grid-cols-2 lg:items-center"
    >
      <header className="faq-wrapper inverted-radius 3xl:p-[1.667vw] flex h-full flex-col justify-center p-4 md:p-8">
        <SectionTitle
          id="bonus-cta-title"
          className="faq-title text-white/95 max-lg:mx-auto max-lg:max-w-160 lg:text-left"
        >
          Dúvidas frequentes
        </SectionTitle>

        <SectionDescription
          id="bonus-cta-description"
          className="faq-description text-white/90 max-lg:mx-auto max-lg:max-w-160 max-lg:text-center"
        >
          Não encontrou o que procurava? Tire suas dúvidas com a gente e descubra como o MindFlow
          pode transformar sua rotina.
        </SectionDescription>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20entender%20melhor%20como%20o%20MindFlow%20pode%20me%20ajudar."
          aria-describedby="bonus-cta-description"
          className="faq-button bg-gradient-button bg-gradient-button-whatsapp 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 active:scale-90 max-lg:self-center md:max-w-max md:px-16"
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
