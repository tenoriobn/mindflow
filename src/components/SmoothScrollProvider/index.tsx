'use client';
import { useRef } from 'react';
import { useGSAP, ScrollSmoother } from 'src/lib/gsap';

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,

        smooth: 2.5,
        effects: true,

        smoothTouch: 0.1,

        normalizeScroll: true,

        ignoreMobileResize: true,
      });

      return () => {
        smoother.kill();
      };
    },
    {
      scope: wrapperRef,
    }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
