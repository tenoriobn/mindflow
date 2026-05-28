'use client';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'src/hooks';

export function useMenuMobile() {
  const { isMobile } = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (!isMobile && isMenuActive) {
      setIsMenuActive(false);
    }
  }, [isMobile, isMenuActive]);

  return {
    isMobile,
    isMenuActive,
    setIsMenuActive,
  };
}
