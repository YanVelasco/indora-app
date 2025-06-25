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
import Witcher1 from "../../assets/images/cadastro/Witcher1.jpg";
import ResidentEvil4 from "../../assets/images/cadastro/Resident Evil 4.jpg";
import Fifa241 from "../../assets/images/cadastro/FIFA 24_1.jpg";
import CallofDuty from "../../assets/images/cadastro/Call of Duty.jpg";

import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
  const scriptId = "cadContScript";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "/assets/js/cadCont.js";
    script.async = true;
    document.body.appendChild(script);
  }

    const script = document.createElement("script");
    script.src = "/assets/js/cadCont.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main>
        <div className="flex justify-center items-center gap-10 p-10 flex-wrap min-h-screen relative z-10">
          <div className="flex flex-col items-center gap-4 mt-24">
            <img
              src={Witcher1}
              alt="The Witcher"
              className="w-[250px] h-[250px] object-contain"
            />
            <img
              src={ResidentEvil4}
              alt="Resident Evil 4"
              className="w-[250px] h-[250px] object-contain"
            />
          </div>
          <div className="w-full max-w-[546px] bg-[#1f1f1f] rounded-2xl shadow-md p-8 text-center mt-1">
            <div className="bg-[#1f1f1f] rounded-2xl shadow-md max-w-[546px] mx-auto text-center mt-1 p-8">
              <h2 className="text-center mb-4 text-white text-xl font-semibold">
                A Indora agradece a sua visita! Escolha uma opção:
              </h2>
              <div className="flex justify-center gap-4 mt-4">
                <input
                  type="radio"
                  name="formOption"
                  id="cadastro"
                  className=""
                />
                <label htmlFor="cadastro">Cadastro</label>
                <input
                  type="radio"
                  name="formOption"
                  id="contato"
                  className="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer text-sm hover:bg-gray-500"
                />
                <label htmlFor="contato">Contato</label>
              </div>

              {/* Formulário de Cadastro */}
              <form
                className="fields"
                id="cadastroFields"
                name="cadastro"
                method="post"
              >
                <label htmlFor="tipo">Tipo de Cadastro</label>
                <select
                  id="tipo"
                  name="tipo"
                  className="p-2 rounded border border-gray-300 text-gray-700 text-sm w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="usuario">Usuário</option>
                  <option value="parceiro">Parceiro</option>
                </select>

                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome Completo"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />

                <button
                  id="openAvatarModal"
                  type="button"
                  className="btn btn-primary inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto"
                >
                  Escolha seu avatar
                </button>

                <input type="hidden" id="avatarInput" value="" />

                <div
                  id="avatarModal"
                  className="modal hidden"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="avatarModalTitle"
                >
                  <div className="modal-content">
                    <span id="closeAvatarModal" className="close">
                      ×
                    </span>
                    <h3 className="titulo-modal">Escolha seu Avatar</h3>
                    <div className="avatar-list d-flex flex-wrap gap-3">
                      {[...Array(13)].map((_, i) => {
                        const id = `avatar${i + 1}`;
                        const icons = [
                          "bi-person-circle",
                          "bi-emoji-smile",
                          "bi-robot",
                          "bi-emoji-heart-eyes",
                          "bi-emoji-sunglasses",
                          "bi-person-badge",
                          "bi-emoji-neutral",
                          "bi-emoji-angry",
                          "bi-emoji-laughing",
                          "bi-emoji-smile-fill",
                          "bi-emoji-kiss",
                          "bi-emoji-wink",
                          "bi-person",
                        ];
                        return (
                          <div
                            key={id}
                            className="avatar-option"
                            data-value={id}
                            tabIndex="0"
                            role="button"
                            aria-pressed="false"
                          >
                            <input
                              type="radio"
                              name="avatar"
                              id={id}
                              value={id}
                              className="hidden-radio"
                            />
                            <i className={`bi ${icons[i]} avatar-icon`}></i>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      id="avatarPreview"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      Nenhum avatar selecionado.
                    </div>
                  </div>
                </div>

                <label htmlFor="username">Nome de Usuário</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Nome de Usuário"
                  readOnly
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />

                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  required
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />
                <span
                  id="dataNascimentoHelp"
                  className="text-xs text-gray-500 mt-1"
                ></span>

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />
                <span
                  id="email-help"
                  className="text-xs text-gray-500 mt-1"
                ></span>

                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />
                <small
                  id="password-help"
                  className="text-xs text-gray-500 mt-1"
                ></small>

                <label htmlFor="confirm-password">Confirme a Senha</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirme a Senha"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />
                <small
                  id="confirm-password-help"
                  className="text-xs text-gray-500 mt-1"
                ></small>

                <button
                  type="submit"
                  className="inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto"
                  id="enviarCadastro"
                  disabled
                >
                  Enviar Cadastro
                </button>
                <span
                  id="mensagemCadastro"
                  className="text-sm text-red-500 mt-2 hidden group-hover:block"
                >
                  Pronto para começar? Assim que os campos forem preenchidos,
                  clique para finalizar seu cadastro!
                </span>
                <button
                  type="button"
                  className="inline-block px-4 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto"
                  id="cancelarCadastro"
                >
                  Cancelar
                </button>
                <span
                  id="mensagemCancelarCadastro"
                  className="text-sm text-red-500 mt-2 hidden group-hover:block"
                >
                  Mudou de ideia? Cancele o cadastro clicando aqui.
                </span>
              </form>

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
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
                />

                <label htmlFor="emailContato">E-mail</label>
                <input
                  type="email"
                  id="emailContato"
                  name="emailContato"
                  placeholder="E-mail"
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
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
                  className="p-2 rounded border border-gray-300 text-sm text-gray-700 w-full placeholder:text-gray-500"
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
          <div className="flex flex-col items-center gap-4 mt-24">
            <img
              src={Fifa241}
              alt="FIFA 24"
              className="w-[250px] h-[250px] object-contain"
            />
            <img
              src={CallofDuty}
              alt="Call of Duty WWII"
              className="w-[250px] h-[250px] object-contain"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
