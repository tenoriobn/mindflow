import Header from './Header';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-1 p-4 md:p-8 2xl:px-21 2xl:py-8">
        <HeroSection />
      </main>

      <footer className="bg-green-500">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
