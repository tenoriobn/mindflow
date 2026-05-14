'use client';
import { partnerLogos } from './logos';
import './partner-carousel.css';

const PartnerLogoCarousel = () => {
  return (
    <section
      aria-label="Marcas parceiras"
      className="bg-gradient-carousel 3xl:p-[1.667vw] 3xl:rounded-r-[2.083vw] 3xl:rounded-bl-[2.083vw] w-full rounded-r-[1.25rem] rounded-bl-[1.25rem] bg-slate-950 p-4 md:rounded-r-[2.5rem] md:rounded-bl-[2.5rem] md:p-8"
    >
      <div aria-hidden="true" className="partner-mask overflow-hidden">
        <div className="partner-track 3xl:gap-[3.334vw] flex w-max items-center gap-4 md:gap-8">
          {[...partnerLogos, ...partnerLogos].map(({ name, Logo }, index) => (
            <div key={`${name}-${index}`} className="flex shrink-0 items-center justify-center">
              <Logo className="3xl:h-[2.5vw] h-10 w-auto" aria-hidden="true" focusable="false" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogoCarousel;
