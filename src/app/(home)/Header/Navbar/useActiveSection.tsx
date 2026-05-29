'use client';
import { useEffect, useState } from 'react';
import type { SectionLink } from './navbar.type';

export const useActiveSection = (links: readonly SectionLink[]) => {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? '');

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.replace('#', '')))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const sectionId = visibleEntries[0].target.id;

        setActiveHref(`#${sectionId}`);
      },
      {
        root: null,

        rootMargin: '-20% 0px -40% 0px',

        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return activeHref;
};
