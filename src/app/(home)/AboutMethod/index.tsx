'use client';
import dynamic from 'next/dynamic';
const AboutMethodVideoPlayer = dynamic(() => import('./AboutMethodVideoPlayer'), {
  ssr: false,
});

const AboutMethod = () => {
  return (
    <section className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] bg-gradient-about flex min-h-dvh flex-col rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8">
      <h2 className="3xl:text-[2.5vw] 3xl:mb-[1.667vw] mb-4 text-center text-[clamp(1.5rem,5.21vw,2.5rem)] font-semibold text-white/95 md:mb-8">
        O que é o Método MindFlow?
      </h2>

      <p className="3xl:text-[1.46vw] 3xl:mb-[1.667vw] 3xl:max-w-[70vw] mx-auto mb-4 text-center text-[clamp(1rem,3vw,1.25rem)] font-light text-white/90 md:mb-8 md:max-w-131.5 lg:max-w-181 xl:max-w-240.5">
        Sistema de organização mental que une neurociência e ferramentas digitais simples. Em 4
        módulos, o aluno aprende a estruturar uma rotina leve, entender sua mente e usar tecnologia
        de forma estratégica.
      </p>

      <AboutMethodVideoPlayer />
    </section>
  );
};

export default AboutMethod;
