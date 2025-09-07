import "../../styles/acessib.css";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../../auth/auth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("indora-cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("indora-cart", JSON.stringify(newCart));
  };

  const incrementItem = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    updateCart(newCart);
  };

  const decrementItem = (index) => {
    const newCart = [...cart];
    if ((newCart[index].quantity || 1) > 1) {
      newCart[index].quantity -= 1;
      updateCart(newCart);
    } else {
      newCart.splice(index, 1);
      updateCart(newCart);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!isAuthenticated()) {
      setShowLoginModal(true);
      return;
    }
    setShowSuccessModal(true);
    setCart([]);
    localStorage.removeItem("indora-cart");
  };

  const total = cart.reduce((sum, item) => {
    const a = 0;
    const b = item.specialPrice || 0;
    const c = 0;
    const q = item.quantity || 1;
    return sum + (a * q * q + b * q + c);
  }, 0).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto mt-16 rounded-xl p-10 my-20 bg-[#0f0020] ring-4 ring-cyan-400 shadow-[0_0_50px_#00f0ff] text-white">
      <h1 className="text-4xl font-extrabold text-center text-pink-500 mb-10 tracking-widest drop-shadow-[0_0_10px_#ff00ff]">
        CARRINHO DE COMPRAS
      </h1>

      <div
        className="flex flex-col gap-6 mb-7 text-white"
        style={{
          maxHeight: '450px',
          minHeight: '120px',
          overflowY: 'auto',
          borderRadius: '0.75rem',
          boxShadow: '0 0 20px 2px #00fff7, 0 0 40px 4px #ff00ea44',
          border: '2px solid #00fff7',
          scrollbarColor: '#00fff7 #18132a',
          scrollbarWidth: 'thin',
        }}
      >
        <style>{`
          .cart-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: #18132a;
          }
          .cart-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #00fff7 0%, #ff00ea 100%);
            border-radius: 8px;
            box-shadow: 0 0 10px #00fff7, 0 0 20px #ff00ea;
          }
        `}</style>
        <div className="cart-scrollbar p-2">
        {cart.length === 0 ? (
          <p className="text-center text-gray-300 italic">Seu carrinho está vazio.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-cyan-400 pb-3">
              <div>
                <p className="font-semibold text-cyan-300 drop-shadow-[0_0_5px_#00ffff]">{item.title}</p>
                <p className="text-sm text-gray-400">
                  R$ {item.specialPrice ? item.specialPrice.toFixed(2) : "-"}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="bg-pink-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold hover:bg-pink-700"
                    onClick={() => decrementItem(index)}
                    aria-label="Diminuir quantidade"
                  >-</button>
                  <span className="text-cyan-300 font-bold text-lg">{item.quantity || 1}</span>
                  <button
                    className="bg-cyan-400 text-black rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold hover:bg-cyan-600"
                    onClick={() => incrementItem(index)}
                    aria-label="Aumentar quantidade"
                  >+</button>
                </div>
              </div>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded shadow-[0_0_10px_#00f0ff]"
                />
              )}
            </div>
          ))
        )}
        </div>
      </div>

      <div className="flex justify-end items-center mt-4 mb-2">
        <span className="mb-6 text-cyan-300 text-lg font-medium mr-2">Total:</span>
        <span className="mb-6 text-pink-500 text-2xl font-bold tracking-widest drop-shadow-[0_0_5px_#ff00ff]">
          R$ {total}
        </span>
      </div>

      <div className="flex flex-col gap-6 items-end mt-8">
        <a
          href="/"
          className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-700 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#ff00ff] hover:brightness-125 transition-all duration-300 px-8 py-4"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </a>
      {/* Modal de login obrigatório */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#18132a] border-4 border-[#ff00ea] rounded-2xl shadow-[0_0_40px_10px_#ff00ea,0_0_80px_20px_#00fff744] p-10 flex flex-col items-center animate-pulse" style={{minWidth: 320, maxWidth: 400}}>
            <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ff00ea" opacity="0.2"/><path d="M12 8v4" stroke="#ff00ea" strokeWidth="2.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1.5" fill="#ff00ea"/><circle cx="12" cy="12" r="10" stroke="#00fff7" strokeWidth="2"/></svg>
            <h2 className="text-2xl font-extrabold text-[#ff00ea] mb-2 mt-4 drop-shadow-[0_0_10px_#ff00ea]">Login obrigatório</h2>
            <p className="text-cyan-400 text-lg mb-6 text-center">Você precisa estar logado para finalizar a compra!</p>
            <button
              className="mt-2 px-8 py-3 bg-gradient-to-r from-[#00fff7] via-[#ff00ea] to-[#00fff7] text-black font-bold rounded-lg shadow-[0_0_20px_#ff00ea] hover:from-[#ff00ea] hover:to-[#00fff7] hover:scale-105 transition-all duration-200 tracking-widest text-lg"
              onClick={() => setShowLoginModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {/* Modal de sucesso */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#18132a] border-4 border-[#00fff7] rounded-2xl shadow-[0_0_40px_10px_#00fff7,0_0_80px_20px_#ff00ea44] p-10 flex flex-col items-center animate-pulse" style={{minWidth: 320, maxWidth: 400}}>
            <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#00fff7" opacity="0.2"/><path d="M7 13l3 3 7-7" stroke="#00fff7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#ff00ea" strokeWidth="2"/></svg>
            <h2 className="text-2xl font-extrabold text-[#00fff7] mb-2 mt-4 drop-shadow-[0_0_10px_#00fff7]">Compra Finalizada!</h2>
            <p className="text-pink-400 text-lg mb-6 text-center">Sua compra foi efetuada com sucesso.<br/>Obrigado por escolher a INDORA!</p>
            <button
              className="mt-2 px-8 py-3 bg-gradient-to-r from-[#ff00ea] via-[#00fff7] to-[#ff00ea] text-black font-bold rounded-lg shadow-[0_0_20px_#00fff7] hover:from-[#00fff7] hover:to-[#ff00ea] hover:scale-105 transition-all duration-200 tracking-widest text-lg"
              onClick={() => setShowSuccessModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-400 to-cyan-500 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#00f0ff] hover:brightness-125 transition-all duration-300 px-8 py-4"
        >
          Continuar Comprando
        </a>
      </div>
    </div>
  );
};

export default Cart;
