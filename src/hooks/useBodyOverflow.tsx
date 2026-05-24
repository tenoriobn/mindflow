'use client';

import { useEffect } from 'react';
import { ScrollSmoother } from 'src/lib/gsap';

export function useBodyOverflow(shouldHide: boolean) {
  useEffect(() => {
    const smoother = ScrollSmoother.get();

    const html = document.documentElement;
    const body = document.body;

    if (shouldHide) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';

      smoother?.paused(true);
    } else {
      html.style.overflow = '';
      body.style.overflow = '';

      smoother?.paused(false);
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';

      smoother?.paused(false);
    };
  }, [shouldHide]);
}
