'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import { CarouselData } from '@/util/types/types';
import Link from 'next/link';
import { CUSTOMPATHS } from '@/util/enums';

interface Link {
  title: string;
  value: string;
}

interface Props {
  title?: string;
  secondTitle?: string;
  link?: Link;
  footerLink?: Link;
  paragraph?: string;
  height?: number;
  imgs: CarouselData[];
}

const ProductSlider: React.FC<Props> = ({ title, paragraph, secondTitle, link, footerLink, imgs }) => {
  return (
    <div>
      <div className="w-full flex items-center gap-2 mb-3 flex-col">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">{title}</h2>
        <p className="text-center flex mx-auto lg:mx-[300px]">{paragraph}</p>
      </div>
      {secondTitle && (
        <div className='md:ms-12 flex gap-2 items-center'>
          <h5 className='font-bold text-3xl'>{secondTitle}</h5>
          {link && (
            <Link className='text-xl' href={link.value} title='Todas los productos del catalogo'>
              {link.title}
            </Link>
          )}
        </div>
      )}
      <Swiper
        className="z-0 rounded-md flex"
        pagination={{ clickable: true }}
        autoplay={true}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 5, 
          },
        }}
        navigation
        modules={[Controller, Autoplay, Navigation]}
      >
        {imgs.map((item) => (
          <SwiperSlide key={item.id} className="mx-4 my-6">
            <div className="relative max-w-[250px] shadow-md rounded-lg hover-shadow-b group">
              <div className='w-full rounded-lg inset-0 bg-transparent'>
                <div className="bg-white rounded-lg">
                  <img
                    className="w-full h-full rounded-lg object-contain aspect-square"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="absolute flex justify-center bottom-0 w-full rounded-b-lg bg-[#FAF9F9]">
                  <Link href={CUSTOMPATHS.PRODUCT + `?id=${item.id}`} className="text-xl cursor-pointer text-center pb-4 font-semibold group-hover:text-light">
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {footerLink && (
        <div className='flex w-full justify-end'>
          <Link href={footerLink.value} title={footerLink.title}>
            {footerLink.title}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;

