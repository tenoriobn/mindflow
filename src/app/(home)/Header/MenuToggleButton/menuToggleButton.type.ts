import type { ButtonHTMLAttributes, FC, SVGProps } from 'react';

export type MenuToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: FC<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  isMenuActive: boolean;
  className?: string;
};
