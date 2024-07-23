import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import CategoryExplorerComponent from '@/components/home/CategoryExplorerComponent'
import { bannerData } from '@/util/mock/data'
import ProductSlider from '@/components/home/ProductSlider'

export default function Home() {
 
  return (
    <div className='min-h-screen w-full flex flex-col '>
       <CarrouselComponent data={bannerData}/> 
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1400px]  gap-20'>
       {/* <ProductSlider title='Nuestros productos agropecuarios Felix Menéndez' paragraph='Explora la variedad de productos en concordia'/> */}
       <AboutComponent/>
       <CategoryExplorerComponent/>
       <SponsorsComponent/>
       </div>
       
    </div>
  )
}
