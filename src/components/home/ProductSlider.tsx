'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import { CarouselData, Product, ProductFetchType } from '@/util/types/types';
import Link from 'next/link';
import { CUSTOMPATHS } from '@/util/enums';
import { getHighLightedProducts } from '@/services/Supabase/product-services';


export const mockProducts: Product[] = [
  {
    id: 4,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714076354/img_felix/jrtngyp63ptkpdp6iwee.webp",
    name: "C/sulpomag",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 340,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715600988/img_felix/eyseerz4bapen4kbpdwb.jpg",
    name: "Azufre Microthiol WG",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 146,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714075976/img_felix/irjjt6wrdxjkznly60du.webp",
    name: "UREA GRANULADA",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 338,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601146/img_felix/eyta7j4xggr3030oqehj.jpg",
    name: "Amicor",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 23,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978103/img_felix/ka5qlegrp9nmt7d3yq9u.png",
    name: "Magnesio",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 209,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978759/img_felix/j99witow9hy2eimquvva.png",
    name: "MagnesioFM",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  }
];

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
  products?: Product[] | null
  productType: ProductFetchType;
}



const ProductSlider: React.FC<Props> = ({ title, paragraph, secondTitle, link, footerLink, productType }) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      switch (productType) {
        case ProductFetchType.HIGHLIGHTED:
          const highlightedProducts = await getHighLightedProducts();
          setProducts(highlightedProducts || []);
          break;
        case ProductFetchType.OFFERS:
          setProducts(mockProducts);
          break;
        default:
          setProducts([]);
      }
    };

    fetchData();
  }, [productType]);


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
        { products && products.map((product) => (
          <SwiperSlide key={product.id} className="mx-4 my-6">
            <div className="relative max-w-[250px] shadow-md rounded-lg hover-shadow-b group">
              <div className='w-full rounded-lg inset-0 bg-transparent'>
                <div className="bg-white rounded-lg">
                  <img
                    className="w-full h-full rounded-lg object-contain aspect-square"
                    src={product.img ? product.img : ''}
                    alt={product.name ? product.name : ''}
                  />
                </div>
                <div className="absolute flex justify-center bottom-0 w-full rounded-b-lg bg-[#FAF9F9]">
                  <Link href={CUSTOMPATHS.PRODUCT + `?id=${product.id}`} className="text-xl cursor-pointer text-center pb-4 font-semibold group-hover:text-light">
                    {product.name}
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

