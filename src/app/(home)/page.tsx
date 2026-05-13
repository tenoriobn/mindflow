import AboutMethod from './AboutMethod';
import Benefits from './Benefits';
import Header from './Header';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <>
      <Header />

      <main className="3xl:px-[3.2813vw] px-4 md:px-8 2xl:px-21">
        <HeroSection />
        <AboutMethod />
        <Benefits />
      </main>

      <footer className="bg-green-500">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
