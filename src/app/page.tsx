import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import CategoryExplorerComponent from '@/components/home/CategoryExplorerComponent'
import { bannerData } from '@/util/mock/data'
import ProductSlider from '@/components/home/ProductSlider'
import { CUSTOMPATHS } from '@/util/enums'
import BestSellers from '@/components/home/BestSellers'
 
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

const productSliderData = {
  title: 'Nuestros productos agropecuarios Felix Menéndez',
  paragraph: 'Explora la variedad de productos en concordia',
  footerLink: { title: 'Ver todos los productos', value: `${CUSTOMPATHS.CATALOG}` },
  imgs: [
    {
      id: 1,
      image: "/assets/images/sponsor/01.png",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601283/img_felix/lacwkraafgra3caklt1y.webp",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715603442/img_felix/aj0jjpygngarvvt4unbg.png",
      title: "",
      description: "",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601323/img_felix/gfj5wlrvof2bhl6ffhjf.jpg",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
      title: "",
      description: "",
    },
    {
      id: 6,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
      title: "",
      description: "",
    }
  ],
};


const productSliderDataOffers = {
  imgs: [
    {
      id: 1,
      image: "/assets/images/sponsor/01.png",
      title: "",
      description: "",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601283/img_felix/lacwkraafgra3caklt1y.webp",
      title: "",
      description: "",
    },
    {
      id: 3,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715603442/img_felix/aj0jjpygngarvvt4unbg.png",
      title: "",
      description: "",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dicnh3r5h/image/upload/v1715601323/img_felix/gfj5wlrvof2bhl6ffhjf.jpg",
      title: "",
      description: "",
    },
    {
      id: 5,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
      title: "",
      description: "",
    },
    {
      id: 6,
      image: "http://res.cloudinary.com/dicnh3r5h/image/upload/v1715602530/img_felix/yr8mlu35j4raq4o1uqz6.jpg",
      title: "",
      description: "",
    }
  ],
  secondTitle: 'Ofertas imperdibles',
  link: { title: 'Ver mas ofertas', value: `${CUSTOMPATHS.CATALOG}` },
};

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
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1200px]  gap-20'>
       <ProductSlider 
        {...productSliderData}
        />
       <ProductSlider 
        {...productSliderDataOffers}/>
      <BestSellers/>
       <AboutComponent/>
       <CategoryExplorerComponent/>
       <SponsorsComponent/>
       </div>
       
    </div>
    </>
  )
}
