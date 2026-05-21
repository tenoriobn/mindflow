import { useEffect } from 'react';
import type { UseEscapeKeyProps } from './baseModal.type';

export const useEscapeKey = ({ isEnabled, onClose }: UseEscapeKeyProps) => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEnabled, onClose]);
};
