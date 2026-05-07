'use client';
import MenuIcon from 'public/icons/menu.svg';
import { useMenuMobile } from './useMenuMobile';
import Navbar from './Navbar';
import Logo from './Logo';
import CTAButton from './CTAButton';
import MenuToggleButton from './MenuToggleButton';

const Header = () => {
  const { isMenuActive, setIsMenuActive } = useMenuMobile();

  return (
    <header className="px-4 pt-4 md:px-8 md:pt-8 2xl:px-21">
      <div className="bg-gradient-header flex items-center justify-between gap-4 rounded-full bg-slate-950 p-3 pl-4 md:gap-8 md:pl-8 xl:grid xl:grid-cols-[1fr_auto_1fr]">
        <Logo />

        <MenuToggleButton
          icon={MenuIcon}
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuActive}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuActive(true)}
          className="xl:hidden"
        />

        <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

        <CTAButton aria-label="Começar agora" className="hidden justify-self-end xl:block">
          Começar agora
        </CTAButton>
      </div>
    </header>
  );
};

export default Header;
