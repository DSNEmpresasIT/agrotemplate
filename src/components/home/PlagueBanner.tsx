export const PlagueBanner = () => {  
  return (
    <section className='h-[300px] w-full bg-green-500'>
      <div className='absolute w-full h-[300px] bg-black/50 translate-x-[-50%] left-[50%]'>
        <img src="assets/images/plants.png" alt="" className='w-full h-full object-cover select-none'/>
        <div className='absolute flex flex-col gap-4 justify-center items-center text-white inset-0 px-4'>
          <div className='rounded-[50px] bg-[#8AAE2D] py-5 px-4 sm:px-20 text-center'>
            <h2 className='text-size-title font-bold leading-none'>NO MÁS PLAGAS</h2>
            <span className='text-size-subtle leading-none'>SABEMOS LO QUE TU TIERRA NECESITA</span>
          </div>
          <div className='rounded-[50px] bg-[#36450C] font-medium text-size-subtle py-5 px-10'>
            <h3 className='leading-none text-center'>Chequeá todos nuestros insecticidas</h3>
          </div>
        </div>
      </div>
    </section>
  );
}