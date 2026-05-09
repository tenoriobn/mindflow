import Header from './Header';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-4 md:px-8 2xl:px-21">
        <HeroSection />
      </main>

      <footer className="bg-green-500">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
