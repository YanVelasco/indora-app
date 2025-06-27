import "@fortawesome/fontawesome-free/css/all.min.css";



const Politicas = () => {
  return (

    <section className="bg-dark text-white termos mx-auto w-full px-[90px] py-[30px]">
      <div className="flex justify-end">
        <p className="text-sm text-light">
          <strong>Última atualização:</strong> 12/05/2025
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-4">Política de Privacidade — INDORA</h1>

      <h4 className="text-2xl text-gray-500 mb-2">
        Na INDORA, valorizamos a sua privacidade e estamos comprometidos em proteger os dados pessoais que você compartilha conosco. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.

      </h4>

      <div className="w-full p-[50px]">
        <h5 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Ao utilizar nosso site, podemos coletar as seguintes informações:
Dados pessoais fornecidos por você: nome, e-mail, login, mensagens de contato ou cadastro.
Dados de navegação: páginas visitadas, tempo de permanência, cliques e interações.
Cookies: utilizamos cookies para melhorar sua experiência de navegação.
        </p>

        <h5 className="text-2xl font-semibold mb-4">2. Como Usamos Seus Dados</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Utilizamos suas informações para:<br />
          • Melhorar a experiência de navegação no site;<br />
          • Responder dúvidas e mensagens enviadas por formulários;<br />
          • Personalizar conteúdo e sugestões;<br />
          • Enviar atualizações sobre novidades, promoções e conteúdos (se autorizado por você).
        </p>

        <h5 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
        Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou por ordem judicial.
        </p>

        <h5 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.
        </p>

        <h5 className="text-2xl font-semibold mb-4">5. Seus Direitos</h5>
        <p className=" text-gray-500 mb-4 text-xl ">Você tem o direito de:<br />
          • Acessar os dados que temos sobre você;<br />
          • Corrigir ou atualizar seus dados;<br />
          • Solicitar a exclusão de suas informações;<br />
          • Cancelar o recebimento de mensagens promocionais.<br />
          • Para exercer esses direitos, entre em contato pelo e-mail: contato@indora.com.br.   
        </p>

        <h5 className="text-2xl font-semibold mb-4">6. Uso de Cookies</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Utilizamos cookies para: Lembrar suas preferências; Melhorar o desempenho do site; Coletar dados estatísticos de navegação. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode limitar algumas funcionalidades do site.
        </p>

        <h5 className="text-2xl font-semibold mb-3">7. Alterações na Política de Privacidade</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          A INDORA pode atualizar esta Política de Privacidade periodicamente. Sempre que isso ocorrer, a data da última atualização será modificada. Recomendamos que você revise esta política regularmente.
        </p>

        <h5 className="text-2xl font-semibold mb-4">8. Contato</h5>
        <p className=" text-gray-500 mb-4 text-xl ">
          Se tiver dúvidas sobre esta Política de Privacidade ou sobre seus dados, entre em contato:{" "}
          <i className="fas fa-envelope"></i> contato@indora.com
        </p>
      </div>
    </section>
  );
};

export default Politicas;