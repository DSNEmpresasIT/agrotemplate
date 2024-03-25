import AboutComponent from '@/components/home/AboutComponent'
import CarrouselComponent from '@/components/home/CarrouselComponent'
import { bannerData } from '@/mock/data'

export default function Home() {
 
  return (
    <div className='min-h-screen w-full flex flex-col'>
       <CarrouselComponent data={bannerData}/> 
       <AboutComponent/>
    </div>
  )
}
