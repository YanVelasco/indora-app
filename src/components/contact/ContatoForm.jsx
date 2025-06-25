import React from "react";
import Witcher1 from "../../assets/images/cadastro/Witcher1.jpg";
import ResidentEvil4 from "../../assets/images/cadastro/Resident Evil 4.jpg";
import Fifa241 from "../../assets/images/cadastro/FIFA 24_1.jpg";
import CallofDuty from "../../assets/images/cadastro/Call of Duty.jpg";
import { useEffect } from "react";

const ContatoForm = () => {
  
  useEffect(() => {
    const scripts = [
      "/assets/js/cart.js",
      "/assets/js/cart-page.js",
      "/assets/js/contAcesG.js",
      "/assets/js/contAcesFC.js",
      "/assets/js/cadCont.js",

    ];
  
    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  
    return () => {
      scripts.forEach((src) => {
        const s = document.querySelector(`script[src="${src}"]`);
        if (s) document.body.removeChild(s);
      });
    };
  }, []);

  return (
    <form id="contatoFields">
      <main>
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 flex-wrap min-h-screen mt-1 relative z-10"> */}
        {/* <div className="flex flex-col items-center gap-6 px-4 py-8"> */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 py-8">
          {/* <div className="flex flex-col items-center gap-4 mt-5"> */}
          {/* <div className="flex flex-wrap justify-center gap-4"> */}
          <div className="flex flex-col items-center gap-4 md:order-1 ml-11 md:ml-0 px-4">
            <img
              src={Witcher1}
              alt="The Witcher"
              // className="w-[250px] h-[250px] object-contain"
              // className="max-w-[400px] w-full h-auto object-contain"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
            />
            <img
              src={ResidentEvil4}
              alt="Resident Evil 4"
              // className="w-[250px] h-[250px] object-contain"
              // className="max-w-[400px] w-full h-auto object-contain"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
            />
          </div>
          {/* <div className="w-full max-w-[546px] bg-[#1f1f1f] rounded-2xl shadow-md p-8 text-center mt-5"> */}
          {/* <div className="w-full max-w-[546px] bg-[#1f1f1f] rounded-2xl shadow-md p-8 text-center"> */}
          <div className="w-full max-w-[546px] bg-[#1f1f1f] rounded-2xl shadow-md p-8 text-center md:order-2">
            <div className="bg-[#1f1f1f] rounded-2xl shadow-md max-w-[546px] mx-auto text-center mt-5 p-8">
              <h2 className="text-center mb-7 text-white text-2xl font-semibold">
                A Indora desde já agradece o seu contato!
              </h2>
              {/* Formulário de Contato */}
              <form
                className="fields"
                id="contatoFields"
                name="contato"
                method="post"
              >
                <label htmlFor="nameContato">Nome</label>
                <input
                  type="text"
                  id="nameContato"
                  name="nameContato"
                  placeholder="Nome"
                  // className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 max-w-none w-[90vw] sm:w-full max-w-nome placeholder:text-gray-500"
                />

                <label htmlFor="emailContato">E-mail</label>
                <input
                  type="email"
                  id="emailContato"
                  name="emailContato"
                  placeholder="E-mail"
                  // className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 max-w-none w-[90vw] sm:w-full max-w-nome placeholder:text-gray-500"
                />
                <span
                  id="emailContato-help"
                  className="text-xs text-gray-500 mt-1"
                ></span>

                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem"
                  // className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 max-w-none w-[90vw] sm:w-full max-w-nome placeholder:text-gray-500"
                ></textarea>

                <button
                  type="submit"
                  className="inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto"
                  id="enviarContato"
                  disabled
                >
                  Enviar Contato
                </button>
                <span
                  id="mensagemContato"
                  className="text-sm text-red-500 mt-2 hidden group-hover:block"
                >
                  Pronto para enviar? Clique aqui para mandar sua mensagem.
                </span>
                <button
                  type="button"
                  className="inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto"
                  id="cancelarContato"
                >
                  Cancelar
                </button>
                <span
                  id="mensagemCancelarContato"
                  className="text-sm text-red-500 mt-2 hidden group-hover:block"
                >
                  Mudou de ideia? Cancele o contato clicando aqui.
                </span>
              </form>
            </div>
          </div>
          {/* <div className="flex flex-col items-center gap-4 mt-5"> */}
          {/* <div className="flex flex-wrap justify-center gap-4"> */}
          <div className="flex flex-col items-center gap-4 md:order-3 ml-11 md:ml-0 px-4">
            <img
              src={Fifa241}
              alt="FIFA 24"
              // className="w-[250px] h-[250px] object-contain"
              // className="max-w-[400px] w-full h-auto object-contain"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
            />
            <img
              src={CallofDuty}
              alt="Call of Duty WWII"
              // className="w-[250px] h-[250px] object-contain"
              // className="max-w-[400px] w-full h-auto object-contain"
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain"
            />
          </div>
        </div>
      </main>
    </form>
  );
};

export default ContatoForm;
