import Link from 'next/link';
import type { CTAButtonProps } from './ctaButton.type';

const CTALink = ({ className = '', ...props }: CTAButtonProps) => {
  return (
    <Link
      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Método%20MindFlow%20e%20como%20ele%20pode%20me%20ajudar%20a%20ter%20mais%20foco%20e%20clareza%20mental."
      target="_blank"
      rel="noopener noreferrer"
      className={`3xl:text-[1.042vw] 3xl:py-[.625vw] 3xl:px-[1.25vw] transition-default rounded-full bg-slate-300/75 px-6 py-3 text-[clamp(1rem,3vw,1.25rem)] font-medium text-slate-950 hover:bg-slate-300/90 active:scale-90 active:bg-slate-300 ${className}`}
      {...props}
    />
  );
};

export default CTALink;
