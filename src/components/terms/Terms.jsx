
import "@fortawesome/fontawesome-free/css/all.min.css";



const Termos = () => {

  return (

    <section className="bg-dark text-white termos mx-auto w-full px-[90px] py-[30px]">
      <div className="flex justify-end">
        <p className="text-sm text-light">
          <strong>Última atualização:</strong> 12/05/2025
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">Termos de Uso — INDORA</h1>

      <h4 className="text-2xl text-gray-500 mb-2">
        Bem-vindo ao site da INDORA. Ao acessar ou usar nosso site, você
        concorda com os seguintes Termos de Uso. Leia com atenção.
      </h4>

      <div className="w-full p-[50px]">
        <h5 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Ao utilizar este site, você concorda com as regras descritas aqui.
          Caso não concorde com algum dos termos, recomendamos que não utilize o site.
        </p>

        <h5 className="text-2xl font-semibold mb-4">2. Uso do Site</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Você se compromete a usar o site de maneira ética, legal e segura. É proibido:<br />
          • Utilizar o site para fins ilegais;<br />
          • Tentar invadir ou danificar o sistema;<br />
          • Copiar ou reproduzir conteúdo sem autorização.
        </p>

        <h5 className="text-2xl font-semibold mb-4">3. Cadastro de Usuários</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Para acessar determinadas áreas ou recursos, pode ser necessário criar uma conta.
          O usuário se compromete a fornecer informações verdadeiras e manter seus dados atualizados.
        </p>

        <h5 className="text-2xl font-semibold mb-4">4. Responsabilidade dos Usuários</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          O uso de qualquer conteúdo, produto ou informação do site é de responsabilidade do usuário.
          A INDORA não se responsabiliza por danos decorrentes do uso inadequado da plataforma.
        </p>

        <h5 className="text-2xl font-semibold mb-4">5. Propriedade Intelectual</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Todo o conteúdo do site (textos, imagens, marcas, logotipos, layout) é protegido por direitos
          autorais e pertence à INDORA, salvo indicação contrária. Não é permitido copiar ou reutilizar sem permissão.
        </p>

        <h5 className="text-2xl font-semibold mb-4">6. Modificações nos Termos</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          A INDORA pode alterar estes Termos a qualquer momento, sem aviso prévio.
          A versão atualizada estará sempre disponível nesta página.
        </p>

        <h5 className="text-2xl font-semibold mb-3">7. Links para Terceiros</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Nosso site pode conter links para sites externos.
          Não nos responsabilizamos por conteúdo ou políticas de privacidade desses sites.
        </p>

        <h5 className="text-2xl font-semibold mb-4">8. Contato</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Dúvidas sobre estes termos? Entre em contato:{" "}
          <i className="fas fa-envelope"></i> contato@indora.com
        </p>
      </div>
    </section>
  );
};

export default Termos;