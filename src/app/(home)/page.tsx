'use client';
import { useGSAP } from '@gsap/react';
import AboutMethod from './AboutMethod';
import Benefits from './Benefits';
import BonusCTA from './BonusCTA';
import BrandSignature from './BrandSignature';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import GSAPProvider from 'src/components/GSAPProvider';
import { gsap } from 'src/lib';

const Home = () => {
  useGSAP(() => {
    const wrapper = document.querySelector('.hero-about-wrapper');
    const hero = document.querySelector('.hero-section');
    const about = document.querySelector('.about-method');

    if (!wrapper || !hero || !about) {
      return;
    }

    gsap.set(about, {
      yPercent: 100,
      visibility: 'visible',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `bottom bottom`,
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      })
      .to(
        hero,
        {
          scale: 0.96,
          opacity: 0.5,
          filter: 'blur(10px)',
          ease: 'none',
        },
        0
      )
      .to(
        about,
        {
          yPercent: 0,
          ease: 'none',
        },
        0
      );
  });

  return (
    <GSAPProvider>
      <Header />

      <main className="3xl:px-[4.375vw] 3xl:gap-[3.334vw] flex flex-col gap-4 px-4 md:gap-8 md:px-8 2xl:gap-16 2xl:px-21">
        <div className="hero-about-wrapper relative min-h-[200svh]">
          <HeroSection />
          <AboutMethod />
        </div>
        <Benefits />
        <Testimonials />
        <div className="bg-gradient-header 3xl:rounded-t-[2.083vw] overflow-hidden rounded-t-[1.25rem] bg-slate-950 md:rounded-t-[2.5rem]">
          <BonusCTA />
          <FAQ />
          <BrandSignature />
        </div>
      </main>

      <Footer />
    </GSAPProvider>
  );
};

export default Home;
