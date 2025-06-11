import React from 'react'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import { bannerData } from '@/util/mock/data'
import ProductSlider from '@/components/home/ProductSlider'
import { CUSTOMPATHS } from '@/util/enums'
import BestSellers from '@/components/home/BestSellers'
import Head from 'next/head'
import CategorySection from '@/components/home/CategorySection'
import { ProductFetchType } from '@/util/types/types'
import { InstitutionalSectionComponent } from '@/components/home/InstitutionalSectionComponent'
import BannersComponent from '@/components/home/BannersComponent'
import { HeroSection } from '@/components/home/HeroSection'

const addProductJsonLd = (): { __html: string } => {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Semillas",
          "item": "https://felixmenendez.com.ar/catalogo-agropecuario/semillas"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Protección de cultivo",
          "item": "https://felixmenendez.com.ar/catalogo-agropecuario/proteccion-de-cultivo"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fertilizantes",
          "item": "https://felixmenendez.com.ar/catalogo-agropecuario/fertilizantes"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Más insumos agrícolas",
          "item": "https://felixmenendez.com.ar/catalogo-agropecuario/mas-insumos-agricolas"
        }
      ]
    }`,
  };
};

export default  function Home() {
  const productSliderData = {
    title: 'Nuestros productos agropecuarios Felix Menéndez',
    paragraph: 'Explora la variedad de productos en Concordia',
    footerLink: { title: 'Ver todos los productos', value: `${CUSTOMPATHS.CATALOG}` },
    productType: ProductFetchType.HIGHLIGHTED
  };
  const productSliderDataOffers = {
    secondTitle: 'Ofertas imperdibles',
    link: { title: 'Ver mas ofertas', value: `${CUSTOMPATHS.CATALOG}` },
    productType: ProductFetchType.OFFERS
  };

  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://felixmenendez.com.ar" />
        {/* @ts-ignore */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
        />
      </Head>
      <div className='min-h-screen bg-[#EFEFEF] w-full flex flex-col'>
      <BannersComponent />
      <div className='flex flex-col mb-20 mx-auto pt-11 md:pt-[87px] w-full justify-center'>
        <HeroSection/>

        <CategorySection />      
        {/* <CategoryExplorerComponent /> */}

        <InstitutionalSectionComponent/>
        <section className='relative'>
          <img src="assets/images/plants.png" alt="" className='select-none object-cover h-[287px]'/>
          <div className='absolute flex flex-col gap-4 justify-center items-center text-white inset-0'>
            <div className='rounded-[50px] bg-[#8AAE2D] py-5 px-20 text-center'>
              <h2 className='text-size-title font-bold leading-none'>NO MÁS PLAGAS</h2>
              <span className='text-size-subtle leading-none'>SABEMOS LO QUE TU TIERRA NECESITA</span>
            </div>
            <div className='rounded-[50px] bg-[#36450C] font-medium text-size-subtle py-5 px-10'>
              <h3 className='leading-none text-center'>Chequeá todos nuestros insecticidas</h3>
            </div>
          </div>
        </section>
        <ProductSlider {...productSliderData} />
        <ProductSlider {...productSliderDataOffers} />
        <BestSellers/>
        {/* <AboutComponent/> */}
        <SponsorsComponent/>
      </div> 
    </div>
    </>
  )
}
