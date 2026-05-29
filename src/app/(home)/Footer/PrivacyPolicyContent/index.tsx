import SectionDescription from 'src/components/SectionDescription';

const PrivacyPolicyContent = () => {
  return (
    <>
      <SectionDescription className="text-white/90 md:text-center">
        A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o{' '}
        <strong className="font-semibold text-white">MindFlow</strong> coleta, utiliza, armazena e
        protege os dados fornecidos pelos usuários durante a navegação em nossa plataforma.
      </SectionDescription>

      <SectionDescription className="text-white/90 md:text-center">
        Ao utilizar este site, você concorda com os termos descritos abaixo.
      </SectionDescription>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-information-collected"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-information-collected"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          1. Informações coletadas
        </h3>

        <div>
          <SectionDescription className="mb-0! text-white/75">
            O MindFlow pode coletar algumas informações pessoais fornecidas voluntariamente pelo
            usuário, como:
          </SectionDescription>

          <ul className="3xl:text-[1.042vw] list-inside list-disc text-[clamp(1rem,3vw,1.25rem)] font-light text-white/75">
            <li>Nome;</li>
            <li>Endereço de e-mail;</li>
            <li>Telefone (quando informado);</li>
            <li>Informações enviadas por formulários de contato ou inscrição;</li>
            <li>Dados de navegação e interação com o site.</li>
          </ul>
        </div>

        <div>
          <SectionDescription className="mb-0! text-white/75">
            Também podem ser coletadas informações automaticamente, incluindo:
          </SectionDescription>

          <ul className="3xl:text-[1.042vw] list-inside list-disc text-[clamp(1rem,3vw,1.25rem)] font-light text-white/75">
            <li>Endereço IP;</li>
            <li>Tipo de navegador;</li>
            <li>Dispositivo utilizado;</li>
            <li>Páginas acessadas;</li>
            <li>Tempo de navegação;</li>
            <li>Cookies e tecnologias semelhantes.</li>
          </ul>
        </div>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-how-we-use-your-information"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-how-we-use-your-information"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          2. Como utilizamos suas informações
        </h3>

        <div>
          <SectionDescription className="mb-0! text-white/75">
            As informações coletadas são utilizadas para:
          </SectionDescription>

          <ul className="3xl:text-[1.042vw] list-inside list-disc text-[clamp(1rem,3vw,1.25rem)] font-light text-white/75">
            <li>Entrar em contato com você;</li>
            <li>Enviar conteúdos, novidades e comunicações relacionadas ao MindFlow;</li>
            <li>Melhorar a experiência de navegação;</li>
            <li>Analisar métricas e desempenho da plataforma;</li>
            <li>Personalizar conteúdos e campanhas;</li>
            <li>Garantir a segurança e funcionamento adequado do site.</li>
          </ul>
        </div>

        <SectionDescription className="mb-0! text-white/75">
          Esses serviços seguem padrões de segurança e proteção de dados compatíveis com as boas
          práticas do mercado.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-data-sharing"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-data-sharing"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          3. Compartilhamento de dados
        </h3>

        <div>
          <SectionDescription className="mb-0! text-white/75">
            Alguns dados podem ser processados por ferramentas e serviços utilizados pela
            plataforma, como:
          </SectionDescription>

          <ul className="3xl:text-[1.042vw] list-inside list-disc text-[clamp(1rem,3vw,1.25rem)] font-light text-white/75">
            <li>Plataformas de e-mail marketing;</li>
            <li>Ferramentas de análise e métricas;</li>
            <li>Serviços de hospedagem e infraestrutura;</li>
            <li>Plataformas de automação e formulários.</li>
          </ul>
        </div>

        <SectionDescription className="mb-0! text-white/75">
          Esses serviços seguem padrões de segurança e proteção de dados compatíveis com as boas
          práticas do mercado.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-cookie-usage"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-cookie-usage"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          4. Uso de cookies
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          Utilizamos cookies para melhorar sua experiência de navegação, entender padrões de uso e
          oferecer conteúdos mais relevantes.
        </SectionDescription>

        <SectionDescription className="mb-0! text-white/75">
          Você pode desativar os cookies diretamente nas configurações do seu navegador, embora
          algumas funcionalidades do site possam ser afetadas.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-information-security"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-information-security"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          5. Segurança das informações
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
          autorizado, perda, alteração ou divulgação indevida.
        </SectionDescription>

        <SectionDescription className="mb-0! text-white/75">
          Apesar dos esforços contínuos, nenhum sistema é completamente seguro, e não podemos
          garantir segurança absoluta das informações transmitidas pela internet.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-user-rights"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-user-rights"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          6. Direitos do usuário
        </h3>

        <div>
          <SectionDescription className="mb-0! text-white/75">
            Você pode, a qualquer momento:
          </SectionDescription>

          <ul className="3xl:text-[1.042vw] list-inside list-disc text-[clamp(1rem,3vw,1.25rem)] font-light text-white/75">
            <li>Solicitar acesso aos seus dados;</li>
            <li>Corrigir informações incorretas;</li>
            <li>Solicitar a exclusão dos seus dados;</li>
            <li>Revogar consentimentos anteriormente fornecidos;</li>
            <li>Solicitar informações sobre o tratamento dos seus dados.</li>
          </ul>
        </div>

        <SectionDescription className="mb-0! text-white/75">
          Para exercer qualquer um desses direitos, entre em contato pelos canais oficiais
          disponibilizados na plataforma.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-external-links"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-external-links"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          7. Links externos
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          O site pode conter links para plataformas e serviços de terceiros. O MindFlow não é
          responsável pelas práticas de privacidade ou conteúdos presentes nesses ambientes
          externos.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-policy-changes"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-policy-changes"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          8. Alterações nesta política
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          Esta Política de Privacidade poderá ser atualizada periodicamente para refletir melhorias,
          mudanças legais ou atualizações da plataforma.
        </SectionDescription>

        <SectionDescription className="mb-0! text-white/75">
          Recomendamos a revisão frequente deste conteúdo.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-contact"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-contact"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          9. Contato
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados
          realizado pelo MindFlow, entre em contato através dos canais oficiais informados no site.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <section
        aria-labelledby="privacy-policy-consent"
        className="3xl:gap-[1.667vw] grid gap-4 md:gap-8"
      >
        <h3
          id="privacy-policy-consent"
          className="3xl:text-[1.25vw] text-lg font-semibold text-white md:text-2xl"
        >
          10. Consentimento
        </h3>

        <SectionDescription className="mb-0! text-white/75">
          Ao utilizar o site MindFlow, você declara estar ciente e de acordo com os termos desta
          Política de Privacidade.
        </SectionDescription>
      </section>

      <hr className="3xl:my-[1.667vw] my-4 h-px w-full border-0 bg-white/12 md:my-8" />

      <SectionDescription className="mb-0! text-center text-white/75">
        Última atualização: <span className="max-xs:block">21 de maio de 2026</span>
      </SectionDescription>
    </>
  );
};

export default PrivacyPolicyContent;
