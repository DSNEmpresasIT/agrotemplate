import { CUSTOMPATHS } from "@/util/enums"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export const HeroSection = () => {
  return (
    <section className='px-4 max-w-main-wrapper w-full mx-auto text-[#3F5605] mb-[90px]'>
      <div className='rounded-[30px] bg-[#8AAE2D14] w-full py-16 relative px-3 lg:px-10'>
        <img src="assets/images/deco/hojitasmuchas-2.png" alt="" className='absolute top-0 right-[60%] select-none' />
        <img src="assets/images/deco/hojitasmuchas-2.png" alt="" className='absolute top-[20%] right-[40%] rotate-90 scale-[-1] select-none' />
        <img src="assets/images/deco/hojitasmuchas-6.png" alt="" className='absolute bottom-0 select-none' />
        <div className='max-w-[1100px] mx-auto relative'>
          <h2 className='flex flex-col font-bold'>
            <span className='text-size-subtle'>IDEALES PARA</span>
            <span className='text-size-item'>TODOS TUS CULTIVOS</span>
          </h2>
          <p className='max-w-[600px] text-size-paragraph text-pretty my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat recusandae eum modi tempora eveniet veniam at asperiores obcaecati perferendis.</p>
          <div className='bg-white rounded-[20px] flex justify-center py-3 relative'>
            <img src="assets/images/deco/hojitasmuchas-1.png" alt="" className='absolute hidden lg:block bottom-[100%] right-0 select-none' />
            <Link href={CUSTOMPATHS.CATALOG} className='font-medium flex gap-5 items-center text-size-item text-[#8AAE2D] text-center'>¿Que necesita tu campo hoy? <span className='hidden sm:block bg-[#8AAE2D] px-4 py-1 rounded-full'><FaArrowRight className='text-white' /></span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}