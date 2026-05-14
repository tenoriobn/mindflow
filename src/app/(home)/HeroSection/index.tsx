import './hero-section.css';
import PartnerLogoCarousel from './PartnerLogoCarousel';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-section-title"
      className="3xl:pt-[7.913vw] flex min-h-dvh w-full flex-col pt-23 md:pt-31 xl:pt-35"
    >
      <div className="hero__background before:bg-gradient-hero-section-bg-overlay 3xl:p-[1.667vw] md:rounded-r-[2.5rem 3xl:rounded-tl-[2.083vw] 3xl:rounded-r-[2.083vw] relative isolate grid flex-1 items-center overflow-hidden rounded-tl-[1.25rem] rounded-r-[1.25rem] bg-slate-950 bg-[url(/images/bg-herosection.png)] p-4 md:rounded-tl-[2.5rem] md:rounded-r-[2.5rem] md:p-8">
        <header className="grid" style={{ gridTemplateColumns: 'min-content' }}>
          <h2
            id="hero-section-title"
            className="3xl:text-[4.8vw] 3xl:mb-[1.667vw] mb-4 text-[8.8vw] font-semibold whitespace-nowrap text-white/95 md:mb-8 md:text-[4.125rem]"
          >
            Liberte sua mente.
          </h2>

          <p className="3xl:text-[1.46vw] 3xl:mb-[3.334vw] mb-8 text-[clamp(1rem,3vw,1.25rem)] font-light text-white/90 md:mb-16">
            <span className="font-medium">Descubra o Método MindFlow:</span> um treinamento online
            que combina neurociência, design e produtividade para te ajudar a ter foco e resultados,
            sem estresse e sem fórmulas mágicas.
          </p>

          <button
            type="button"
            className="bg-gradient-button-primary 3xl:text-[1.46vw] 3xl:max-w-max 3xl:px-[3.334vw] 3xl:py-[.834vw] max-w-76 rounded-full px-8 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-slate-950 active:scale-90 max-md:w-full md:px-16"
          >
            Entrar na Lista VIP
          </button>
        </header>
      </div>

      <div aria-hidden className="3xl:h-[1.667vw] 3xl:pl-[3.334vw] h-8 bg-slate-950 pl-4 md:pl-16">
        <div className="h-full w-full rounded-l-full bg-slate-300" />
      </div>

      <PartnerLogoCarousel />
    </section>
  );
};

export default HeroSection;
