import AboutMethod from './AboutMethod';
import Benefits from './Benefits';
import BonusCTA from './BonusCTA';
import BrandSignature from './BrandSignature';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <>
      <Header />

      <main className="3xl:px-[4.375vw] 3xl:gap-[3.334vw] flex flex-col gap-4 px-4 md:gap-8 md:px-8 2xl:gap-16 2xl:px-21">
        <HeroSection />
        <AboutMethod />
        <Benefits />
        <Testimonials />
        <div className="bg-gradient-header 3xl:rounded-t-[2.083vw] overflow-hidden rounded-t-[1.25rem] bg-slate-950 md:rounded-t-[2.5rem]">
          <BonusCTA />
          <FAQ />
          <BrandSignature />
        </div>
      </main>

      <Footer />
    </>
  );
}
