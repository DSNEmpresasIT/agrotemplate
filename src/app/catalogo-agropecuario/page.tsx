'use client'

import { useEffect, useState } from "react"

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

function CatalogPage() {
  
    const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);

    const title = "Catálogo";
    const description = "Explora la variedad de nuestros productos ideales para tu proyecto";

    return (
        <>
            <Banner title={title} description={description} />
            <div className="block md:hidden">
              <FiltersComponent hide={true} />
            </div>
            <div className="hidden md:block md:max-w-[1568px] w-full mx-auto px-5">
                <h3 className="text-black w-full mx-auto text-[12px] md:text-2xl lg:text-3xl mt-[81px] font-medium tracking-wide">Categorías</h3>
                <p className="text-black w-full mx-auto text-[12px] md:text-lg lg:text-xl font-normal my-[22px] tracking-wide">Una gama premium de productos para materializar tu visión.</p>
            </div>
            <div className="max-w-[1568px] px-5 w-full mx-auto py-4 md:py-0 mt-2">
                <Backlinks rutas={[CUSTOMPATHS.CATALOG]} />
            </div>
            <article className="hidden md:block mb-20">
                <div className="w-full md:max-w-[1568px] mx-auto px-5">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-black text-[12px] md:text-2xl lg:text-3xl ms-[30px] md:ms-0 font-medium tracking-wide capitalize"></h3>
                    </div>
                    <div className="flex justify-center px-3 mt-[6px] md:mt-5  overflow-hidden w-full relative">
                        <button type='button' className="w-9 h-[34px] p-1 swiper-button-prev-related absolute left-[-8px] md:left-[-10px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className=" text-black/50 hover:text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
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
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-related',
                                prevEl: '.swiper-button-prev-related',
                            }}
                            loop
                            autoplay={true}
                            watchOverflow={false}
                            modules={[Controller, Navigation, Autoplay]}
                            className="h-full flex mx-[50px] w-full max-w-[302px]  sm:max-w-[400px] md:max-w-[1300px]"
                        >
                            {categories && categories?.map((item: any, i: number) => (
                                <SwiperSlide key={i} className=" relative rounded-[10px] w-[82.71px] md:w-[342px] md:max-w-none md:max-h-[355px] h-full">
                                    <img
                                        className=" object-cover  aspect-[82.71/99] md:aspect-square  mx-auto rounded-[5px] md:rounded-[10px] w-full h-full"
                                        alt={'Imagen ' + item.label}
                                        src={item?.images?.length > 0 ? item?.images[0]?.url : '/assets/images/placeholder.png'}
                                    />
                                    <Link href={`${CUSTOMPATHS.CATALOG}/${item.slug}`} className='inset-0 absolute items-center bg-black/20 md:bg-black/30 font-bold justify-center flex text-white rounded-[5px] md:rounded-[10px]'>
                                        <h5 className='uppercase text-center'>{item.label}</h5>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button type='button' className="w-9 h-[34px]  items-center p-1 swiper-button-next-related absolute right-[-8px] md:right-[-10px] top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="text-black/50 hover:text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
            {
              categories && categories.map((category: Category, index: any) => {
                    const childrensMap = category?.childrens?.map((category: Category) => {
                        return {
                            id: category.id,
                            name: category.value,
                            slug: category.slug || '',
                            description: '',
                            images: category.images,
                            product_features: undefined,
                            link: `${CUSTOMPATHS.CATALOG}/${category.slug}`
                        }
                    })
                    return (
                        <article key={index} className="hidden md:block mb-20">
                            <ProductCarousel data={childrensMap} name={category.label || ''} path={category.slug || ''}></ProductCarousel>
                        </article>
                    )
                })
            }
            <div className="md:hidden lg:mx-48 lg:px-24 mb-[35px] md:mb-[181px]">
                {/* <section className="grid grid-cols-3 gap-4 mx-5 my-7 text-center text-xs md:text-base font-semibold">
                    <article className="category-gradient py-8 md:py-14 px-3">Los más vendidos</article>
                    <article className="category-gradient py-8 md:py-14 px-3">Los más consultados</article>
                    <article className="category-gradient py-8 md:py-14 px-3">Agregados recientes</article>
                </section> */}
                <section className="grid grid-cols-2 mx-5 gap-[18px]">
                    {categories && categories.map((category: Category, index: any) => {
                        return (
                            <Link key={index} href={`${CUSTOMPATHS.CATALOG}/${category.slug}`}>
                                <article className="flex relative justify-center items-center hover:cursor-pointer hover:opacity-90 transition-all">
                                    <img src={category?.images[0]?.url || '/assets/images/placeholder.png'} className="rounded-[5px] md:h-82 object-cover w-full" alt="" />
                                    <span className="text-xs font-bold block text-white text-center md:text-2xl absolute uppercase drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">{category.label}</span>
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
