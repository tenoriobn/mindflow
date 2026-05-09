import Link from 'next/link';
import LogoIcon from 'public/icons/logo.svg';

const Logo = () => {
  return (
    <Link className="3xl:w-[10.157vw] w-30.75" href="/">
      <LogoIcon aria-hidden="true" focusable="false" />
      <span className="sr-only">Mindflow — voltar para a página inicial</span>
    </Link>
  );
};

export default Logo;
