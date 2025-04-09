'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';

import { CUSTOMPATHS } from '@/util/enums';
import { useEffect, useState } from 'react';
import { bannerData } from '@/util/mock/data'
import { getBanners } from '@/services/api/banners-service';
import CarrouselComponent from './CarrouselComponent';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannersComponent = ({}) => {

  const [banners, setBanners] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();
        setBanners(data.banners);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  return (
    <>
      <div className="flex h-[300px] sm:h-[426px] bg-gray-400">
        { banners && banners.length > 0 ?
          <Swiper autoplay={true} modules={[Controller, Navigation, Autoplay]} className='h-full w-full'>
            { banners.map((banner: any, index: number) => (
                <SwiperSlide key={index}>
                  <Link className='relative flex flex-col justify-center items-center h-full bg-cover bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${banner.images.length > 0 ? banner.images[0].url : ''})` }} href={banner.link || CUSTOMPATHS.HOME}>
                    {
                      banner.title &&
                      <h2 className='text-2xl md:text-4xl pb-2 lg:text-5xl md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white'>{banner.title}</h2>
                    }
                    {
                      banner.description &&
                      <p className='text-md md:text-2xl md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white '>{banner.description}</p>
                    }
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper> :
          <CarrouselComponent data={bannerData} />
        }
      </div>
    </>
  )

}

export default BannersComponent;