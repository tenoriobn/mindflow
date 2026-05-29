'use client';
import { useRef } from 'react';
import { useGSAP, gsap } from 'src/lib/gsap';
import type { MenuToggleButtonProps } from './menuToggleButton.type';

const MenuToggleButton = ({
  Icon,
  className = '',
  iconClassName = '',
  isMenuActive,
  ...props
}: MenuToggleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const icon = buttonRef.current?.querySelector('.menu-toggle-icon');
      if (!icon) {
        return;
      }

      gsap.fromTo(
        icon,
        { rotate: -90, scale: 0.7 },
        { rotate: 0, scale: 1, duration: 0.4, ease: 'back.out(2.2)' }
      );
    },
    { dependencies: [isMenuActive], scope: buttonRef }
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-controls="primary-navigation"
      className={`transition-default flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 text-slate-950 hover:bg-slate-300/75 active:scale-90 active:bg-slate-300/90 ${className}`}
      {...props}
    >
      <span className="menu-toggle-icon flex items-center justify-center">
        <Icon aria-hidden="true" focusable="false" className={iconClassName} />
      </span>
    </button>
  );
};

export default MenuToggleButton;
