import { useState } from "react";
import SlideOfertas from "./SlideOfertas";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import gif1 from "../../assets/gifs/Rain_World_animation_-_Blue_Liz_sm.gif";
import gif2 from "../../assets/gifs/rainrain-ezgif.com-resize.gif";

import gif3 from "../../assets/gifs/outerwilds.gif";
import gif4 from "../../assets/gifs/outerouter.gif";

import gif5 from "../../assets/gifs/tomb.gif";
import gif6 from "../../assets/gifs/tomb1.gif";

import TombImg from "../../assets/images/ofertas/tombraider.jfif";
import OuterWildsImg from "../../assets/images/ofertas/OuterWilds.png"
import RainWorldImg from "../../assets/images/ofertas/RainWorld.png"



const slides = [
  {
    image: RainWorldImg,
    gif1: gif1,
    gif2: gif2,
    title: "Rain World",
    
  },
  {
    image: OuterWildsImg,
     gif1: gif3,
    gif2: gif4,
    title: "OuterWilds",
    
  },
  {
    image: TombImg,
     gif1: gif5,
    gif2: gif6,
    title: "TombRaider",
    
  },
];

export default function CarrosselOfertas() {
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const proximo = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">

      <SlideOfertas {...slides[index]} />

<button
  onClick={anterior}
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
>
  <FiChevronLeft size={24} />
</button>

<button
  onClick={proximo}
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
>
  <FiChevronRight size={24} />
</button>
    </div>
  );
}
