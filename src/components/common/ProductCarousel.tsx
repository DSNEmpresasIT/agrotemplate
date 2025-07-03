'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { Product } from '@/util/types/types';
import { CUSTOMPATHS } from '@/util/enums';
import { FaChevronLeft } from "react-icons/fa6";
import { useWindowWidth } from '@/util/hooks';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { clearFilters } from '@/redux/store/features/filterSlice';

interface Props {
  data?: Product[],
  path?: string,
  name?: string,
  title?: string
}
export const ProductCarousel = ({ data, path, name, title }: Props) => {
  if (!data || data.length === 0) return <></>;
  const width = useWindowWidth();
  const dispatch = useDispatch();
  const router = useRouter();
  const slidesToShow = width >= 900 ? 4 : 3;
  const showNavigation = data.length > slidesToShow;

  const handleGoToProduct = (slug:string) => {
    dispatch(clearFilters());
    router.push(`${CUSTOMPATHS.CATALOG}/${slug}.html`);
  };

  return (
    <section className='px-4 max-w-main-wrapper w-full mx-auto text-[#3F5605]'>
      <div>
        <div className="w-full flex flex-col">
          <h3 className="text-size-subtle leading-none font-medium mx-auto w-full carousel-custom-wrapper">
            {title && title.trim() !== '' ? title : `Nuestra selección en ${name}`}
          </h3>
        </div>
        <div className='relative'>
          {showNavigation && (
            <button aria-label='Anterior' title='Anterior' type='button' className="w-6 md:w-8 lg:w-14 aspect-square p-1 swiper-button-prev-related absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10 flex justify-center items-center bg-[#F8F8F8] shadow-md">
              <FaChevronLeft className='text-size-paragraph lg:text-size-item'/>
            </button>
          )}
          <Swiper
            effect="coverflow"
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              850: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1150: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 20,
              }
            }}
            coverflowEffect={{ rotate: 0, stretch: 0, modifier: 1, slideShadows: true }}
            watchOverflow={false}
            navigation={showNavigation ? {
              nextEl: '.swiper-button-next-related',
              prevEl: '.swiper-button-prev-related'
            } : false}
            loop={data.length > slidesToShow}
            autoplay={data.length > slidesToShow}
            modules={[Controller, Navigation, Autoplay]}
            className="h-full flex mx-auto w-full carousel-custom-wrapper"
          >
            {data?.map((item: any, i: number) => (
              <SwiperSlide title={item.name} key={i} className="bg-white my-5 shadow-md overflow-hidden relative rounded-2xl w-[82.71px] md:w-[342px] md:max-w-none">
                <button onClick={()=> handleGoToProduct(item.slug)} className='flex flex-col h-full bg-red-300 w-full'>
                  <img onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/images/placeholder.png'; }} src={item.images.length > 0 && item.images[0].url || '/assets/images/placeholder.png'} alt="" className='w-full aspect-square bg-[#FAF9F9] object-contain' />
                  <div className='p-2 md:p-3 lg:pt-4 md:pb-4 xl:pb-7 bg-[#FAF9F9]'>
                    <span className='text-size-paragraph text-center line-clamp-1'>{item.name}</span>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          {showNavigation && (
            <button aria-label='Siguiente' title='Siguiente' type='button' className="w-6 md:w-8 lg:w-14 aspect-square p-1 swiper-button-next-related absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10 flex justify-center items-center bg-[#F8F8F8] shadow-md">
              <FaChevronLeft className='text-size-paragraph lg:text-size-item rotate-180'/>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}