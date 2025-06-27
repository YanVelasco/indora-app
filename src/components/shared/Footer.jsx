import "../../styles/acessib.css";
import logo from "../../assets/images/logo/INDORARODAPE.jpeg";

import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white p-2.5">
      <div className="max-w-full mx-auto p-2.5 flex justify-around">
        <div>
          <h4 className="text-xl font-semibold text-pink-500 drop-shadow-[0_0_6px_#ff007a] mb-2.5">Sobre Nós</h4>
          <p>
            Somos uma loja especializada em jogos eletrônicos, oferecendo as
            melhores ofertas e promoções.
          </p>
          <img
            src={logo}
            alt="logo Indora"
            className="rounded-xl w-1/4 h-auto opacity-50 mt-5"
          />
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="text-xl font-semibold text-pink-500 drop-shadow-[0_0_6px_#ff007a] mb-2.5">
            Ajuda
          </h4>
          <ul className="space-y-2 ml-4">
            <li>
              <Link to="/about" className="hover:underline">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/dora" className="hover:underline">
                Suporte
              </Link>
            </li>
            <li>
              <Link to="/politics" className="hover:underline"> Política de Privacidade </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">Termos de Uso</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h4 className="text-xl font-semibold text-pink-500 drop-shadow-[0_0_6px_#ff007a] mb-2.5">
            Redes Sociais
          </h4>
          <div className="flex justify-center gap-5 text-2xl">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-2.5 border-t border-white mt-5 text-sm text-[#e60067]">
        <p className="text-[14px] text-[#e60067]">
          © 2025 Todos os direitos reservados. Andre Grigoli - Carolina Pereira
          - Luiza Vicente - Romulo Amaro - Yan Velasco
        </p>
      </div>
    </footer>
  );
};

export default Footer;
