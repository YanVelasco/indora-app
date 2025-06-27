export const CardOfertas = ({ jogo }) => (
  <div className="bg-[#121212] p-4 rounded-xl shadow-[0_0_10px_#ec4899] text-center hover:shadow-[0_0_15px_#f472b6] transition-all duration-300">
    <img
      src={jogo.img}
      alt={jogo.title}
      className="rounded-md mb-4 h-40 w-full object-cover"
    />
    <h3 className="text-lg font-bold text-white mb-1">{jogo.title}</h3>
    <p className="text-sm text-gray-300 mb-2">{jogo.desc}</p>
    <div className="text-white space-x-2 mb-3 text-sm">
      <span className="bg-pink-600 px-2 py-1 rounded font-bold text-white">{jogo.desconto}</span>
      <span className="line-through text-gray-400">{jogo.preco}</span>
      <span className="text-pink-400 font-bold">{jogo.final}</span>
    </div>
    <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white font-semibold text-sm shadow-md hover:shadow-lg transition">
      Comprar
    </button>
  </div>
);