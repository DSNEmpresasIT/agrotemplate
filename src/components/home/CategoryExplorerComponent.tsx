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
    <div className='flex gap-4 mx-auto px-2 w-full justify-center  md:max-w-[1140px] mb-20 '>
       {
        category.map((item)=>(
            <div className='p-2 bg-red-300 group relative' key={item.id}>
                <div className='max-W-[500px] max-h-[400px] min-h-[200px] max-w-[400px]'>
                <img className='w-full h-auto object-cover' src={item.img} alt={item.name} />
                </div>
                <div>
                    <h1 className='hover:text-light font-semibold text-lg'>{item.name}</h1>
                </div>
                <Link className='hidden absolute group-hover:flex hover:text-light' href={`${CUSTOMPATHS.CATALOG}?category=${item.name}`}></Link>

            </div>
        ))
       }
    </div>
  )
}

export default categoryExplorerComponent
