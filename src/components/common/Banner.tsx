'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Key } from 'react';
interface Props {
    title?: string;
    description?: string;
    img?: any;
}

const Banner: React.FC<Props> = ({ title, description, img }) => {
    const data = ['/assets/images/carrousel-banner/02.png']
    return (
        <header className={`flex justify-center h-[153px] sm:h-[400px] max-h-[700px] xl:h-[710px] z-40 relative`}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={true}
                modules={[Controller, Navigation, Autoplay]}
                className='h-full  w-full '
            >
                {Array.isArray(img) && img.length > 0 ? (
                    img.map((item: any | undefined, index: Key | null | undefined) => (
                        <SwiperSlide key={index}>
                            <img
                                className='w-full h-full object-cover mix-blend-hard-light bg-black/50'
                                src={item?.url || item}
                                alt={`Slide ${index}`}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    data.map((item: string | undefined, index: Key | null | undefined) => (
                        <SwiperSlide key={index}>
                            <img
                                className='w-full h-full object-cover mix-blend-hard-light bg-black/50'
                                src={item || ''}
                                alt={`Slide ${index}`}
                            />
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
            <div className='bg-black/50 h-full  w-full absolute flex justify-center items-center z-[9999] flex-col pt-[45px]'>
                <h1 className='uppercase sm:text-3xl md:text-4xl lg:text-5xl pb-2 md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white'>{title}</h1>
                <p className='text-xs font-light sm:text-2xl md:text-4xl md:font-semibold max-w-[334px] sm:max-w-[700px] lg:max-w-[900px] xl:max-w-[1500px] w-full text-center text-white tracking-[1.2px]'>
                    {description}
                </p>
            </div>
        </header>
    );
};

export default Banner;
