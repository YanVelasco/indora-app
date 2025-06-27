import SlideOfertas from "./SlideOfertas";
import gif1 from "../../assets/gifs/Rain_World_animation_-_Blue_Liz_sm.gif";
import gif2 from "../../assets/gifs/rainrain-ezgif.com-resize.gif";
import rainWorldImg from "../../assets/images/ofertas/tombraider.jfif";

export default function RainWorldCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-1 ">
      {/* Coluna principal - Card do jogo */}
      <div className="w-full md:w-4xl">
        <div className=" rounded-lg w-1/1 h-80 ">
          <img
            src={rainWorldImg}
            alt="Rain World"
            className="mt-8 w-full h-full object-cover rounded-md"
          />
          <div className="  text-white">
            <h2 className="text-xl font-bold">RAIN WORLD EM PROMOÇÃO</h2>
            <p className="font-semibold hidden md:block mt-2">
              Explore um mundo selvagem com criaturas únicas e perigos
              imprevisíveis.
            </p>
            <div className="flex items rounded-lg">
              <button
                // className="bg-green-600 hover:bg-green-700 text-white px-7 py-2 rounded font-semibold transition"
                className="mt-2 px-7 py-2 bg-pink-600 text-white text-sm rounded hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-[0_0_25px_#ec4899] hover:shadow-[0_0_20px_#db2777] transition-shadow duration-300 ease-in-out"
                data-added="false"
              >
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna dos GIFs */}
      <div className="mt-8 w-full md:w-1/3 flex flex-col justify-start items-center space-y-7 md:flex">
        <img src={gif1} alt="RainWorld GIF" className="w-5/5 h-60 rounded" />
        <img src={gif2} alt="RainWorld GIF2" className="w-5/5 h-60 rounded" />
      </div>
    </div>
  );
}
