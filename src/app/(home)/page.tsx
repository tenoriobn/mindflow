import AboutMethod from './AboutMethod';
import Benefits from './Benefits';
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
      </main>

      <footer className="bg-green-500">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
