import { MENU_LINKS } from './menuLinks';
import type { NavbarProps } from './navbar.type';
import CTAButton from '../CTAButton';
import { useEffect, useRef } from 'react';
import { useGSAP, gsap } from 'src/lib/gsap';

const Navbar = ({ isMenuActive, setIsMenuActive, variant = 'inline' }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const activeHref = MENU_LINKS[0].href;

  const isDropdownOnly = variant === 'dropdown';

  const handleScrollToSection = (href: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: href, offsetY: 0 },
      ease: 'power3.inOut',
    });
    setIsMenuActive(false);
  };

  useGSAP(() => {
    const setupAnimation = () => {
      const nav = navRef.current;
      if (!nav) {
        return;
      }

      const menuItems = nav.querySelectorAll('li');

      gsap.set(nav, {
        y: -12,
        scale: 0.96,
        transformOrigin: 'top right',
        force3D: true,
        backfaceVisibility: 'hidden',
      });

      gsap.set(menuItems, { opacity: 0, y: -8 });

      const tl = gsap.timeline({ paused: true });

      tl.to(nav, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        pointerEvents: 'auto',
        duration: 0.55,
        ease: 'elastic.out(1, 0.75)',
      }).to(
        menuItems,
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.3, ease: 'power2.out' },
        0.08
      );

      timelineRef.current = tl;
    };

    if (isDropdownOnly) {
      setupAnimation();
    } else {
      const mm = gsap.matchMedia();
      mm.add('(max-width: 1279px)', setupAnimation);
      return () => mm.revert();
    }
  }, []);

  useEffect(() => {
    const tl = timelineRef.current;

    if (!tl) {
      return;
    }

    if (isMenuActive) {
      tl.timeScale(1).play();
    } else {
      tl.timeScale(2.2).reverse();
    }
  }, [isMenuActive]);

  const navClassName = isDropdownOnly
    ? `bg-gradient-header 3xl:rounded-[2.083vw] pointer-events-none invisible absolute 
       top-19 right-0 z-50 flex w-max overflow-auto rounded-[1.25rem] bg-slate-950 p-4 
       opacity-0 shadow-lg/35 max-md:top-17 md:rounded-[2.5rem] md:p-8`
    : `max-xl:bg-gradient-header 3xl:rounded-[2.083vw] w-max rounded-[1.25rem] 
       max-xl:pointer-events-none max-xl:invisible max-xl:absolute max-xl:top-19 max-xl:right-0 
       max-xl:z-50 max-xl:flex max-xl:overflow-auto max-xl:bg-slate-950 max-xl:p-4 
       max-xl:opacity-0 max-xl:shadow-lg/35 max-md:top-17 md:rounded-[2.5rem] md:max-xl:p-8`;

  const listClassName = isDropdownOnly
    ? `3xl:gap-[1.667vw] flex flex-col items-center justify-center gap-4 md:gap-8`
    : `3xl:gap-[1.667vw] flex items-center justify-center gap-4 max-xl:flex-col md:gap-8`;

  return (
    <>
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setIsMenuActive(false)}
        className={`fixed inset-0 transition-opacity duration-300 ${isDropdownOnly ? '' : 'xl:hidden'} ${isMenuActive ? 'visible opacity-100' : 'invisible hidden opacity-0'}`}
      />

      <nav
        ref={navRef}
        id="primary-navigation"
        aria-label="Navegação principal"
        className={navClassName}
      >
        <ul className={listClassName}>
          {MENU_LINKS.map(({ label, href }) => {
            const isActive = activeHref === href;
            return (
              <li key={href}>
                <button
                  type="button"
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleScrollToSection(href)}
                  className={`transition-default 3xl:text-[1.46vw] inline-block text-[clamp(1rem,3vw,1.25rem)] ${
                    isActive
                      ? 'font-medium text-white/95'
                      : 'text-white/50 hover:text-white/75 active:scale-90 active:text-white/90'
                  }`}
                >
                  {label}
                </button>
              </li>
            );
          })}

          <li>
            <CTAButton
              className={`self-end justify-self-center ${!isDropdownOnly ? 'xl:hidden' : ''}`}
            >
              Começar agora
            </CTAButton>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
