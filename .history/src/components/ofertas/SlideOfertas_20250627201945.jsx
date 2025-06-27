export default function SlideOfertas({ image, gif1, gif2, title, promo, price }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 pb-10">
      
      {/* Imagem principal com sobreposição de conteúdo */}
      <div className="relative w-full md:w-full rounded-lg h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
        
        {/* Texto sobreposto */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md">
          <div className="text-center text-white px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg">
              {promo}
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <span className="text-lg font-semibold">{price}</span>
             
             </div>

              <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded font-semibold shadow-md absolute bottom-4 left-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded font-semibold shadow-md">
                Comprar Agora
              </button>


              



            
          </div>
        </div>
      </div>

      {/* GIFs laterais */}
      <div className="w-full hidden md:flex md:w-2/4 flex-col justify-start items-center space-y-6">
        <img src={gif1} alt="GIF 1" className="w-full rounded" />
        <img src={gif2} alt="GIF 2" className="w-full rounded" />
      </div>
    </div>
  );
}