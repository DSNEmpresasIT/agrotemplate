'use client'
import { Product } from '@/util/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const BestProducts = () => {
    const products: Product[] = [
      {
        id: 1,
        name:'KM 4216 VIP3/G',
        img: 'https://www.kws.com/ar/media/maiz/foto-hibrido-km-4216-1024x1024_r_1_1_res_768x768.webp',
        type: '',
        created_at: new Date()
      },
      {
        id: 2,
        name:'KWS 14-408 VIP3',
        img: 'https://www.kws.com/ar/media/new-hibridos/foto-hibrido-kws-14-408-2-1024x1024_r_1_1_res_768x768.webp',
        type: '',
        created_at: new Date()
      }
    ]

  return (
        <div className="flex flex-col gap-2">

            <h5 className='text-white text-lg  pb-4 font-semibold'>Productos Seleccionados</h5>

          <div className="flex flex-col ">
              {
                products?.map((product: Product) => {
                  return (
                    <div className='flex gap-2 py-3' key={product.id}>
                      <div className="h-20 w-20">
                        <a href={`/products/${product.id}`}><img className='w-full object-cover' src={product.img ? product.img : '/assets/images/product/placeholder/placeholder.jpg'} alt="footer-blog" /></a>
                      </div>
                      <div>
                        <Link className='text-white hover:text-light' href={`/products/${product.id}`}><h5>{product.name}</h5></Link>
                        <h6></h6>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
  )
}
