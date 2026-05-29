import type { Dispatch, SetStateAction } from 'react';

export interface NavbarProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
  variant?: 'inline' | 'dropdown';
}

export interface SectionLink {
  href: string;
}
