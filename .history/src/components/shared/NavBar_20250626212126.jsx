// import "../../styles/styles.css";
import "../../styles/acessib.css";
import logo from "../../assets/images/logo/SolRetrowaveLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaStore, FaShoppingCart, FaSignInAlt, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Badge } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { isAuthenticated } from "../../auth/auth";

const NavBar = () => {
  const navigate = useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Checa se existe o cookie de autenticação (jwtCookie) usando utilitário
  useEffect(() => {
    function checkAuth() {
      setIsLoggedIn(isAuthenticated());
    }
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("indora-cart")) || [];
      // Soma todas as quantidades dos itens
      const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    }
    checkAuth();
    updateCartCount();
    window.addEventListener("focus", () => {
      checkAuth();
      updateCartCount();
    });
    // Polling para detectar mudanças no cookie e no carrinho
    const interval = setInterval(() => {
      checkAuth();
      updateCartCount();
    }, 1000);
    return () => {
      window.removeEventListener("focus", checkAuth);
      clearInterval(interval);
    };
  }, []);

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

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await fetch("/api/auth/signout", {
        method: "POST",
        credentials: "include"
      });
      // Remove o cookie jwtCookie manualmente (expira imediatamente)
      document.cookie = "jwtCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
      navigate("/signin");
    } catch {
      // erro ao deslogar
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <header className="fixed top-0 flex flex-col md:flex-row md:justify-between items-center px-4 md:px-8 py-4 bg-[#1f1f1f] w-full z-50 text-white">
      {/* <div className="flex text-3xl font-extrabold items-center font-['GN-Kin-iro_SansSerif',sans-serif]"> */}
      <div className="flex text-3xl font-extrabold items-center font-['GN-Kin-iro_SansSerif',sans-serif] text-pink-500 drop-shadow-[0_0_8px_#ff00ff]">
        <img className="w-20 h-20" src={logo} alt="logo INDORA" />
        INDORA
      </div>

      <div
        className="flex flex-wrap gap-2 p-1 max-w-full text-xs relative z-10 md:z-0 ml-20"
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

      <div className="md:hidden flex justify-center w-full mt-2">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <RxCross2 size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* <nav className={`mt-4 md:mt-0 w-full ${menuOpen ? "block z-20" : "hidden"} md:block`}> */}
      {/* <nav className={`mt-4 md:mt-0 w-full ${menuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-center`}> */}
      {/* <nav className={`mt-4 md:mt-0 w-full ${menuOpen ? "block" : "hidden"} md:block`}> */}
      <nav className={`w-full ${menuOpen ? "block" : "hidden"} md:flex md:items-center md:justify-end`}>
        {/* <ul className="flex flex-col md:flex-row items-center gap-6 text-sm justify-center"> */}
        <ul className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Mais vendidos
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Ofertas do dia
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Cadastro
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Link to="/shared" className="flex items-center gap-1">
              <FaShoppingCart />
              Carrinho <span id="cart-counter">{cartCount}</span>
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link
                to="/signin"
                className="bg-[#e60067] hover:bg-[#c4005a] rounded px-4 py-1.5 text-white transition"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white font-semibold"
                disabled={logoutLoading}
              >
                {logoutLoading ? "Saindo..." : "Logout"}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
