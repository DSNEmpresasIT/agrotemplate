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
      <div className=" md:max-w-[1200px] mx-auto w-full  overflow-hidden ">
          <Swiper
            className=" lg:h-full z-0 rounded-md h-[700px]" 
           autoplay={true}
           pagination={{ clickable: true }}
           navigation
           spaceBetween={30}
           slidesPerView={6}
           modules={[Controller, Pagination, Autoplay, Navigation]}
          >
            {img.map((item) => (
              <SwiperSlide
              className=''
              key={item.id}>
                <img
                  className="w-[150px] h-[150px]  object-cover "
                  src={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default SponsorsComponent
