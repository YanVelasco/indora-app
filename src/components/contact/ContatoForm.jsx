
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Witcher1 from "../../assets/images/cadastro/Witcher1.jpg";
import ResidentEvil4 from "../../assets/images/cadastro/Resident Evil 4.jpg";
import Fifa241 from "../../assets/images/cadastro/FIFA 24_1.jpg";
import CallofDuty from "../../assets/images/cadastro/Call of Duty.jpg";

const ContatoForm = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

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
    <>
      <main>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-4 py-8">
          <div className="flex flex-col items-center gap-4 md:order-1 ml-11 md:ml-0 px-4">
            <img src={Witcher1} alt="The Witcher" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain" />
            <img src={ResidentEvil4} alt="Resident Evil 4" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain" />
          </div>

          <div className="w-full max-w-2xl bg-[#0f0020] rounded-xl shadow-[0_0_50px_#00f0ff] ring-4 ring-cyan-400 p-10 text-center text-white md:order-2">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-8 tracking-wide">
              A Indora desde já agradece o seu contato!
            </h2>
            <form onSubmit={handleSubmit} className="fields" id="contatoFields" name="contato" method="post">
              <label htmlFor="nameContato" className="block text-left text-cyan-300 font-medium mb-2">Nome</label>
              <input type="text" id="nameContato" name="nameContato" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-cyan-400 bg-transparent text-white placeholder:text-cyan-300 shadow-[0_0_10px_#00f0ff] focus:outline-none focus:ring-2 focus:ring-pink-500" />

              <label htmlFor="emailContato" className="block text-left text-cyan-300 font-medium mb-2">E-mail</label>
              <input type="email" id="emailContato" name="emailContato" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}

                className="w-full p-3 rounded-lg border-2 border-cyan-400 bg-transparent text-white placeholder:text-cyan-300 shadow-[0_0_10px_#00f0ff] focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <span id="emailContato-help" className="text-xs text-gray-500 mt-1"></span>

              <label htmlFor="message" className="block text-left text-cyan-300 font-medium mb-2">Mensagem</label>
              <textarea id="message" name="message" placeholder="Digite sua mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-cyan-400 bg-transparent text-white placeholder:text-cyan-300 shadow-[0_0_10px_#00f0ff] focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>

              {/* <button type="submit"
                className="block mx-auto bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-500 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#00f0ff] hover:brightness-125 transition-all duration-300 px-4 py-4 w-full max-w-xs text-center">
                Enviar Contato
              </button> */}
              <button type="submit" disabled={!nome || !email || !mensagem} className={`block mx-auto bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-500 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#00f0ff] transition-all duration-300 px-4 py-4 w-full max-w-xs text-center ${
                  (!nome || !email || !mensagem) ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-125'
                  }`}
                >
                Enviar Contato
              </button>
              <a href="/" className="block mx-auto bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-500 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#00f0ff] hover:brightness-125 transition-all duration-300 px-4 py-4 w-full max-w-xs text-center">
                Cancelar
              </a>
            </form>
          </div>

          <div className="flex flex-col items-center gap-4 md:order-3 ml-11 md:ml-0 px-4">
            <img src={Fifa241} alt="FIFA 24" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain" />
            <img src={CallofDuty} alt="Call of Duty WWII" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain" />
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#0f0020] text-white p-8 rounded-xl shadow-[0_0_50px_#00f0ff] ring-4 ring-cyan-400 max-w-md text-center">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Contato enviado com sucesso!</h2>
          <p className="mb-6">
            <span className="text-cyan-300 font-semibold">{nome}</span> , muito obrigado por entrar em contato com a Indora!<br />
            <br />
            Em breve responderemos no e-mail <span className="text-cyan-300 font-semibold">{email}</span>.
          </p>
            <button onClick={handleCloseModal}
              className="bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-500 text-black font-bold py-2 px-6 rounded-xl shadow-[0_0_20px_#00f0ff] hover:brightness-125 transition-all duration-300">
              Voltar para a Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContatoForm;
