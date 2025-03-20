import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { Product } from '@/util/types/types';
import CardComponent from '../catalog/CardComponent';
import { CUSTOMPATHS } from '@/util/enums';

interface Props {
  data?: any[],
  path?: string,
  name?: string,
  title?: string
}
export const ProductCarousel = ({ data, path, name, title }: Props) => {
  if (!data || data.length === 0) return <></>;
  return (
    <div className="w-full md:max-w-[1568px] mx-auto px-5">
      <div className="flex flex-col justify-start">
        <h3 className="text-black text-[12px] md:text-3xl ms-[30px] md:ms-0 font-medium tracking-wide">
          {title && title.trim() !== '' ? title : `Nuestra selección en ${name}`}
        </h3>
      </div>
      <div className="flex justify-center px-3 mt-[6px] md:mt-5  overflow-hidden w-full relative">
        <button type='button' className="w-9 h-[34px] p-1 swiper-button-prev-related absolute left-[-8px] md:left-[-10px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-black/50 hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          coverflowEffect={{ rotate: 0, stretch: 0, modifier: 1, slideShadows: true }}
          navigation={{ nextEl: '.swiper-button-next-related', prevEl: '.swiper-button-prev-related' }}
          loop
          autoplay={true}
          watchOverflow={false}
          modules={[Controller, Navigation, Autoplay]}
          className="h-full flex mx-[50px] w-full max-w-[302px]  sm:max-w-[400px] md:max-w-[1300px]"
        >
          {data?.map((item: Product, i: number) => (
            <SwiperSlide key={i} className=" relative rounded-[10px] w-[82.71px] md:w-[342px] md:max-w-none md:max-h-[416px] h-full">
              <CardComponent data={item} filtro={''}></CardComponent>
            </SwiperSlide>
          ))}
        </Swiper>

        <button type='button' className="w-9 h-[34px]  items-center p-1 swiper-button-next-related absolute right-[-8px] md:right-[-10px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black/50 hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className='flex max-w-[302px] md:max-w-[1366px] mx-auto justify-end md:me-[38px] mt-[6px] mb-[45px]'>
        <Link className='text-black text-[10px] font-medium md:text-[25px]' href={`${CUSTOMPATHS.CATALOG}/${path}`}>Ver todos</Link>
      </div>
    </div>
  )
}