import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import DiamondIcon from 'public/icons/diamond.svg';
import Image from 'next/image';
import './bonus-cta.css';

const BonusCTA = () => {
  return (
    <section
      id="bonus-cta"
      aria-labelledby="bonus-cta-title"
      className="bg-gradient-header 3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] 3xl:rounded-bl-none flex min-h-dvh gap-4 rounded-[1.25rem] rounded-br-none bg-slate-950 p-4 max-xl:flex-col md:gap-8 md:rounded-[2.5rem] md:p-8 md:max-xl:rounded-br-none lg:grid lg:grid-cols-2 lg:items-center xl:rounded-bl-none"
    >
      <div className="flex flex-col lg:order-2">
        <SectionTitle
          id="bonus-cta-title"
          className="text-white/95 max-lg:mx-auto max-lg:max-w-160 lg:text-left"
        >
          Entre para a lista VIP e garanta um bônus exclusivo
        </SectionTitle>

        <SectionDescription
          id="bonus-cta-description"
          className="text-white/90 max-lg:mx-auto max-lg:max-w-160 max-lg:text-center"
        >
          Ao se inscrever, você recebe: Acesso antecipado ao lançamento, Desconto exclusivo, E-book
          &apos;Rotina com Clareza&apos;.
        </SectionDescription>

        <button
          type="button"
          aria-describedby="bonus-cta-description"
          className="bg-gradient-button-secondary 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 active:scale-90 max-lg:self-center md:max-w-max md:px-16"
        >
          <DiamondIcon
            aria-hidden="true"
            className="animate-spin-slow 3xl:h-[1.771vw] h-5 md:h-6"
          />
          <span>Quero entrar na lista VIP</span>
        </button>
      </div>

      <Image
        src="/images/vip-list-card.png"
        alt="Mulher sorrindo enquanto usa um tablet em um ambiente confortável"
        width={1440}
        height={1381}
        className="3xl:rounded-[2.083vw] aspect-3/1 h-full w-full rounded-[1.25rem] object-cover max-xl:flex-1 md:min-h-105 md:rounded-[2.5rem] lg:order-1"
      />
    </section>
  );
};

export default BonusCTA;
