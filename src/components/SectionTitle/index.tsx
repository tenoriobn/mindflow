import type { SectionTitleProps } from './sectionTitle.type';

const SectionTitle = ({ className = '', children, ...props }: SectionTitleProps) => {
  return (
    <h2
      className={`3xl:text-[2.5vw] 3xl:mb-[1.667vw] mb-4 text-center text-[clamp(1.5rem,5.21vw,2.5rem)] font-semibold md:mb-8 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
