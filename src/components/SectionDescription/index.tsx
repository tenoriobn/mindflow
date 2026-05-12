import type { SectionDescriptionProps } from './sectionDescription.type';

const SectionDescription = ({ className = '', children, ...props }: SectionDescriptionProps) => {
  return (
    <p
      className={`3xl:text-[1.46vw] 3xl:mb-[1.667vw] mb-4 text-[clamp(1rem,3vw,1.25rem)] font-light md:mb-8 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
