import Header from './Header';
import HeroSection from './HeroSection';
import AboutMethod from './AboutMethod';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import BonusCTA from './BonusCTA';
import FAQ from './FAQ';
import BrandSignature from './BrandSignature';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="3xl:px-[4.375vw] px-4 md:px-8 2xl:px-21">
        <HeroSection />

        <div className="3xl:gap-[3.334vw] flex flex-col gap-4 md:gap-8 2xl:gap-16">
          <AboutMethod />
          <Benefits />
          <Testimonials />

          <div className="final-section bg-gradient-header 3xl:rounded-t-[2.083vw] relative z-20 rounded-t-[1.25rem] rounded-br-[2.5rem] bg-slate-950 will-change-transform md:rounded-t-[2.5rem]">
            <BonusCTA />
            <FAQ />
            <BrandSignature />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
