'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import { CarouselData } from '@/util/types/types';
import Link from 'next/link';
import { CUSTOMPATHS } from '@/util/enums';

interface Link{
  title: string,
  value: string,  
}

interface Props{
  title?: string;
  secondTitle?: string;
  link?: Link;
  paragraph?:string;
  height?: number;
  data?: CarouselData[]
}

const img: CarouselData[] = [
  {
    id: 2,
    image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601283/img_felix/lacwkraafgra3caklt1y.webp",
    title: "",
    description: "Descripcion del producto",
  },
  {
    id: 3,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715603442/img_felix/aj0jjpygngarvvt4unbg.png",
    title: "",
    description: "Descripcion del producto",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601323/img_felix/gfj5wlrvof2bhl6ffhjf.jpg",
    title: "",
    description: "Descripcion del producto",
  },
  {
    id: 5,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
    title: "",
    description: "Descripcion del producto",
  },
  {
    id: 6,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
    title: "",
    description: "Descripcion del producto",
  }
];

const BestSellers: React.FC<Props> = ({ title, paragraph, secondTitle, link }) => {


  return (
    <div>
      <div className="w-full flex items-center gap-2 flex-col">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">{title}</h2>
        <p className="text-center flex mx-auto lg:mx-[300px]">
          {paragraph}
        </p>
      </div>
      {
          (secondTitle) && (
            <div className=' md:ms-12 flex gap-2 items-center'>
              <h5 className='font-bold text-3xl'>{secondTitle}</h5>
                {(link)&&(
                  <Link className='text-xl' href={link.value} title='Todas los productos del catalogo'>{link?.title}</Link>
                )}
            </div>
          )
      }
      <Swiper
        className="z-0 rounded-md flex"
        pagination={{ clickable: true }}
        autoplay={true}
        slidesPerView={1}
        modules={[Controller, Autoplay]}
      >
        {img.map((item) => (
          <SwiperSlide key={item.id} className="my-6 px-4">
            <div className=" relative w-full flex  rounded-r-lg shadow-md rounded-lg hover-shadow-b group ">
             
                <div className="max-w-[250px] bg-white">
                    <img
                      className="w-full h-full rounded-lg  object-contain aspect-square"
                      src={item.image}
                      alt={item.title}
                    />
                </div>

                <div className='bg-slate-400 rounded-r-lg p-4 flex w-full'>
                    <div className="w-1/2 bg-red-200">
                        <h5 className="text-xl pb-4 font-semibold group-hover:text-light">
                            {item.title}Claron
                        </h5>
                        <p>{item.description}</p>
                    </div>
                    <div className='w-1/2 flex justify-end items-center'>
                      
                            <div className='flex font-bold text-center flex-col gap-2 pe-4 '>
                                <span className='text-[20px]'> 30% OFF </span>
                                 <span className='text-5xl'> $3000,00 </span>
                       
                            </div>
                    </div>
                </div>
                <div className='bg-green-400 text-white text-xl -bottom-1 -right-4 py-4 px-8 rounded-full absolute'>
                    <span>Top en ventas</span>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex w-full justify-end'>
        <Link href={CUSTOMPATHS.CATALOG} title='Todas los productos del catalogo'>Ver todos los productos</Link>
      </div>
    </div>
  );
};

export default BestSellers