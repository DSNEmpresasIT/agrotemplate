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
    paragraph: 'Explora la variedad de productos en concordia',
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
    <div className='min-h-screen bg-white w-full flex flex-col '>
       <BannersComponent />
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1200px]  gap-20'>
        <InstitutionalSectionComponent/>
       <ProductSlider 
        {...productSliderData}
        />
       <ProductSlider 
        {...productSliderDataOffers}/>
        <BestSellers/>
       {/* <AboutComponent/>
       <CategoryExplorerComponent/> */}
       <SponsorsComponent/>
       </div>
       <CategorySection/>
       
    </div>
    </>
  )
}
