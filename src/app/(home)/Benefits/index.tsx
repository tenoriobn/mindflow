import SectionTitle from 'src/components/SectionTitle';
import PlantIcon from 'public/icons/plant.svg';

const articleBase = '3xl:min-h-[19.584vw] min-h-60 md:min-h-66 2xl:min-h-94';

const articleBaseDark =
  'bg-gradient-header 3xl:gap-[1.667vw] 3xl:rounded-[2.083vw] relative flex flex-col justify-end gap-4 overflow-hidden rounded-[1.25rem] bg-slate-950 p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const articleBaseLight = 'lg:relative lg:bg-slate-950';

const articleOverlayBase = 'lg:absolute lg:h-full lg:w-full';

const backgroundCardBase = 'bg-cover bg-top';

const contentBase =
  '3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] relative flex h-full flex-col justify-end gap-4 rounded-[1.25rem] p-4 md:gap-8 md:rounded-[2.5rem] md:p-8';

const titleBase = '3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl';

const descriptionBase = '3xl:text-[1.46vw] text-base text-white/75 md:text-xl';

const Benefits = () => {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-title"
      className="3xl:pt-[1.667vw] pt-4 md:pt-8"
    >
      <SectionTitle id="benefits-title" className="text-slate-950">
        O que você vai conquistar
      </SectionTitle>

      <div className="grid max-md:gap-4 md:max-lg:gap-8 lg:grid-cols-2">
        <article
          className={`${articleBase} ${articleBaseLight} 3xl:pr-[1.667vw] 3xl:pb-[1.667vw] lg:pr-8 lg:pb-8`}
        >
          <div
            className={`${articleOverlayBase} 3xl:rounded-br-[2.083vw] lg:rounded-br-[2.5rem] lg:bg-slate-300`}
          />

          <div
            className={`${contentBase} ${backgroundCardBase} bg-[image:var(--background-image-gradient-card),url('/images/focus-card.png')]`}
          >
            <h3 className={titleBase}>Mais foco, menos distração</h3>

            <p className={descriptionBase}>
              Treine sua mente para trabalhar com clareza, eliminando ruídos e direcionando atenção
              para o essencial.
            </p>
          </div>
        </article>

        <article
          className={`${articleBase} ${articleBaseDark} 3xl:rounded-bl-none 3xl:p-[1.667vw] 3xl:pb-[3.334vw] 3xl:ps-[3.334vw] lg:rounded-bl-none lg:ps-16 lg:pb-16`}
        >
          <PlantIcon
            aria-hidden="true"
            focusable="false"
            className="xs:h-19 3xl:h-[7.292vw] 3xl:right-[.625vw] 3xl:top-[-.417vw] absolute -top-2 right-3 h-16 rotate-194 opacity-12 2xl:h-35"
          />

          <h3 className={titleBase}>Clareza mental</h3>

          <p className={descriptionBase}>
            Entenda seus padrões, organize seus pensamentos e tome decisões com leveza e
            consciência.
          </p>
        </article>

        <article
          className={`${articleBase} ${articleBaseDark} 3xl:rounded-tr-none 3xl:p-[1.667vw] lg:rounded-tr-none`}
        >
          <PlantIcon
            className="xs:h-19 3xl:h-[7.292vw] absolute top-1 left-0 h-16 rotate-104 opacity-12 2xl:h-35"
            aria-hidden="true"
            focusable="false"
          />

          <h3 className={titleBase}>Equilíbrio emocional</h3>

          <p className={descriptionBase}>
            Encontre o ponto entre o fazer e o sentir, reduzindo o estresse e recuperando o controle
            da sua energia.
          </p>
        </article>

        <article
          className={`${articleBase} ${articleBaseLight} 3xl:pt-[1.667vw] 3xl:pl-[1.667vw] lg:pt-8 lg:pl-8`}
        >
          <div
            className={`${articleOverlayBase} 3xl:rounded-tl-[2.083vw] top-0 left-0 lg:rounded-tl-[2.5rem] lg:bg-slate-300`}
          />

          <div
            className={`${contentBase} ${backgroundCardBase} bg-[image:var(--background-image-gradient-card),url('/images/productivity-card.png')]`}
          >
            <h3 className={titleBase}>Produtividade com propósito</h3>

            <p className={descriptionBase}>
              Aumente seu desempenho sem sobrecarga, trabalhando com equilíbrio, foco e satisfação.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Benefits;
