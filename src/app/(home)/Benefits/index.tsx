import SectionTitle from 'src/components/SectionTitle';

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
        <article className="3xl:pr-[1.667vw] 3xl:pb-[1.667vw] 3xl:min-h-[19.584vw] min-h-60 md:min-h-66 lg:relative lg:bg-slate-950 lg:pr-8 lg:pb-8 2xl:min-h-94">
          <div className="3xl:rounded-br-[2.083vw] lg:absolute lg:h-full lg:w-full lg:rounded-br-[2.5rem] lg:bg-slate-300" />

          <div className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] relative flex h-full flex-col justify-end gap-4 rounded-[1.25rem] bg-[image:var(--background-image-gradient-card),url('/images/focus-card.png')] bg-cover bg-top p-4 md:gap-8 md:rounded-[2.5rem] md:p-8">
            <h3 className="3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl">
              Mais foco, menos distração
            </h3>

            <p className="3xl:text-[1.46vw] text-base text-white/75 md:text-xl">
              Treine sua mente para trabalhar com clareza, eliminando ruídos e direcionando atenção
              para o essencial.
            </p>
          </div>
        </article>

        <article className="bg-gradient-header 3xl:min-h-[19.584vw] 3xl:gap-[1.667vw] 3xl:rounded-[2.083vw] 3xl:p-[1.667vw] 3xl:pb-[3.334vw] 3xl:ps-[3.334vw] 3xl:rounded-bl-none flex min-h-60 flex-col justify-end gap-4 rounded-[1.25rem] bg-slate-950 p-4 md:min-h-66 md:gap-8 md:rounded-[2.5rem] md:p-8 lg:rounded-bl-none lg:ps-16 lg:pb-16 2xl:min-h-94">
          <h3 className="3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl">
            Clareza mental
          </h3>

          <p className="3xl:text-[1.46vw] text-base text-white/75 md:text-xl">
            Entenda seus padrões, organize seus pensamentos e tome decisões com leveza e
            consciência.
          </p>
        </article>

        <article className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] bg-gradient-header 3xl:gap-[1.667vw] 3xl:min-h-[19.584vw] 3xl:rounded-tr-none flex min-h-60 flex-col justify-end gap-4 rounded-[1.25rem] bg-slate-950 p-4 md:min-h-66 md:gap-8 md:rounded-[2.5rem] md:p-8 lg:rounded-tr-none 2xl:min-h-94">
          <h3 className="3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl">
            Equilíbrio emocional
          </h3>

          <p className="3xl:text-[1.46vw] text-base text-white/75 md:text-xl">
            Encontre o ponto entre o fazer e o sentir, reduzindo o estresse e recuperando o controle
            da sua energia.
          </p>
        </article>

        <article className="3xl:min-h-[19.584vw] 3xl:pt-[1.667vw] 3xl:pl-[1.667vw] min-h-60 md:min-h-66 lg:relative lg:bg-slate-950 lg:pt-8 lg:pl-8 2xl:min-h-94">
          <div className="3xl:rounded-tl-[2.083vw] top-0 left-0 lg:absolute lg:h-full lg:w-full lg:rounded-tl-[2.5rem] lg:bg-slate-300" />

          <div className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] 3xl:gap-[1.667vw] relative flex h-full flex-col justify-end gap-4 rounded-[1.25rem] bg-[image:var(--background-image-gradient-card),url('/images/productivity-card.png')] bg-cover bg-top p-4 md:gap-8 md:rounded-[2.5rem] md:p-8">
            <h3 className="3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl">
              Produtividade com propósito
            </h3>

            <p className="3xl:text-[1.46vw] text-base text-white/75 md:text-xl">
              Aumente seu desempenho sem sobrecarga, trabalhando com equilíbrio, foco e satisfação.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Benefits;
