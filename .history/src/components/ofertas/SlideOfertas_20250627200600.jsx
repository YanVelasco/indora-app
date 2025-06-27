export default function SlideOfertas({ image, gif1, gif2, title, promo }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 pb-10">
      {/* Imagem principal com texto sobreposto */}
      <div className="relative  w-full md:w-full   rounded-lg w-1/1 h-90">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md">
          <h2 className="text-white text-xl md:text-2xl font-bold ">{promo}</h2>
        </div>
      </div>
 
      {/* GIFs ao lado */}
      <div className="w-full hidden md:block md:w-2/4 flex flex-col justify-start items-center space-y-7 md:flex">
        <img src={gif1} alt="GIF 1" className="w-full rounded" />
        <img src={gif2} alt="GIF 2" className="w-full rounded" />
      </di