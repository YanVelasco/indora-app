export default function SlideOfertas({ image, gif1, gif2, title, promo }) {
  return (
    <div className="flex items-center gap-6 bg-gray-800 p-4 rounded-lg">
      <div className="flex-1">
        <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover mb-2" />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <h3 className="text-lg text-cyan-400">{promo}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <img src={gif1} alt="GIF 1" className="w-24 h-24 rounded" />
        <img src={gif2} alt="GIF 2" className="w-24 h-24 rounded" />
      </div>
    </div>
  );
}
