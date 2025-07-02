import React from 'react';

import { LuPaperclip } from "react-icons/lu";

export const InstitutionalSectionComponent = () => {
  const institutional = [
    {
      img: "assets/images/services/solucionesagropecuarias.jpg",
      title: "Soluciones agropecuarias",
      description: "Ofrecemos soluciones para el rendimiento y el cuidado de todos tus cultivos. Contamos con productos que optimizan cada etapa del ciclo de crecimiento."
    },
    {
      img: "assets/images/services/servicioyasesoramientos.jpg",
      title: "Servicios y asesoramientos",
      description: "Resuelve todas tus dudas con nuestros profesionales dispuestos a ofrecerte la mejor orientación para maximizar el rendimiento de tus cultivos."
    },
    {
      img: "assets/images/services/productosagropecuarios.jpg",
      title: "Productos de primera calidad",
      description: "Nuestros productos son seleccionados con los más altos estándares de calidad, garantizando seguridad y precios competitivos para cada tipo de cultivo."
    },
    {
      img: "assets/images/services/prioridadsalud.jpg",
      title: "Optimizamos tu produccion",
      description: "Comprometidos a cuidar la salud y el desarrollo de tu campo, proporcionamos productos que fomentan un crecimiento sano y sostenible."
    }
  ];

  const greenGradientStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, rgba(108, 140, 24, 0.40) 0%, rgba(89, 115, 20, 0.40) 29.81%, rgba(72, 93, 16, 0.40) 51.92%, rgba(54, 69, 12, 0.40) 74.52%, rgba(29, 38, 7, 0.40) 100%)'
  };


  return (
    <section className='w-full max-w-main-wrapper mx-auto'>
      <div className='px-3 lg:px-10 pt-10 pb-20 xl:pb-0 flex flex-col xl:flex-row gap-20 xl:gap-10 2xl:gap-20'>

        <div className='flex flex-col gap-10 xl:w-3/5 text-[#2F4004] pb-20'>

          <div className='flex flex-col relative px-3 lg:px-6'>
            <img src="assets/images/deco/hojitasmuchas-7.png" alt=""  className='w-[120px] absolute right-0 select-none'/>
            <h2 className='text-size-title font-bold relative'>TEXTO INSTITUCIONAL</h2>
            <h3 className='text-size-subtle font-medium relative'>Lorem ipsum dolor sit amet.</h3>
            <p className='text-size-item mt-5 relative'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas dolore sed, facilis repellendus atque nemo ea, nihil amet, quo quae voluptates maxime repudiandae beatae asperiores incidunt laudantium quos harum sequi accusamus. Sunt earum voluptates officia repellendus aut, omnis ullam ab, similique numquam doloremque provident commodi exercitationem enim culpa rerum repellat atque doloribus! Repudiandae nihil amet culpa quisquam et ea! Explicabo quidem et commodi voluptates eligendi debitis vitae voluptatum, ut dicta earum ea, voluptatem a? Vero accusamus voluptatibus nam aut saepe expedita molestiae adipisci vitae ipsam dicta! Eum obcaecati omnis, nisi error adipisci quasi odio temporibus at maxime ipsa quos.</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-10'>

            <div className='w-full rounded-tl-[50px] rounded-br-[50px] border-[5px] lg:border-[10px] border-[#8AAE2D] p-2.5 py-4 flex flex-col'>
              <span className='text-center text-size-title font-bold leading-none'>523</span>
              <span className='text-center font-semibold mb-3'>AGROPRODUCTORES</span>
              <p className='text-center text-size-item'>
                Eligieron trabajar y fertilizar su tierra de la mejor manera. Seguro, rápido y confiable.
              </p>
            </div>

            <div className='w-full rounded-tl-[50px] rounded-br-[50px] border-[5px] lg:border-[10px] border-[#8AAE2D] p-2.5 py-4 flex flex-col'>
              <span className='text-center text-size-title font-bold leading-none'>139</span>
              <span className='text-center font-semibold mb-3'>AGROPRODUCTORES</span>
              <p className='text-center text-size-item'>
                Ya están un paso adelante de las plagas. Confiando en nuestros productos de calidad.
              </p>
            </div>

            <div className='w-full rounded-tl-[50px] rounded-br-[50px] border-[5px] lg:border-[10px] border-[#8AAE2D] p-2.5 py-4 flex flex-col'>
              <span className='text-center text-size-title font-bold leading-none'>101</span>
              <span className='text-center font-semibold mb-3'>AGROPRODUCTORES</span>
              <p className='text-center text-size-item'>
                Mejoraron sus cultivos y sus cosechas con las mejores semillas e insumos.
              </p>
            </div>

          </div>

        </div>

        <div className='bg-[#6C8C18] xl:w-2/5 text-white pb-10 relative xl:translate-y-[-80px] h-full'>
          <LuPaperclip className='absolute text-[50px] rotate-[-30deg] top-[-20px] right-[40%] text-[#2F4004]'/>
          <h2 className='my-10 text-center text-size-title'>CARACTERÍSTICAS</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:flex flex-col gap-4'>
            {institutional.map((item) => (
              <div style={greenGradientStyle} className='w-full p-5 flex items-center gap-5'>
                <div className='flex flex-col text-size-item'>
                  <span className='uppercase font-bold'>{item.title}</span>
                  <p>{item.description}</p>
                </div>
                <img src={item.img} alt="" className='aspect-square w-[50px] md:w-[85px] rounded-full'/>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
