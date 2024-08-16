import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import CategoryExplorerComponent from '@/components/home/CategoryExplorerComponent'
import { bannerData } from '@/util/mock/data'
import ProductSlider from '@/components/home/ProductSlider'
import { CUSTOMPATHS } from '@/util/enums'
import BestSellers from '@/components/home/BestSellers'
import Head from 'next/head'
import CategorySection from '@/components/home/CategorySection'
 
export const addProductJsonLd = () => {
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

const productSliderData = {
  title: 'Nuestros productos agropecuarios Felix Menéndez',
  paragraph: 'Explora la variedad de productos en concordia',
  footerLink: { title: 'Ver todos los productos', value: `${CUSTOMPATHS.CATALOG}` },
  imgs: [
    {
      id: 346,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601283/img_felix/lacwkraafgra3caklt1y.webp",
      title: "Cipermetrina",
      description: "",
    },
    {
      id: 326,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601323/img_felix/gfj5wlrvof2bhl6ffhjf.jpg",
      title: "Verosil",
      description: "",
    },
    {
      id: 352,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601683/img_felix/ulobf1xuiaflnfdsnsip.webp",
      title: "Esus",
      description: "",
    },
    {
      id: 358,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601891/img_felix/csm5dhpshq91cu53b4bb.png",
      title: "Imida 60 Nova",
      description: "",
    },
    {
      id: 324,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715602607/img_felix/qsactrtfn4vu4frcjmrx.jpg",
      title: "Tordon 24 K",
      description: "",
    },
    {
      id: 354,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715602443/img_felix/nantarcoxx117ywrgogz.jpg",
      title: "Flipper",
      description: "",
    },
  ],
};


const productSliderDataOffers = {
  imgs: [
    {
      id: 4,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714076354/img_felix/jrtngyp63ptkpdp6iwee.webp",
      title: "C/sulpomag",
      description: "",
    },
    {
      id: 340,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715600988/img_felix/eyseerz4bapen4kbpdwb.jpg",
      title: "Azufre Microthiol WG",
      description: "",
    },
    {
      id: 146,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1714075976/img_felix/irjjt6wrdxjkznly60du.webp",
      title: "UREA GRANULADA",
      description: "",
    },
    {
      id: 338,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601146/img_felix/eyta7j4xggr3030oqehj.jpg",
      title: "Amicor",
      description: "",
    },
    {
      id: 23,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978103/img_felix/ka5qlegrp9nmt7d3yq9u.png",
      title: "Magnesio",
      description: "",
    },
    {
      id: 209,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715978759/img_felix/j99witow9hy2eimquvva.png",
      title: "MagnesioFM",
      description: "",
    }
  ],
  secondTitle: 'Ofertas imperdibles',
  link: { title: 'Ver mas ofertas', value: `${CUSTOMPATHS.CATALOG}` },
};

export default function Home() {
  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://felixmenendez.com.ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
        />
      </Head>
    <div className='min-h-screen w-full flex flex-col '>
       <CarrouselComponent data={bannerData}/> 
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1200px]  gap-20'>
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
