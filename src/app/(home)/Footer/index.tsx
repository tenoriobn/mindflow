import Link from 'next/link';
import { SOCIAL_LINK } from './socialLink';

const FOOTER_LINKS = ['Política de Privacidade', 'Termos de Uso'];

const Footer = () => {
  return (
    <footer className="3xl:px-[4.375vw] 3xl:mb-[1.667vw] mb-8 px-4 md:px-8 2xl:px-21">
      <div className="bg-gradient-header 3xl:rounded-b-[2.083vw] 3xl:rounded-tr-[2.083vw] 3xl:p-[1.667vw] flex flex-col items-center overflow-hidden rounded-tr-[1.25rem] rounded-b-[1.25rem] bg-slate-950 p-4 md:rounded-tr-[2.5rem] md:rounded-b-[2.5rem] md:p-8">
        <div className="3xl:gap-[1.667vw] flex w-full items-center justify-center gap-4 max-lg:flex-col md:gap-8 lg:justify-between">
          <nav
            aria-label="Redes sociais do MindFlow"
            className="3xl:gap-[1.667vw] flex gap-4 md:gap-8"
          >
            {SOCIAL_LINK.map(({ icon: Icon, href, ariaLabel }) => (
              <Link
                key={ariaLabel}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="transition-default opacity-75 hover:opacity-95 active:scale-90 active:opacity-100"
              >
                <Icon className="3xl:h-[2.292vw] h-11" aria-hidden="true" focusable="false" />
              </Link>
            ))}
          </nav>

          <ul className="3xl:gap-[1.667vw] flex items-center gap-2 max-md:flex-col md:gap-8">
            {FOOTER_LINKS.map((label) => (
              <li
                key={label}
                className="relative flex items-center first:before:hidden md:before:absolute md:before:top-1/2 md:before:-left-4 md:before:h-1.5 md:before:w-1.5 md:before:-translate-y-1/2 md:before:rounded-full md:before:bg-white/75"
              >
                <button
                  type="button"
                  className="3xl:text-[1.46vw] transition-default text-center text-lg font-medium text-white/75 hover:text-white/95 active:scale-90 active:text-white md:text-2xl"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

        <small className="3xl:text-[1.46vw] text-center text-lg text-white md:text-2xl">
          © 2026 MindFlow. <br className="md:hidden" /> Todos os direitos reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
