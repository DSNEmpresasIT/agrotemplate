'use client'
import { CarouselData } from '@/util/types/types';
import React from 'react'
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

const SponsorsComponent = () => {
  const img: CarouselData[] = [
    {
      id: 1,
      image: "/assets/images/carrousel/home1-1.jpg",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "/assets/images/carrousel/home2-1.jpg",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "/assets/images/carrousel/home4.jpg",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "/assets/images/carrousel/home5.jpg",
      title: "sexooo",
      description: "",
    },
    {
      id: 6,
      image: "/assets/images/carrousel/home4.jpg",
      title: "",
      description: "",
    },
    {
      id: 7,
      image: "/assets/images/carrousel/home1-1.jpg",
      title: "",
      description: "",
    },
    {
      id: 8,
      image: "/assets/images/carrousel/home2-1.jpg",
      title: "",
      description: "",
    },
  ];


  return (
      <div>
          <Swiper
            className=" z-0 rounded-md " 
           autoplay={true}
           pagination={{ clickable: true }}
           spaceBetween={30}
           slidesPerView={6}
           modules={[Controller, Autoplay, ]}
          >
            {img.map((item) => (
              <SwiperSlide
              className=''
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
