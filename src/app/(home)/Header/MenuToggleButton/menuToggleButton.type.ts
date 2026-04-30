import type { ButtonHTMLAttributes, ElementType } from 'react';

export type MenuToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ElementType;
};
