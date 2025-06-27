

export const CardOfertas = ({ jogo }) => (
  <div className="bg-gray-500 p-4 rounded-lg shadow-lg text-center">
    <img src={jogo.img} alt={jogo.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
    <h3 className="text-xl font-bold text-white mb-1">{jogo.title}</h3>
    <p className="text-sm text-black mb-2">{jogo.desc}</p>
    <div className="text-white space-x-2 mb-2">
      <span className="bg-red-600 px-2 py-1 rounded font-bold">{jogo.desconto}</span>
      <span className="line-through text-gray-400">{jogo.preco}</span>
      <span className="text-pink-400 font-bold">{jogo.final}</span>
    </div>
    <button className="mt-2 bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded font-semibold">Comprar</button>
  </div>
);
