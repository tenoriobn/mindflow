import Image from 'next/image';
import SectionTitle from 'src/components/SectionTitle';
import { testimonialsData } from './testimonialsData';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="flex min-h-dvh flex-col overflow-hidden max-md:max-h-152 md:max-h-dvh"
    >
      <SectionTitle id="testimonials-title" className="text-slate-950">
        O que nossos alunos dizem
      </SectionTitle>

      <div className="3xl:gap-[1.667vw] grid flex-1 grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {[0, 1, 2].map((column) => {
          const items = testimonialsData.filter((_, index) => index % 3 === column);

          return (
            <div
              key={column}
              className={`testimonials-mask relative overflow-hidden ${column === 1 ? 'hidden md:block' : ''} ${column === 2 ? 'hidden xl:block' : ''} `}
            >
              <ul
                className={`3xl:gap-[1.667vw] flex flex-col gap-4 will-change-transform md:gap-8 ${
                  column === 1 ? 'animate-testimonials-reverse' : 'animate-testimonials'
                }`}
              >
                {[...items, ...items].map(({ id, quote, name, avatar, handle }, index) => (
                  <li key={`${id}-${index}`}>
                    <article className="3xl:rounded-[2.083vw] 3xl:p-[1.667vw] 3xl:gap-[1.667vw] transition-default flex flex-col gap-8 rounded-[1.25rem] bg-slate-200/80 p-4 text-slate-950/45 select-none hover:bg-slate-950 hover:text-white/95 md:rounded-[2.5rem] md:p-8">
                      <blockquote>
                        <p className="3xl:text-[1.46vw] text-xl font-medium italic md:text-2xl">
                          {quote}
                        </p>
                      </blockquote>

                      <footer className="3xl:gap-[0.834vw] flex items-center gap-4">
                        <Image
                          width={80}
                          height={80}
                          src={avatar}
                          alt={`Foto de perfil de ${name}`}
                          className="3xl:w-[4.271vw] 3xl:h-[4.271vw] h-16 w-16 rounded-full md:h-20 md:w-20"
                        />

                        <div className="3xl:gap-[.0105vw] flex flex-col gap-0.5">
                          <cite className="3xl:text-[1.25vw] text-lg font-semibold not-italic md:text-xl">
                            {name}
                          </cite>

                          <p className="3xl:text-[1.042vw] text-sm md:text-base">{handle}</p>
                        </div>
                      </footer>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
