import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

const VIEWPORT_PADDING = 32;

const easeInOutCubic = (progress: number) =>
  progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

export function useSmoothCenterScroll(
  activeId: number | null,
  itemRefs: RefObject<Record<number, HTMLElement | null>>,
  panelRefs: RefObject<Record<number, HTMLDivElement | null>>,
  userInteractedRef: RefObject<boolean>,
  duration = 300
) {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!userInteractedRef.current || activeId === null || !document.hasFocus()) {
      return;
    }

    const panel = panelRefs.current[activeId];

    if (!panel) {
      return;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== panel) {
        return;
      }

      const element = itemRefs.current[activeId];

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();

      let targetScroll = window.scrollY;

      if (rect.bottom > window.innerHeight - VIEWPORT_PADDING) {
        targetScroll += rect.bottom - window.innerHeight + VIEWPORT_PADDING;
      }

      if (rect.top < VIEWPORT_PADDING) {
        targetScroll += rect.top - VIEWPORT_PADDING;
      }

      const start = window.scrollY;
      const distance = targetScroll - start;

      if (Math.abs(distance) < 5) {
        return;
      }

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);

        window.scrollTo(0, start + distance * easeInOutCubic(progress));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    panel.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      panel.removeEventListener('transitionend', handleTransitionEnd);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeId, duration, itemRefs, panelRefs, userInteractedRef]);
}
