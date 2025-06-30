import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation } from "swiper/modules";
import { Image } from '@/util/types/types';

interface SliderProductImgProps {
  images: any[];
  className?: string
}

const SliderProductImg: React.FC<SliderProductImgProps> = ({ images, className }) => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleThumbnailClick = (i: number) => {
    setIndex(i);
    swiperRef.current?.slideTo(i);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-[10px] w-full relative">
        <button aria-label="Anterior" type="button" className="p-1 md:p-2 swiper-button-prev-related absolute left-0 md:left-[45px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10 bg-[#FFB11F8F]">
          <IoIosArrowBack className="text-xl md:text-3xl" />
        </button>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 30 },
          }}
          coverflowEffect={{ rotate: 0, stretch: 0, modifier: 1, slideShadows: true }}
          navigation={{ nextEl: ".swiper-button-next-related", prevEl: ".swiper-button-prev-related" }}
          loop
          watchOverflow={false}
          modules={[Controller, Navigation]}
          className="h-full flex w-full md:max-w-[833px] border-2 border-gray-300 rounded-[20px]"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        >
          {images.map((item: Image, i: number) => (
            <SwiperSlide key={i} className="w-full rounded-[5px] md:rounded-[20px] overflow-hidden">
              <img
                className={`max-h-96 object-contain aspect-video w-full rounded-[5px] ${className ? className : "md:h-auto"}`}
                alt={`Imagen ${i}`}
                src={item.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button aria-label="Siguiente" type="button" className="items-center p-1 md:p-2 swiper-button-next-related absolute right-0 md:right-[45px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10 bg-[#FFB11F8F]">
          <IoIosArrowForward className="text-xl md:text-3xl" />
        </button>
      </div>

      <div className="hidden md:flex flex-wrap gap-2 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            onClick={() => handleThumbnailClick(i)}
            className={`rounded object-cover cursor-pointer h-[80px] w-[80px] border-2 ${index === i ? "border-[#FFB11F8F]" : "border-gray-300"}`}
            src={img.url}
            alt={`Thumbnail ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderProductImg;