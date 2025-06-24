import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Pagination, EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { bannerList } from '../../util/BannerList';
import { Link } from 'react-router-dom';

const colors = [
    'from-[#0f0026] via-[#1a0033] to-[#ff00ea]',
    'from-[#1a0033] via-[#00fff7] to-[#0f0026]',
    'from-[#ff00ea] via-[#00fff7] to-[#1a0033]',
    'from-[#00fff7] via-[#ff00ea] to-[#0f0026]'
];

export const Banner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                effect="fade"
            >
                {bannerList.map((banner, idx) => (
                    <SwiperSlide key={banner.id}>
                        <div
                            className={`carousel-item relative bg-gradient-to-br ${colors[idx % colors.length]} sm:h-[500px] h-96 flex items-center justify-center shadow-[0_0_60px_10px_#00fff7,0_0_120px_20px_#ff00ea44] border-4 border-[#00fff7]`}
                        >
                            <div className="absolute inset-0 bg-black/40 z-0 rounded-md" />
                            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full relative z-10">
                                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#00fff7] drop-shadow-[0_0_10px_#00fff7] tracking-widest text-center animate-pulse">
                                        {banner.title}
                                    </h3>
                                    <h1 className="text-4xl md:text-6xl text-[#ff00ea] font-extrabold mt-2 mb-2 drop-shadow-[0_0_20px_#ff00ea] text-center animate-pulse">
                                        {banner.subtitle}
                                    </h1>
                                    <p className="text-[#e0e0e0] mt-2 mb-6 text-lg text-center max-w-xl">
                                        {banner.description}
                                    </p>
                                    <Link
                                        className="mt-6 bg-gradient-to-r from-[#ff00ea] via-[#00fff7] to-[#ff00ea] text-black font-bold py-2 px-8 rounded-lg shadow-[0_0_20px_#00fff7] hover:from-[#00fff7] hover:to-[#ff00ea] hover:scale-105 transition-all duration-200 tracking-widest text-lg border-2 border-[#00fff7]"
                                        to="/products"
                                    >
                                        Ver Jogos
                                    </Link>
                                </div>
                                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                                    <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_10px_#ff00ea] border-4 border-[#ff00ea] bg-black/60 flex flex-col items-center">
                                        <img
                                            src={banner?.image}
                                            alt={banner.title}
                                            className="object-contain max-h-72 sm:max-h-96 w-auto transition-transform duration-500 hover:scale-105 drop-shadow-[0_0_30px_#00fff7]"
                                        />
                                        <div className="mt-4 text-center">
                                            <span className="block text-2xl md:text-3xl font-bold text-[#00fff7] drop-shadow-[0_0_10px_#00fff7] tracking-widest animate-pulse">
                                                {banner.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
