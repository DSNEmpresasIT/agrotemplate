'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
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
    id: 85,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715603442/img_felix/aj0jjpygngarvvt4unbg.png",
    title: "Harvest More Micro Granulado",
    slug: "harvest-more-micro-granulado",
    description: "Harvest More Micro Granulados es un fertilizante completo con Nitrógeno, Fósforo y Potasio, y micronutrientes esenciales.",
  },
  {
    id: 70,
    image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1713564210/img_felix/l3ralke22x7e0rma7xzg.jpg",
    title: "Fosfato Diamonico",
    slug: "fosfato-diamonico",
    description: "El Fosfato Diamónico (DAP) es un fertilizante complejo que asegura la nutrición en fósforo durante todo el ciclo de crecimiento y desarrollo del cultivo",
  },
  {
    id: 332,
    image: "	https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601891/img_felix/csm5dhpshq91cu53b4bb.png",
    title: "Imida 60 Nova",
    slug: "imida-60-nova",
    description: "IMIDA NOVA 60 es un insecticida para el tratamiento de semillas",
  },
  {
    id: 299,
    image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
    title: "Tordon 24 K",
    slug: "tordon-24-k",
    description: "Tordon® 24K es un herbicida sistémico y selectivo para cereales, caña de azúcar y praderas, que controla malezas de hoja ancha.",
  }
];

const BestSellers: React.FC<Props> = ({ title, paragraph, secondTitle, link }) => {


  return (
    <div className='max-w-[1300px] w-full mx-auto'>
      <div className="w-full flex items-center gap-2 flex-col">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">{title}</h2>
        <p className="text-center flex mx-auto">
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
        className="z-0 rounded-md flex bestSellers"
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 6000, 
          disableOnInteraction: false,
        }}
        modules={[Controller, Autoplay, Pagination]}
      >
        {img.map((item) => (
          <SwiperSlide key={item.id} className="my-6 px-4">
            <div className=" relative w-full md:flex-row flex-col flex rounded-r-lg shadow-md border rounded-lg hover-shadow-b group ">
             
                <div className="w-full md:max-w-[425px] bg-white rounded-l-lg overflow-hidden">
                    <img
                      className="w-full h-full rounded-lg  object-contain aspect-video"
                      src={item.image}
                      alt={item.title}
                    />
                </div>

                <div className='bg-layout rounded-r-lg p-4 pb-10  flex flex-col md:flex-row  w-full'>
                    <div className="md:w-1/2 w-full  flex flex-col">
                       <Link href={`${CUSTOMPATHS.PRODUCT}/${item.slug}`} title={item.title}>
                        <h5 className="text-lg md:text-xl lg:text-2xl pb-4 font-semibold group-hover:text-light">
                            {item.title}
                        </h5>
                        </Link>
                        <p className='text-sm md:text-base'>{item.description}</p>
                    </div>
                    <div className='w-1/2  justify-end items-center md:flex-row flex-col flex'>
                      
                            <div className='flex font-bold text-center flex-col gap-2 pe-4 '>
                                <span className='text-[15px] md:text-[20px]'>Hasta 20% OFF</span>
                                 <span className='text-lg md:text-xl lg:text-2xl'>Consulta</span>
                       
                            </div>
                    </div>
                </div>
                <div className='bg-[#A8CF45] text-white text-lg md:text-xl lg:text-2xl -bottom-1 -right-4 py-3 px-6 rounded-full absolute'>
                    <span>Top en ventas</span>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex w-full justify-end text-sm md:text-lg lg:text-xl'>
        <Link href={CUSTOMPATHS.CATALOG} title='Todas los productos del catalogo'>Ver todos los productos</Link>
      </div>
    </div>
  );
};

export default BestSellers