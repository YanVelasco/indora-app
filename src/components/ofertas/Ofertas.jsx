import CarrosselOfertas from "../../components/ofertas/CarrosselOfertas";
import { CardOfertas } from "../../components/ofertas/CardOfertas";

import promoVideo from "../../assets/videos/MulletMadJackVideo.mp4";
import promoImage from "../../assets/images/ofertas/Mullet-Mad-Jack_WW.jpg";

export default function Ofertas() {
  return (
    <div className="bg-black text-white px-1 pt-1 pb-10 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400 animate-pulse drop-shadow-[0_0_6px_#00f0ff]">Ofertas da Semana</h1>

      <CarrosselOfertas />

      <section className="flex flex-col lg:flex-row items-center gap-10 py-8 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${promoImage})` }}
        >

        <div className="flex-1">
          <h1 className="text-3xl font-bold mt-4 text-cyan-300 drop-shadow-[2px_2px__black]">Promoção da Semana</h1>
          <h3 className="text-xl font-semibold mt-2 drop-shadow-[1px_1px_0px_#00f0ff] ">MULLET MADJACK</h3>
          <p className="hidden sm:block drop-shadow-[2px_2px_0_black]">Faça seu melhor tempo ou tente de novo. Aqui a PRESSA É AMIGA DA PERFEIÇÃO!</p>
          <p className="hidden md:block mt-2 text-sm text-gray-300 drop-shadow-[2px_2px_0_black]">
            Mullet MadJack é um FPS roguelike frenético onde você controla Jack Banhammer, um moderador em 2095 que precisa resgatar um influenciador em um mundo dominado por Robilionários. Com apenas 10 segundos por andar, derrote inimigos para ganhar tempo, usar finalizações e desbloquear upgrades. Inclui campanha, sobrevivência, boss rush e crossover com Ultrakill.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="bg-red-600 px-2 py-1 rounded font-bold">-50%</span>
            <span className="line-through drop-shadow-[1px_1px_1px_black]">R$ 149,90</span>
            <span className="text-pink-600 font-bold drop-shadow-[2px_1px_1px_black]">R$ 74,90</span>
            <button className="ml-4 bg-pink-600 hover:bg-pink-900 px-4 py-2 rounded font-semibold">Comprar Agora</button>
          </div>
        </div>
        <div className="flex-1">
          <video controls className="rounded-lg w-1000 h-60">
            <source src={promoVideo} type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </section>
    </div>
  );
}