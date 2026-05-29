import type { LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export type CTAButtonProps = Omit<LinkProps, 'href'> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
  };
