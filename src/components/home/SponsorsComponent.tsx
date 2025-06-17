'use client'
import { CarouselData } from '@/util/types/types';
import React from 'react'
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';

const SponsorsComponent = () => {
  
  const imagesPath = '/assets/images/sponsor';
  const sponsors = new Array(18).fill(undefined);

  const breakpoints = {
    320: {
      slidesPerView: 6,
      spaceBetween: 14,
    },
    640: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 44,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 64,
    }
  }

  return (
    <section className='max-w-wrapper w-full px-4 mx-auto flex flex-col justify-center gap-5 md:gap-16 mb-[60px] md:mb-[150px]'>
      <h5 className='text-size-subtle leading-none text-[#3f5605] text-center font-medium'>Asociados</h5>
      <article className="overflow-hidden w-full mx-auto">
        <Swiper
          className="z-0 flex rounded-md"
          loop={true}
          spaceBetween={0}
          slidesPerView={8}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={breakpoints}
        >
          {sponsors.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center py-3">
              <div className='rounded-full p-3 max-w-[170px] w-full aspect-square flex overflow-hidden bg-white shadow-md'>
                <img
                  src={imagesPath + `/${index+1}.png`}
                  alt={`Asociado ${index+1}`}
                  className="w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  )
}

export default SponsorsComponent
