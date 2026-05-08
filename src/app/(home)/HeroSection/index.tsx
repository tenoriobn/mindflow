import './hero-section.css';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-section-title"
      className="hero__background before:bg-gradient-hero-section-bg-overlay relative isolate h-max w-full overflow-hidden rounded-tl-[1.25rem] rounded-r-[1.25rem] bg-slate-950 bg-[url(/images/bg-herosection.png)] p-4 md:rounded-tl-[2.5rem] md:rounded-r-[2.5rem] md:px-8 md:py-36"
    >
      <div className="grid" style={{ gridTemplateColumns: 'min-content' }}>
        <h2
          id="hero-section-title"
          className="3xl:text-[5.75rem] mb-4 text-[1.75rem] font-semibold whitespace-nowrap text-white/95 md:mb-8 md:text-[4rem]"
        >
          Liberte sua mente.
        </h2>

        <p className="3xl:text-[1.75rem] mb-8 text-base font-light text-white/90 md:mb-16 md:text-xl">
          <span className="font-medium">Descubra o Método MindFlow:</span> um treinamento online que
          combina neurociência, design e produtividade para te ajudar a ter foco e resultados, sem
          estresse e sem fórmulas mágicas.
        </p>

        <button
          type="button"
          aria-label="Entrar na Lista VIP"
          className="bg-gradient-button-primary 3xl:text-[1.75rem] max-w-76 rounded-full px-8 py-4 text-base font-medium text-slate-950 active:scale-90 max-md:w-full md:px-16 md:text-xl"
        >
          Entrar na Lista VIP
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
