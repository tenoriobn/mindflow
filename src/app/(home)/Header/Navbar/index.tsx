import Link from 'next/link';
import { MENU_LINKS } from './menuLinks';
import CloseIcon from 'public/icons/close.svg';
import type { NavbarProps } from './navbar.type';
import Logo from '../Logo';
import CTAButton from '../CTAButton';
import MenuToggleButton from '../MenuToggleButton';

const Navbar = ({ isMenuActive, setIsMenuActive }: NavbarProps) => {
  const activeHref = MENU_LINKS[0].href;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={() => setIsMenuActive(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity xl:hidden ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'} `}
      />

      <nav
        id="primary-navigation"
        aria-label="Navegação principal"
        className={`max-xl:bg-gradient-header max-xl:fixed max-xl:top-0 max-xl:right-0 max-xl:z-50 max-xl:grid max-xl:h-dvh max-xl:grid-rows-[3.75rem_1fr_3.75rem] max-xl:gap-16 max-xl:overflow-auto max-xl:bg-slate-950 max-xl:p-4 max-xl:transition-transform max-xl:duration-300 max-sm:w-full sm:max-md:w-[20rem] md:max-xl:p-8 md:max-lg:w-93 lg:max-xl:w-133 ${isMenuActive ? 'max-xl:translate-x-0' : 'max-xl:translate-x-full'} `}
      >
        <div className="flex items-center justify-between gap-4 rounded-full border border-slate-300/5 p-3 pl-4 md:gap-8 xl:hidden">
          <Logo />

          <MenuToggleButton
            icon={CloseIcon}
            aria-label="Fechar menu de navegação"
            aria-controls="primary-navigation"
            aria-expanded={isMenuActive}
            onClick={() => setIsMenuActive(false)}
          />
        </div>

        <ul className="flex items-center justify-center gap-4 max-xl:flex-col md:gap-8">
          {MENU_LINKS.map(({ label, href }) => {
            const isActive = activeHref === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMenuActive(false)}
                  className={`transition-default 3xl:text-[1.75rem] inline-block text-xl ${isActive ? 'font-medium text-white/95' : 'text-white/50 hover:text-white/75 active:scale-90 active:text-white/90'} `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <CTAButton aria-label="Começar agora" className="self-end justify-self-center xl:hidden">
          Começar agora
        </CTAButton>
      </nav>
    </>
  );
};

export default Navbar;
