'use client'
import { Product } from '@/util/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const BestProducts = () => {
    const products: Product[] = [
      {
        id: 1,
        name:'Claron',
        img: '/assets/images/about/01.png',
        type: '',
        created_at: new Date()
      },
      {
        id: 2,
        name:'Claron',
        img: '/assets/images/about/02.png',
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
                    <div className='flex py-3' key={product.id}>
                      <div className="thumb">
                        <a href={`/products/${product.id}`}><img src={product.img ? product.img : '/assets/images/product/placeholder/placeholder.jpg'} alt="footer-blog" /></a>
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
