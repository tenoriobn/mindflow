'use client';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'src/lib';
import type { GSAPProviderProps } from './gsapProvider.type';

const GSAPProvider = ({ children }: GSAPProviderProps) => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',

      smooth: 1.2,
      effects: true,

      smoothTouch: 0.1,
      normalizeScroll: true,
    });

    return () => {
      ScrollSmoother.get()?.kill();
    };
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default GSAPProvider;
