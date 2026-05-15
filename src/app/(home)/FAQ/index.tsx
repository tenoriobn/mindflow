import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';
import WhatsappIcon from 'public/icons/whatsapp.svg';
import './faq.css';

const FAQ = () => {
  return (
    <section
      id="bonus-cta"
      aria-labelledby="bonus-cta-title"
      className="flex min-h-dvh max-xl:flex-col lg:grid lg:grid-cols-2 lg:items-center"
    >
      <div className="faq-wrapper 3xl:p-[1.667vw] flex h-full flex-col justify-center p-4 md:p-8">
        <SectionTitle
          id="bonus-cta-title"
          className="text-white/95 max-lg:mx-auto max-lg:max-w-160 lg:text-left"
        >
          Dúvidas frequentes
        </SectionTitle>

        <SectionDescription
          id="bonus-cta-description"
          className="text-white/90 max-lg:mx-auto max-lg:max-w-160 max-lg:text-center"
        >
          Não encontrou o que procurava? Tire suas dúvidas com a gente e descubra como o MindFlow
          pode transformar sua rotina.
        </SectionDescription>

        <button
          type="button"
          aria-describedby="bonus-cta-description"
          className="bg-gradient-button-whatsapp 3xl:text-[1.46vw] 3xl:px-[3.334vw] 3xl:py-[.834vw] xs:px-8 3xl:gap-[.625vw] flex items-center justify-center gap-3 rounded-full px-4 py-4 text-[clamp(1rem,3vw,1.25rem)] font-medium text-white/95 active:scale-90 max-lg:self-center md:max-w-max md:px-16"
        >
          <WhatsappIcon
            aria-hidden="true"
            className="animate-spin-slow 3xl:h-[1.771vw] h-5 md:h-6"
          />
          <span>Perguntar no Whatsapp</span>
        </button>
      </div>

      <div className="flex h-full w-full flex-1 pl-4 md:pl-8 lg:pl-0">
        <div className="3xl:p-[1.667vw] 3xl:rounded-tl-[2.083vw] flex-1 rounded-tl-[1.25rem] bg-slate-300 p-4 md:rounded-tl-[2.5rem] md:p-8" />
      </div>
    </section>
  );
};

export default FAQ;
