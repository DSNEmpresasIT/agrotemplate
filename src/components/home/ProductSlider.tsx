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
    id: 37,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714076354/img_felix/jrtngyp63ptkpdp6iwee.webp",
    name: "C/sulpomag",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 314,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715600988/img_felix/eyseerz4bapen4kbpdwb.jpg",
    name: "Azufre Microthiol WG",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 142,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714075976/img_felix/irjjt6wrdxjkznly60du.webp",
    name: "UREA GRANULADA",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 312,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601146/img_felix/eyta7j4xggr3030oqehj.jpg",
    name: "Amicor",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 100,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978103/img_felix/ka5qlegrp9nmt7d3yq9u.png",
    name: "Magnesio",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  },
  {
    id: 187,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978759/img_felix/j99witow9hy2eimquvva.png",
    name: "MagnesioFM",
    created_at: new Date(),
    type: null,
    is_highlighted: false
  }
];

export const highLightedProductsMock: Product[] = [
  {
    id: 72,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1714074160/img_felix/cgs0rzzsobsoa72thhgt.jpg",
    name: "Fosfato Monoamonico",
    created_at: new Date("2023-10-31T12:31:47.647774+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 73,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1714076354/img_felix/jrtngyp63ptkpdp6iwee.webp",
    name: "15-6-16-6 C/sulpomag",
    created_at: new Date("2023-10-31T12:36:47.84066+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 301,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1727806583/img_felix/oxkkfcbcvqpnl8kw2muw.jpg",
    name: "Verosil",
    created_at: new Date("2023-12-28T17:25:28.084801+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 70,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1713564210/img_felix/l3ralke22x7e0rma7xzg.jpg",
    name: "Fosfato Diamonico",
    created_at: new Date("2023-10-30T22:13:08.317317+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 142,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1714075976/img_felix/irjjt6wrdxjkznly60du.webp",
    name: "Urea Granulada",
    created_at: new Date("2023-10-31T11:35:01.628004+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 74,
    img: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1714077075/img_felix/wkce3wwslg8o0yukhvnl.webp",
    name: "15-15-15",
    created_at: new Date("2023-10-31T12:38:44.3186+00:00"),
    type: null,
    is_highlighted: true
  },
  {
    id: 75,
    img: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1713564240/img_felix/zqgq8cmeddgsvdgfsrcm.jpg",
    name: "15-6-15-6 Nitrato Doble",
    created_at: new Date("2023-10-31T12:42:52.65214+00:00"),
    type: null,
    is_highlighted: true
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
          const highlightedProducts = highLightedProductsMock;
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

