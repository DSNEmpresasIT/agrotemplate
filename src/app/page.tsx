import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import SponsorsComponent from '@/components/home/SponsorsComponent'
import CategoryExplorerComponent from '@/components/home/CategoryExplorerComponent'
import { bannerData } from '@/util/mock/data'

export default function Home() {
 
  return (
    <div className='min-h-screen w-full flex flex-col '>
       <CarrouselComponent data={bannerData}/> 
       <div className='flex flex-col mb-20 mx-auto  px-4 w-full justify-center  md:max-w-[1140px]  gap-20'>
       <AboutComponent/>
       <CategoryExplorerComponent/>
       <SponsorsComponent/>
       </div>
       
    </div>
  )
}
