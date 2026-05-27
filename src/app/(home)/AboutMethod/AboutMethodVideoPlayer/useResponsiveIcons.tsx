'use client';
import { useEffect } from 'react';

export const useResponsiveIcons = () => {
  useEffect(() => {
    const icons = document.querySelectorAll<SVGElement>('.media-icon');

    icons.forEach((icon) => {
      if (!icon.getAttribute('viewBox')) {
        const width = icon.getAttribute('width');
        const height = icon.getAttribute('height');

        if (width && height) {
          icon.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
      }

      icon.removeAttribute('width');
      icon.removeAttribute('height');
    });
  }, []);
};
