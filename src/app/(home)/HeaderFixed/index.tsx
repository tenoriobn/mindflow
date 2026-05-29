'use client';
import MenuIcon from 'public/icons/menu.svg';
import CloseIcon from 'public/icons/close.svg';
import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from 'src/lib/gsap';
import MenuToggleButton from '../Header/MenuToggleButton';
import Navbar from '../Header/Navbar';

const HeaderFixed = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mainHeader = document.querySelector('.main-header');

    if (!mainHeader) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: mainHeader,

      start: 'bottom top',

      onEnter: () => {
        setIsVisible(true);
      },

      onLeaveBack: () => {
        setIsVisible(false);
      },
    });

    return () => {
      trigger.kill();
    };
  });

  useGSAP(
    () => {
      if (!isVisible) {
        return;
      }

      const header = headerRef.current;

      if (!header) {
        return;
      }

      gsap.fromTo(
        header,
        {
          autoAlpha: 0,
          y: -24,
        },
        {
          autoAlpha: 1,
          y: 0,

          duration: 0.45,
          ease: 'power3.out',
        }
      );
    },
    {
      dependencies: [isVisible],
      scope: headerRef,
    }
  );

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {isMenuActive && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuActive(false)}
        />
      )}

      <div
        ref={headerRef}
        className="3xl:right-[4.375vw] 3xl:top-[1.667vw] fixed top-4 right-4 isolate z-50 rounded-full shadow-lg/35 md:top-8 md:right-8 2xl:right-21"
      >
        <div className="3xl:p-[.834vw] relative flex items-center justify-center rounded-full bg-[rgba(46,46,76,0.87)] p-3 md:p-4">
          <MenuToggleButton
            isMenuActive={isMenuActive}
            Icon={isMenuActive ? CloseIcon : MenuIcon}
            iconClassName={isMenuActive ? 'h-3.5 3xl:h-[.73vw]' : 'h-3 3xl:h-[.625vw]'}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuActive}
            onClick={() => setIsMenuActive((prev) => !prev)}
            className="3xl:h-[1.875vw] 3xl:w-[1.875vw]"
          />

          <Navbar
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
            variant="dropdown"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderFixed;
