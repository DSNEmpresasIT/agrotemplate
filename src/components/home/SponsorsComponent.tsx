'use client'
import { CarouselData } from '@/util/types/types';
import React from 'react'
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

const SponsorsComponent = () => {
  const img: CarouselData[] = [
    {
      id: 1,
      image: "/assets/images/sponsor/01.png",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "/assets/images/sponsor/02.png",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "/assets/images/sponsor/03.png",
      title: "",
      description: "",
    },
    {
      id: 4,
      image: "/assets/images/sponsor/04.png",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "/assets/images/sponsor/05.png",
      title: "",
      description: "",
    }
  ];


  return (
      <div className=''>
          <Swiper
          key={20202}
            className=" z-0 rounded-md flex  " 
           autoplay={true}
           pagination={{ clickable: true }}
           spaceBetween={0}
           slidesPerView={4}
           modules={[Controller, Autoplay, ]}
          >
            {img.map((item) => (
              <SwiperSlide
              className='flex items-center'
              key={item.id}>
                <img
                  className="aspect-square  object-cover "
                  src={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default SponsorsComponent
