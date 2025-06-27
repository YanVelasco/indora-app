import React, { useEffect, useState } from "react";
import DORA3 from "../../assets/images/doraimg/DORA3.jpeg";
import DORAPNG2 from "../../assets/images/doraimg/DORAPNG2.PNG";
import DoraIcon from "../../assets/images/doraimg/DoraIcon.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Dora() {
  const frases = [
    "🌿 O planeta também faz parte do seu time!",
    "♻️ Prefira jogos digitais e evite desperdícios.",
    "🔌 Desligue o console após jogar. Energia salva = XP verde!",
    "🎮 Ser sustentável também é uma conquista!",
    "💚 Doe jogos antigos e espalhe diversão consciente."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % frases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <section className="px-6 md:px-24 py-12 bg-black text-white">
        <h3 className="text-3xl font-bold text-pink-600 drop-shadow-[0_0_10px_#ff00ff] mb-6 text-center">Conheça a DORA – Sua Companheira de Jogo, Consciência e Comunidade!</h3>
        <div className="flex items-center justify-center gap-6 mb-10 relative">
          <img
            src={DORAPNG2}
            alt="Assistente DORA"
            className="w-24 h-auto rounded-[30%] bg-white p-1 shadow-[0_0_15px_rgba(255,0,255,0.5)]"
          />
          <div className="bg-zinc-900 text-pink-600 rounded-xl px-5 py-3 text-sm max-w-xs font-medium relative animate-fadein">
            <span className="me-3 text-xl">
              <i className="fa fa-comment" aria-hidden="true"></i>
            </span>
            {frases[index]}
            <div className="absolute top-1/3 -left-2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-zinc-900"></div>
          </div>
        </div>

        <div className="flex flex-col items-center px-12">
          <p className="mb-4">
            Apresentamos DORA, a assistente virtual oficial da INDORA! Mais que uma inteligência digital, a DORA foi criada para estar ao seu lado em cada jornada gamer, oferecendo suporte inteligente, dicas personalizadas, descobertas incríveis de jogos indie, e até conselhos de sustentabilidade no mundo digital.
          </p>
          <p className="text-pink-600 drop-shadow-[0_0_10px_#ff00ff] text-lg">
            A DORA é a ponte entre tecnologia e humanidade: acessível, ética e sempre ao seu lado. Com ela, a experiência na INDORA se torna mais fluida, divertida e consciente — como deve ser.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-red-600 to-purple-800 p-6 text-white items-center opacity-80 ">

      <div className="flex flex-col justify-center items-center p-6 text-justify">
        <div className="col-span-1 flex justify-center">
          <p text-2xl font-bold mb-2>
            Mais que uma inteligência digital, a DORA foi criada para estar ao seu lado em cada jornada gamer, oferecendo suporte inteligente, dicas personalizadas, descobertas incríveis de jogos indie, e até conselhos de sustentabilidade no mundo digital.
          </p>
        </div>
        </div>

        <div className="flex justify-center items-center p-6">
        <img src={DORA3}
        alt="Dora" 
        className="max-h-60 object-contain rounded-lg shadow-lg" />
        </div>

        <div className="flex flex-col justify-center items-center p-6 text-justify">
          <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_0_6px_#00f0ff]">
            Por que a DORA é Importante
          </h2>
          <p>
            A DORA representa a união entre propósito e inovação. Ela é a face visível de uma plataforma que se importa com o impacto que causa no mundo e nos indivíduos. Por isso, a assistente está sempre pronta para transformar simples interações em experiências com significado — aliando tecnologia, cultura indie e responsabilidade social.
          </p>
        </div>
      </div>


      <section className="w-full py-14 px-4 bg-black text-white flex justify-center">
        <div className="max-w-6xl w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="flex items-start ">
            <span className="text-3xl text-white  drop-shadow-[0_0_10px_#ff00ff] mr-4">
              <i className="fa fa-gamepad" aria-hidden="true"></i>
            </span>
            <p>Recomendações personalizadas com base nos seus gostos e estilo de jogo.</p>
          </div>
          <div className="flex items-start ">
            <span className="text-3xl  text-white  drop-shadow-[0_0_10px_#ff00ff] mr-4">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <p>Ajuda rápida com dúvidas, navegação, ofertas e novidades da plataforma.</p>
          </div>
          <div className="flex items-start ">
            <span className="text-3xl  text-white  drop-shadow-[0_0_10px_#ff00ff] mr-4">
              <i className="fa fa-recycle" aria-hidden="true"></i>
            </span>
            <p>Dicas de consumo consciente para jogar com responsabilidade e impacto positivo.</p>
          </div>
          <div className="flex items-start ">
            <span className="text-3xl  text-white  drop-shadow-[0_0_10px_#ff00ff] mr-4">
              <i className="fa fa-comment" aria-hidden="true"></i>
            </span>
            <p>Interação com a comunidade gamer, promovendo inclusão, diversidade e diálogo.</p>
          </div>
          <div className="flex items-start ">
            <span className="text-3xl text-white  drop-shadow-[0_0_10px_#ff00ff]  mr-4">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
            <p>Alerta de promoções e lançamentos, para você nunca perder uma oportunidade épica.</p>
          </div>
        </div>
        </div>
      </section>

     

      <section className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-red-600 to-purple-800 p-6 text-white items-center opacity-80">

         <div className="col-span-1 flex justify-center">
        <img src={DoraIcon}
         alt="Dora" 
         className="max-h-60 object-contain rounded-lg " />
      </div>

        <h2 className="text-2xl font-bold drop-shadow-[0_0_6px_#00f0ff]">Compromissos ESG com a DORA:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
          <div >
            <h3 className="text-lg font-bold drop-shadow-[0_0_6px_#00f0ff] flex items-center gap-2">
              <i className="fa fa-recycle" aria-hidden="true"></i> Ambiental
            </h3>
            <p className="mt-2">DORA opera com responsabilidade ecológica, reduzindo o consumo de recursos e promovendo sustentabilidade digital.</p>
          </div>
          <div c>
            <h3 className="text-lg font-bold drop-shadow-[0_0_6px_#00f0ff] flex items-center gap-2">
              <i className="fa fa-handshake" aria-hidden="true"></i> Social
            </h3>
            <p className="mt-2">Acessível, inclusiva e feita para todos os gamers. A DORA respeita a diversidade de vozes da comunidade Indora.</p>
          </div>
          <div >
            <h3 className="text-lg font-bold drop-shadow-[0_0_6px_#00f0ff] flex items-center gap-2">
              <i className="fa fa-lock" aria-hidden="true"></i> Governança
            </h3>
            <p className="mt-2">Segura e ética: DORA protege seus dados e atua com transparência, conforme a LGPD.</p>
          </div>
        </div>
      </section>
    </div>
  );
}