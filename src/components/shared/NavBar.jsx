// import "../../styles/styles.css";
import "../../styles/acessib.css";
import logo from "../../assets/images/logo/SolRetrowaveLogo.png";
import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {

  useEffect(() => {
    const scripts = [
      "/assets/js/cart.js",
      "/assets/js/cart-page.js",
      "/assets/js/contAcesG.js",
      "/assets/js/contAcesFC.js",
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
    
    // <header className="flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4 bg-[#1f1f1f] w-full z-50 text-white">
    <header className="fixed top-0 flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4 bg-[#1f1f1f] w-full z-50 text-white">

      <div className="flex text-3xl font-extrabold items-center font-['GN-Kin-iro_SansSerif',sans-serif]">
        <img className="w-20 h-20" src={logo} alt="logo INDORA" />
        INDORA
      </div>

      <div
        className="flex flex-wrap gap-2 p-1 max-w-full text-xs"
        role="region"
        aria-label="Ferramentas de acessibilidade"
      >
        <h2 className="sr-only">Ferramentas de Acessibilidade</h2>
        <button
          className="text-[0.4rem] px-[0.3rem] py-[0.1rem] border border-gray-400 rounded"
          onClick={() => toggleContraste()}
        >
          Contraste
        </button>
        <button
          className="text-[0.4rem] px-[0.3rem] py-[0.1rem] border border-blue-500 text-blue-500 rounded"
          onClick={() => alterarFonte("aumentar")}
        >
          A+
        </button>
        <button
          className="text-[0.4rem] px-[0.3rem] py-[0.1rem] border border-red-500 text-red-500 rounded"
          onClick={() => alterarFonte("diminuir")}
        >
          A-
        </button>
        <button
          id="btnLeitura"
          className="text-[0.4rem] px-[0.3rem] py-[0.1rem] border border-green-500 text-green-500 rounded"
          onClick={() => lerPagina()}
        >
          <i className="bi bi-volume-up"></i> Ler
        </button>
      </div>

      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-wrap items-center gap-6 text-sm justify-center">
          <li>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <a href="./PaginaInterna1.html" className="hover:underline">
              Mais vendidos
            </a>
          </li>
          <li>
            <a href="./PaginaInterna2.html" className="hover:underline">
              Ofertas do dia
            </a>
          </li>
          <li>
            <a href="./PaginaInterna3.html" className="hover:underline">
              Cadastro
            </a>
          </li>
          <li className="flex items-center gap-1">
            <a href="./shared" className="flex items-center gap-1">
              <FaShoppingCart />
              Carrinho <span id="cart-counter">0</span>
            </a>
          </li>
          <li>
            <a
              href="./PaginaInterna5.html"
              className="bg-[#e60067] hover:bg-[#c4005a] rounded px-4 py-1.5 text-white transition"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
