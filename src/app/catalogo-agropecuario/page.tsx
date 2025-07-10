'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { useGetCategoriesWithChildrenQuery } from "@/redux/service/category-api";
import Banner from "@/components/common/Banner";
import { FiltersComponent } from "@/components/catalog/FiltersComponent";
import Backlinks from "@/components/common/backLinks";
import { CUSTOMPATHS } from "@/util/enums";
import { Category } from "@/util/types/types";
import { ProductCarousel } from "@/components/common/ProductCarousel";
import { FaChevronLeft } from "react-icons/fa6";
import CategorySection from "@/components/home/CategorySection";

function CatalogPage() {

  const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);
  const showNavigation = true;

  const title = "Catálogo";
  const description = "Explora la variedad de nuestros productos ideales para tu proyecto";

  return (
    <>
      <Banner title={title} description={description} />
      <div className="block md:hidden">
        <FiltersComponent hide={true} />
      </div>
      <div className="hidden md:block max-w-main-wrapper w-full mx-auto px-4 mt-10 text-[#3F5605]">
        <h3 className="w-full mx-auto text-size-subtle font-medium">Categorías</h3>
        <p className="w-full mx-auto text-size-item font-normal">Una gama premium de productos para materializar tu visión.</p>
      </div>
      <div className="max-w-main-wrapper px-4 w-full mx-auto mt-4 mb-10">
        <Backlinks rutas={[CUSTOMPATHS.CATALOG]} />
      </div>

      <section className='hidden md:block px-4 max-w-main-wrapper w-full mx-auto text-[#3F5605] mb-10'>
        <div className="px-4">
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
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                }

              }}
              coverflowEffect={{ rotate: 0, stretch: 0, modifier: 1, slideShadows: true }}
              watchOverflow={false}
              navigation={showNavigation ? {
                nextEl: '.swiper-button-next-related',
                prevEl: '.swiper-button-prev-related'
              } : false}
              loop={false}
              // autoplay={simplifiedCategories.length > slidesToShow}
              modules={[Controller, Navigation, Autoplay]}
              className="h-full flex mx-auto w-full carousel-custom-wrapper"
            >
              {categories && categories?.map((item: any, i: number) => (
                <SwiperSlide title={item.title} key={i} className="bg-white my-5 shadow-md overflow-hidden relative rounded-2xl w-[82.71px] md:w-[342px] md:max-w-none group">
                  <Link href={`${CUSTOMPATHS.CATALOG}/${item.slug}`}>
                    <img src={item?.images?.length > 0 ? item?.images[0]?.url : '/assets/images/placeholder.png'} alt="" className='w-full scale-110 aspect-square bg-[#FAF9F9] object-cover select-none group-hover:scale-100 duration-500' />
                    <div className="absolute inset-0 bg-black/30 flex justify-center items-center p-4">
                      <span className='text-size-aux md:text-size-item text-white font-medium text-center uppercase'>{item.label}</span>
                    </div>
                  </Link>
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
      {
        categories && categories.map((category: Category, index: any) => {
          const childrensMap = category?.childrens?.map((category: Category) => {
            return {
              id: category.id,
              name: category.name,
              slug: category.slug || '',
              label: category.label || '',
              description: category.description || '',
              images: category.images,
              product_features: undefined,
              link: `${CUSTOMPATHS.CATALOG}/${category.slug}`
            }
          })
          if (childrensMap.length < 1) {
            return;
          }
          return (
            <article key={index} className="hidden md:block px-4 w-full max-w-main-wrapper mx-auto mb-10">
              <CategorySection data={childrensMap} title={category.label || ''}></CategorySection>
            </article>
          )
        })
      }
      <div className="md:hidden mb-[35px] md:mb-[181px] px-4">
        {/* <section className="grid grid-cols-3 gap-4 mx-5 my-7 text-center text-xs md:text-base font-semibold">
          <article className="category-gradient py-8 md:py-14 px-3">Los más vendidos</article>
          <article className="category-gradient py-8 md:py-14 px-3">Los más consultados</article>
          <article className="category-gradient py-8 md:py-14 px-3">Agregados recientes</article>
        </section> */}
        <section className="grid grid-cols-2 gap-[18px]">
          {categories && categories.map((category: Category, index: any) => {
            return (
              <Link key={index} href={`${CUSTOMPATHS.CATALOG}/${category.slug}`}>
                <article className="flex relative justify-center items-center hover:cursor-pointer hover:opacity-90 transition-all h-full">
                  <img src={category?.images[0]?.url || '/assets/images/placeholder.png'} className="rounded-2xl md:h-82 object-cover w-full h-full" alt="" />
                  <span className="text-size-item font-bold block text-white text-center absolute uppercase drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">{category.label}</span>
                </article>
              </Link>
            )
          })}
        </section>
      </div>
    </>
  );
}

export default CatalogPage;
