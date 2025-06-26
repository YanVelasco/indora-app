import "../../styles/acessib.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("indora-cart")) || [];
    setCart(storedCart);
  }, []);

  const handleCheckout = () => {
    console.log("Finalizando compra...");
    navigate("/checkout");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto mt-16 rounded-xl p-10 my-20 bg-[#0f0020] ring-4 ring-cyan-400 shadow-[0_0_50px_#00f0ff] text-white">
      <h1 className="text-4xl font-extrabold text-center text-pink-500 mb-10 tracking-widest drop-shadow-[0_0_10px_#ff00ff]">
        CARRINHO DE COMPRAS
      </h1>

      <div className="flex flex-col gap-6 mb-7 text-white">
        {cart.length === 0 ? (
          <p className="text-center text-gray-300 italic">Seu carrinho está vazio.</p>
        ) : (
          cart.map((item, index) => (
            <div className="flex justify-between items-center border-b border-cyan-400 pb-3">
              <div>
                <p className="font-semibold text-cyan-300 drop-shadow-[0_0_5px_#00ffff]">{item.title}</p>
                <p className="text-sm text-gray-400">
                  R$ {item.price.toFixed(2)}
                </p>
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

      <div className="flex justify-end items-center mt-4 mb-2">
        <span className="mb-6 text-cyan-300 text-lg font-medium mr-2">Total:</span>
        <span className="mb-6 text-pink-500 text-2xl font-bold tracking-widest drop-shadow-[0_0_5px_#ff00ff]">
          R$ {total}
        </span>
      </div>

      <div className="text-end">
        {/* <button
          className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-700 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#ff00ff] hover:brightness-125 transition-all duration-300 px-8 py-4"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </button> */}
        <a
          href="/"
          className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-700 text-black text-lg font-bold rounded-xl shadow-[0_0_20px_#ff00ff] hover:brightness-125 transition-all duration-300 px-8 py-4"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </a>
      </div>

      <div className="text-end mt-4">
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
