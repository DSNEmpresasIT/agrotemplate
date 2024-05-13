import { CUSTOMPATHS } from '@/util/enums'
import Link from 'next/link'
import React from 'react'

const category = [
    {
        name: 'Fertilizantes',
        img: '/assets/images/categories/fertilizantes.png',
        id: 2,
    },
    {
        name: 'Semillas',
        img: '/assets/images/categories/semillas.png',
        id: 3
    },
    {
        name: 'Proteccion de cultivo',
        img: '/assets/images/categories/proteccionDeCultivo.png',
        id: 4
    },
    {
        name : 'Varios',
        img: '/assets/images/categories/masInSumosAgricolas.png',
        id: 5 
    }
]


const categoryExplorerComponent = () => {
  return (
    <div className='flex gap-10 flex-col'>
         <div className="w-full flex  items-center   gap-2 flex-col">
        <h5 className="text-2xl md:text-4xl font-semibold text-center">Productos Agropecuarios Felix Menendez</h5>
          <p className="text-center flex mx-auto lg:mx-[300px]">
          Explora nuestras categorias de productos agropecuarios en concordia
          </p>
      </div>
      <div className='grid justify-center  sm:grid-cols-2 lg:grid-cols-4  gap-4'>
       {
        category.map((item)=>(
            <div className='p-2 w-full pb-4  max-w-[300px] sm:max-w-full items-center duration-200 hover:-translate-y-2 shadow-lg flex flex-col justify-center  group relative' key={item.id}>
                
                    <div className='overflow-hidden  '>
                        <img className='w-full group-hover:scale-105 aspect-square  duration-200 h-auto object-cover' src={item.img} alt={item.name} />
                    </div>
               
                <div className='py-4'>
                    <Link href={`${CUSTOMPATHS.CATALOG}?categoria=${item.name}`} className='hover:text-light font-semibold text-lg '>{item.name}</Link>
                </div>
                <div className='absolute hidden -bottom-5 group-hover:block'>
                    <Link className=' p-3 rounded-md  absolute lab-btn hover:text-white bg-light ' href={`${CUSTOMPATHS.CATALOG}?categoria=${item.name}`}><span>Explorar</span></Link>
                </div>
            </div>
        ))
       }
    </div>
    </div>
   
  )
}

export default categoryExplorerComponent
