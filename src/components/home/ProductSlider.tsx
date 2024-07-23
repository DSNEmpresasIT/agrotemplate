'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import { CarouselData } from '@/util/types/types';

interface Props{
  title?: string;
  paragraph?:string
  height?: number;
  data?: CarouselData[]
}

const img: CarouselData[] = [
  {
    id: 1,
    image: "/assets/images/sponsor/01.png",
    title: "",
    description: "",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601283/img_felix/lacwkraafgra3caklt1y.webp",
    title: "",
    description: "",
  },
  {
    id: 3,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715603442/img_felix/aj0jjpygngarvvt4unbg.png",
    title: "",
    description: "",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601323/img_felix/gfj5wlrvof2bhl6ffhjf.jpg",
    title: "",
    description: "",
  },
  {
    id: 5,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
    title: "",
    description: "",
  },
  {
    id: 6,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
    title: "",
    description: "",
  }
];

const ProductSlider: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <div>
      <div className="w-full flex items-center gap-2 flex-col">
        <h5 className="text-2xl md:text-4xl font-semibold text-center">{title}</h5>
        <p className="text-center flex mx-auto lg:mx-[300px]">
          {paragraph}
        </p>
      </div>
      <Swiper
        className="z-0 rounded-md flex"
        pagination={{ clickable: true }}
        autoplay={true}
        slidesPerView={5}
        navigation
        modules={[Controller, Autoplay, Navigation]}
      >
        {img.map((item) => (
          <SwiperSlide key={item.id} className="mx-4 my-6">
            <div className="rounded-xl shadow-md hover-shadow-b bg-white group flex flex-col justify-center items-center">
              <div className="max-w-[250px] w-full">
                <img
                  className="w-full h-full object-contain aspect-square"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="w-full bg-[#FAF9F9]">
                <h5 className="text-xl text-center mb-1 font-semibold group-hover:text-light">
                  {item.title}
                </h5>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider
