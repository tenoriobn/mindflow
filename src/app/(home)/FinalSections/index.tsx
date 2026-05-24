'use client';
import BonusCTA from './BonusCTA';
import BrandSignature from './BrandSignature';
import FAQ from './FAQ';

const FinalSections = () => {
  return (
    <div className="final-section bg-gradient-header 3xl:rounded-t-[2.083vw] relative z-20 overflow-hidden rounded-t-[1.25rem] bg-slate-950 will-change-transform md:rounded-t-[2.5rem]">
      <BonusCTA />
      <FAQ />
      <BrandSignature />
    </div>
  );
};

export default FinalSections;
