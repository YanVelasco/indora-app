// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import { fetchProducts } from '../../store/actions/index';
// import { Loader } from '../../components/shared/Loader';
// import { FaExclamationTriangle } from 'react-icons/fa';
// import ProductCart from "../shared/ProductCart";

import "../../styles/acessib.css";
import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  FaGamepad,
  FaHandshake,
  FaGlobe,
  FaComment,
  FaLock,
  FaRecycle,
} from "react-icons/fa";
import Andre from "../../assets/images/time/Andre.jpg";
import Carol from "../../assets/images/time/carolinapereira.jfif";
import Luiza from "../../assets/images/time/LuizaVicente.jpg";
import Romulo from "../../assets/images/time/RômuloAmaro.png";
// import Yan from "../../assets/images/time/yan.enc";
import Indiegames from "../../assets/images/sobre/indiegames.png";
import Jogosindie from "../../assets/images/sobre/jogos-indie.jpg";

const About = () => {
  return (
    <>
      <section className="w-full px-6 md:px-24 py-12 text-gray-100 bg-black text-white">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-pink-600">
            Bem-vindo a INDORA Game Shop, o seu destino definitivo para o mundo
            dos jogos eletrônicos!
          </h2>
          <p>
          {/* <p className="text-lg leading-relaxed"> */}
            Somos apaixonados por games e acreditamos que cada título carrega
            uma história única, seja ele um grande lançamento de sucesso ou uma
            pérola independente.
          </p>
          <p>
            Na INDORA, reunimos o melhor dos dois mundos: os jogos mainstream
            mais esperados do momento e as criações indie mais inovadoras e
            surpreendentes. Nossa missão é oferecer aos gamers um catálogo
            diversificado, cheio de experiências imersivas, narrativas
            envolventes e jogabilidades inesquecíveis.
          </p>
          <p>
            Seja você um fã de blockbusters cheios de ação ou de títulos
            independentes com mecânicas criativas, a INDORA tem o jogo perfeito
            para você. Além disso, valorizamos a comunidade gamer e buscamos
            sempre trazer conteúdos exclusivos, ofertas especiais e um
            atendimento dedicado para que sua experiência seja tão épica quanto
            os games que você ama.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-red-600 to-purple-800 p-6 text-white items-center opacity-60">
        <div className="col-span-1 flex justify-center">
          <img
            src={Indiegames}
            alt="Games Indie"
            className="max-h-60 object-contain opacity-60 rounded-lg"
          />
        </div>
        <div className="col-span-2 px-6">
          <p className="text-3xl md:text-3xl leading-relaxed">
            Indora é a aurora dos jogos indie — um novo amanhecer para criadores
            e jogadores que buscam liberdade, autenticidade e inovação no
            universo gamer.
          </p>
        </div>
      </div>

      <section className="w-full py-14 px-4 bg-black text-white flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Bloco 1 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-gamepad" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">Paixão pelos Games</h5>
                <p>
                  Celebramos a criatividade, a diversão e a arte em cada título.
                </p>
              </div>
            </div>

            {/* Bloco 2 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-handshake" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">
                  Diversidade e Inclusão
                </h5>
                <p>
                  Acolhemos todos os tipos de jogadores e criadores, sem
                  exceções.
                </p>
              </div>
            </div>

            {/* Bloco 3 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-globe" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">Inovação</h5>
                <p>Buscamos novas formas de surpreender e engajar.</p>
              </div>
            </div>

            {/* Bloco 4 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-comment" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">Comunidade</h5>
                <p>
                  Valorizamos o diálogo, o respeito e o crescimento conjunto.
                </p>
              </div>
            </div>

            {/* Bloco 5 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-lock" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">Transparência e Ética</h5>
                <p>Atuamos com responsabilidade, clareza e compromisso.</p>
              </div>
            </div>

            {/* Bloco 6 */}
            <div className="flex items-start">
              <span className="text-3xl text-pink-600 mr-4">
                <i className="fa fa-recycle" />
              </span>
              <div>
                <h5 className="font-semibold text-lg">
                  Consciência Social e Ambiental
                </h5>
                <p>
                  Promovemos ações que impactam positivamente o mundo ao nosso
                  redor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-red-600 to-purple-800 text-white opacity-60">
        <div className="flex flex-col justify-center items-center p-6 text-justify">
          <h2 className="text-2xl font-bold mb-2">Nossa Missão</h2>
          <p>
            Fomentar a cena indie como movimento cultural e social, conectando
            talentos emergentes a públicos engajados, e promovendo inovação,
            expressão artística e impacto positivo através do universo dos jogos.
          </p>
        </div>

        <div className="flex justify-center items-center p-6">
          <img
            src={Jogosindie}
            alt="Games Indie"
            className="max-h-60 object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center p-6 text-justify">
          <h2 className="text-2xl font-bold mb-2">Visão</h2>
          <p>
            Ser a principal vitrine e impulsionadora do universo dos jogos
            independentes, conectando criadores inovadores a uma comunidade
            global apaixonada por experiências autênticas, criativas e
            transformadoras.
          </p>
        </div>
      </div>

      <figure className="bg-black text-white py-8 px-5 text-center">
        <figcaption className="text-xl font-semibold mt-4">
          <strong>Membros da Equipe INDORA</strong>
        </figcaption>
        <div className="flex flex-wrap justify-center gap-6 py-8">
          <div
            className="bg-gray-900 rounded-lg p-5 w-40 text-center shadow-md hover:scale-105 transition-transform"
            id="card-home"
          >
            <img
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
              src={Andre}
              alt="Foto do André Medeiros Grigoli"
            />
            <h3 className="text-sm font-medium">André Medeiros Grigoli</h3>
          </div>
          <div
            className="bg-gray-900 rounded-lg p-5 w-40 text-center shadow-md hover:scale-105 transition-transform"
            id="card-home"
          >
            <img
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
              src={Carol}
              alt="Foto da Carolina Aparecida Pereira"
            />
            <h3 className="text-sm font-medium">Carolina Aparecida Pereira</h3>
          </div>
          <div
            className="bg-gray-900 rounded-lg p-5 w-40 text-center shadow-md hover:scale-105 transition-transform"
            id="card-home"
          >
            <img
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
              src={Luiza}
              alt="Foto da Luiza Mozzaquatro Palma Vicente"
            />
            <h3 className="text-sm font-medium">
              Luiza Mozzaquatro Palma Vicente
            </h3>
          </div>
          <div
            className="bg-gray-900 rounded-lg p-5 w-40 text-center shadow-md hover:scale-105 transition-transform"
            id="card-home"
          >
            <img
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
              src={Romulo}
              alt="Foto do Rômulo de Sousa Amaro"
            />
            <h3 className="text-sm font-medium">Rômulo de Sousa Amaro</h3>
          </div>
          <div
            className="bg-gray-900 rounded-lg p-5 w-40 text-center shadow-md hover:scale-105 transition-transform"
            id="card-home"
          >
            <img
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
              // src={Yan}
              alt="Foto do Yan Carlos Duarte Velasco"
            />
            <h3 className="text-sm font-medium">Yan Carlos Duarte Velasco</h3>
          </div>
        </div>
        <figcaption className="text-xl font-semibold mt-4">
          <strong>
            <h2>Explore, jogue e viva o universo dos games com a INDORA</h2>
          </strong>
        </figcaption>
      </figure>
    </>
  );
};

export default About;
