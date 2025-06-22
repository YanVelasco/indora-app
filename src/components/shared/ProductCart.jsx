// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
// import ProductViewModal from './ProductViewModal';
// import { truncateText } from '../../util/truncateText';

// const containerVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
// };

import "../../styles/acessib.css";
import { Link, useLocation } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaGamepad, FaHandshake, FaGlobe, FaComment, FaLock, FaRecycle } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProductCart = () => {

  const navigate = useNavigate(); // Função chamada ao clicar no botão "Finalizar Compra"

  const handleCheckout = () => {
    console.log("Finalizando compra...");
    navigate("/checkout"); // Redireciona para a rota de checkout
  };

  useEffect(() => {
    const scripts = [
      "/assets/js/cart.js",
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
      <div className="max-w-3xl mx-auto mt-16 bg-[#23272f] rounded-xl shadow-xl p-10 min-h-[400px] my-20">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8 tracking-wide">
          Carrinho de Compras
        </h1>
        <div id="cart-items" className="flex flex-col gap-6 mb-7"></div>
        <div className="flex justify-end items-center mt-4 mb-2">
          <span className="text-white text-lg font-medium mr-2">Total:</span>
          <span className="text-pink-600 text-2xl font-bold tracking-wide">
            R$ <span id="cart-total">0.00</span>
          </span>
        </div>
        <div className="text-end">
          <button
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-800 text-white text-lg font-bold rounded-lg px-8 py-3 mt-4 shadow-md hover:from-pink-400 hover:to-purple-600 transform hover:-translate-y-1 hover:scale-105 transition"
            id="checkout-btn"
            onClick={handleCheckout}
          >
            Finalizar Compra
          </button>
        </div>
        <div className="text-end centralizar-botao">
          <a
            href="./PaginaInterna1.html"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-800 text-white text-lg font-bold rounded-lg px-8 py-3 mt-4 shadow-md hover:from-pink-400 hover:to-purple-600 transform hover:-translate-y-1 hover:scale-105 transition"
            // id="checkout-btn"
          >
            Continuar Comprando
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
