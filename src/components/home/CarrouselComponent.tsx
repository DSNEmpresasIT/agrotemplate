'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarouselData } from '@/util/types/types';

interface Props{
  title?: string;
  paragraph?:string
  height?: number;
  data: CarouselData[]
}

const SwiperComponent: React.FC<Props> = ({ data, title, height, paragraph }) => {


  const initialSlide = (): number => {
    if (data.length <= 0){
      return 4
    } else return data.length/2
  }
  
  return (
    <div className={`flex justify-center h-[300px] sm:h-[426px]  z-40 mb-16 relative`}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={true}
        modules={[Controller, Navigation, Autoplay]}
        className='h-full  w-full ' 
      >
        
        {data.map((item) => (

          <SwiperSlide  
            key={item.id}>
              <img className='w-full h-full object-cover mix-blend-hard-light bg-black/50' src={item.image} />
          </SwiperSlide>
        ))} 
      </Swiper>
      <div className='bg-black/50 h-full  w-full absolute flex justify-center items-center z-[9999] flex-col'>
        <h1 className=' text-2xl md:text-4xl lg:text-5xl pb-2 md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white'>Félix Menéndez</h1>
        <p className=' text-md md:text-2xl  md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white '>
          Maximizamos tu rendimiento agropecuario con excelencia y compromiso.
        </p>
      </div>
    </div>
  );
};

export default SwiperComponent;

