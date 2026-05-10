import type { CTAButtonProps } from './ctaButton.type';

const CTAButton = ({ className = '', ...props }: CTAButtonProps) => {
  return (
    <button
      type="button"
      className={`3xl:text-[1.46vw] 3xl:py-[.625vw] 3xl:px-[1.25vw] transition-default rounded-full bg-slate-300 px-6 py-3 text-xl font-medium text-slate-950 hover:bg-slate-300/75 active:scale-90 active:bg-slate-300/90 ${className} `}
      {...props}
    />
  );
};

export default CTAButton;
