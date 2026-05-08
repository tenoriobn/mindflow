'use client';
import { partnerLogos } from './logos';
import { useMotionTicker } from './useMotionTicker';

const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

const PartnerLogoCarousel = () => {
  const { trackRef, handleMouseEnter, handleMouseLeave } = useMotionTicker(40);

  return (
    <div className="bg-gradient-carousel w-full rounded-r-[1.25rem] rounded-bl-[1.25rem] bg-slate-950 p-4 md:rounded-r-[2.5rem] md:rounded-bl-[2.5rem] md:p-8">
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, #1d1e2c 8%, #1d1e2c 92%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, #1d1e2c 8%, #1d1e2c 92%, transparent 100%)',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="3xl:gap-16 flex w-max items-center gap-4 md:gap-8"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          {duplicatedLogos.map(({ name, Logo }, index) => (
            <div key={`${name}-${index}`} className="flex shrink-0 items-center justify-center">
              <Logo className="3xl:h-12 h-10 w-auto" aria-label={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoCarousel;
