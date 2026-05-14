import SectionTitle from 'src/components/SectionTitle';

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="flex min-h-dvh flex-col"
    >
      <SectionTitle id="testimonials-title" className="text-slate-950">
        O que nossos alunos dizem
      </SectionTitle>
    </section>
  );
};

export default Testimonials;
