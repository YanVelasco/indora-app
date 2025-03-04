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

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3", "bg-banner-color4"];

export const Banner = () => {
    return (
        <div className='py-2 rounded-md'>
            <Swiper
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{
                    clickable: true
                }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                {bannerList.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className={`carousel-item bg-cover bg-center sm:h-[500px] h-96 ${colors[banner.id]}`}>
                            <div className='flex items-center justify-center'>
                                <div className="hidden lg:flex justify-center w-1/2 p-8">
                                    <div className='text-center'>
                                        <h3 className='text-3xl font-bold text-white'>
                                            {banner.title}
                                        </h3>
                                        <h1 className='text-5xl text-white font-bold mt-2'>
                                            {banner.subtitle}
                                        </h1>
                                        <p className='text-white mt-2 mb-6'>
                                            {banner.description}
                                        </p>
                                        <Link className='mt-6 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all duration-500' to='/products'>
                                            Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full lg:w-1/2  flex items-center justify-center p-8'>
                                    <img src={banner?.image} alt={banner.title} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
