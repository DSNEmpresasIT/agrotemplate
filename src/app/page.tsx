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
import { GiPlantSeed } from "react-icons/gi";
import { FaSeedling } from "react-icons/fa6";
import { FaBugSlash } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";
import { PlagueBanner } from '@/components/home/PlagueBanner'



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

export default function Home() {
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

  const verticalFadeGradient: React.CSSProperties = {
    background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.50) 8.65%, rgba(217, 217, 217, 0.40) 31.73%, rgba(217, 217, 217, 0.30) 49.52%, rgba(217, 217, 217, 0.20) 71.15%, rgba(217, 217, 217, 0.00) 91.35%)'
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
      <div className='min-h-screen w-full flex flex-col'>
        <BannersComponent />
        <div className='flex flex-col mb-20 mx-auto pt-11 md:pt-[87px] w-full justify-center'>

          <HeroSection />
          <div className='max-w-wrapper px-4 mx-auto w-full'>
            <CategorySection />
          </div>
          {/* <CategoryExplorerComponent /> */}

          <div className='relative w-full'>
            <div className='max-w-wrapper mx-auto px-4'>
              <div style={verticalFadeGradient} className='rounded-t-[30px]'>
                <InstitutionalSectionComponent />
                <PlagueBanner />

                <section className='flex gap-y-10 gap-x-20 mx-auto px-4 text-[#3F5605] justify-center flex-wrap my-[100px]'>
                  <div className='flex flex-col text-center max-w-[240px] w-full'>
                    <GiPlantSeed className='mx-auto text-[90px]' />
                    <div className='flex flex-col'>
                      <h3 className='text-size-item font-bold my-2'>Lorem, ipsum.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod dignissimos maxime quidem necessitatibus illo nulla, dolores assumenda quas corporis?</p>
                    </div>
                  </div>
                  <div className='flex flex-col text-center max-w-[240px] w-full'>
                    <FaSeedling className='mx-auto text-[90px]' />
                    <div className='flex flex-col'>
                      <h3 className='text-size-item font-bold my-2'>Lorem, ipsum.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod dignissimos maxime quidem necessitatibus illo nulla, dolores assumenda quas corporis?</p>
                    </div>
                  </div>
                  <div className='flex flex-col text-center max-w-[240px] w-full'>
                    <FaBugSlash className='mx-auto text-[90px]' />
                    <div className='flex flex-col'>
                      <h3 className='text-size-item font-bold my-2'>Lorem, ipsum.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod dignissimos maxime quidem necessitatibus illo nulla, dolores assumenda quas corporis?</p>
                    </div>
                  </div>
                  <div className='flex flex-col text-center max-w-[240px] w-full'>
                    <GiFruitTree className='mx-auto text-[90px]' />
                    <div className='flex flex-col'>
                      <h3 className='text-size-item font-bold my-2'>Lorem, ipsum.</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod dignissimos maxime quidem necessitatibus illo nulla, dolores assumenda quas corporis?</p>
                    </div>
                  </div>
                </section>
                <CategorySection title='Imperdibles para tu campo' />
                <SponsorsComponent />
              </div>
            </div>
          </div>







          {/* <ProductSlider {...productSliderData} />
        <ProductSlider {...productSliderDataOffers} />
        <BestSellers/> */}
          {/* <AboutComponent/> */}
        </div>
      </div>
    </>
  )
}
