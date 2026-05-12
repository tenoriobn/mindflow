'use client';
import dynamic from 'next/dynamic';
import SectionDescription from 'src/components/SectionDescription';
import SectionTitle from 'src/components/SectionTitle';

const AboutMethodVideoPlayer = dynamic(() => import('./AboutMethodVideoPlayer'), {
  ssr: false,
});

const AboutMethod = () => {
  return (
    <section
      id="sobre-metodo"
      aria-labelledby="about-method-title"
      className="3xl:p-[1.667vw] 3xl:rounded-[2.083vw] bg-gradient-about flex min-h-dvh flex-col rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8"
    >
      <SectionTitle id="about-method-title" className="text-white/95">
        O que é o Método MindFlow?
      </SectionTitle>

      <SectionDescription className="3xl:max-w-[70vw] mx-auto text-center text-white/90 md:max-w-131.5 lg:max-w-181 xl:max-w-240.5">
        Sistema de organização mental que une neurociência e ferramentas digitais simples. Em 4
        módulos, o aluno aprende a estruturar uma rotina leve, entender sua mente e usar tecnologia
        de forma estratégica.
      </SectionDescription>

      <AboutMethodVideoPlayer />
    </section>
  );
};

export default AboutMethod;
