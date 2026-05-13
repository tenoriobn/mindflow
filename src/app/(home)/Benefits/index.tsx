import SectionTitle from 'src/components/SectionTitle';
import PlantIcon from 'public/icons/plant.svg';

const listBase = '3xl:min-h-[19.584vw] min-h-60 md:min-h-66 lg:min-h-94';

const listBaseDark =
  'bg-gradient-header 3xl:gap-[1.667vw] 3xl:rounded-[2.083vw] relative flex flex-col justify-end gap-4 overflow-hidden rounded-[1.25rem] bg-slate-950 p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const listBaseLight = 'lg:relative lg:bg-slate-950';

const framedArticleContentBase = 'h-full lg:bg-slate-300 ';

const backgroundCardBase = 'bg-cover bg-top';

const contentBase =
  '3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] relative flex h-full flex-col justify-end gap-4 rounded-[1.25rem] p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const titleBase = '3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl';

const descriptionBase = '3xl:text-[1.46vw] text-base text-white/75 md:text-xl';

const benefits = [
  {
    title: 'Mais foco, menos distração',
    description:
      'Treine sua mente para trabalhar com clareza, eliminando ruídos e direcionando atenção para o essencial.',
    variant: 'image',
    image: '/images/focus-card.png',
    articleClass:
      '3xl:rounded-br-[2.083vw] 3xl:pr-[1.667vw] 3xl:pb-[1.667vw] lg:rounded-br-[2.5rem] lg:pr-8 lg:pb-8',
  },
  {
    title: 'Clareza mental',
    description:
      'Entenda seus padrões, organize seus pensamentos e tome decisões com leveza e consciência.',
    variant: 'dark',
    itemClass:
      '3xl:rounded-bl-none 3xl:p-[1.667vw] 3xl:pb-[3.334vw] 3xl:ps-[3.334vw] lg:rounded-bl-none lg:ps-16 lg:pb-16',
    iconClass:
      'xs:h-19 3xl:h-[7.292vw] 3xl:right-[.625vw] 3xl:top-[-.417vw] absolute -top-2 right-3 h-16 rotate-194 opacity-12 2xl:h-35',
  },
  {
    title: 'Equilíbrio emocional',
    description:
      'Encontre o ponto entre o fazer e o sentir, reduzindo o estresse e recuperando o controle da sua energia.',
    variant: 'dark',
    itemClass: '3xl:rounded-tr-none 3xl:p-[1.667vw] lg:rounded-tr-none',
    iconClass: 'xs:h-19 3xl:h-[7.292vw] absolute top-1 left-0 h-16 rotate-104 opacity-12 2xl:h-35',
  },
  {
    title: 'Produtividade com propósito',
    description:
      'Aumente seu desempenho sem sobrecarga, trabalhando com equilíbrio, foco e satisfação.',
    variant: 'image',
    image: '/images/productivity-card.png',
    articleClass:
      '3xl:rounded-tl-[2.083vw] 3xl:pt-[1.667vw] 3xl:pl-[1.667vw] lg:rounded-tl-[2.5rem] lg:pt-8 lg:pl-8',
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="flex min-h-dvh flex-col">
      <SectionTitle id="benefits-title" className="text-slate-950">
        O que você vai conquistar
      </SectionTitle>

      <ul className="grid flex-1 max-md:gap-4 md:max-lg:gap-8 lg:grid-cols-2">
        {benefits.map((benefit) => {
          const isImageCard = benefit.variant === 'image';

          return (
            <li
              key={benefit.title}
              className={`${listBase} ${
                isImageCard ? listBaseLight : `${listBaseDark} ${benefit.itemClass}`
              }`}
            >
              <article
                className={
                  isImageCard
                    ? `${framedArticleContentBase} ${benefit.articleClass}`
                    : '3xl:gap-[1.667vw] flex flex-col gap-4 md:gap-8'
                }
              >
                {isImageCard ? (
                  <div
                    className={`${contentBase} ${backgroundCardBase}`}
                    style={{
                      backgroundImage: `var(--background-image-gradient-card), url(${benefit.image})`,
                    }}
                  >
                    <h3 className={titleBase}>{benefit.title}</h3>

                    <p className={descriptionBase}>{benefit.description}</p>
                  </div>
                ) : (
                  <>
                    <PlantIcon aria-hidden="true" focusable="false" className={benefit.iconClass} />

                    <h3 className={titleBase}>{benefit.title}</h3>

                    <p className={descriptionBase}>{benefit.description}</p>
                  </>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Benefits;
