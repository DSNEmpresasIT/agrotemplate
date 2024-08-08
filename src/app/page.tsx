import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import CategoryExplorerComponent from '@/components/home/CategoryExplorerComponent'
import { bannerData } from '@/util/mock/data'
 
const addProductJsonLd = () => {
  return {
    __html: `{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Semillas",
        "item": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Semillas"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Protección de cultivo",
        "item": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Protección+de+cultivo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fertilizantes",
        "item": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Fertilizantes"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Más insumos agrícolas",
        "item": "https://felixmenendez.com.ar/productos-felix-menendez?categoria=Mas+insumos+agrícolas"
      }
    ]
    }`
  }
}
export default function Home() {
  return (
    <>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addProductJsonLd()}
        key="BreadcrumbList"
      />
    </head>
    <div className='min-h-screen w-full flex flex-col '>
       <CarrouselComponent data={bannerData}/> 
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1400px]  gap-20'>
       {/* <ProductSlider title='Nuestros productos agropecuarios Felix Menéndez' paragraph='Explora la variedad de productos en concordia'/> */}
       <AboutComponent/>
       <CategoryExplorerComponent/>
       <SponsorsComponent/>
       </div>
       
    </div>
    </>
  )
}
