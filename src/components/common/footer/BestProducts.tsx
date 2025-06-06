'use client'
import { Product } from '@/util/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const BestProducts = () => {
    const products: Product[] = [
      {
        id: 174,
        name: 'Mastermins Plus',
        img: '/assets/images/selectedProducts/masterminsplus.png',
        type: '',
        created_at: new Date(),
        is_highlighted: true,
        images: [],
        description: '',
        product_features: {
          id: 0,
          created_at: new Date(),
          catalogType: '',
          feature_text: '',
          pdffiles: '',
          items: [],
          specs: []
        },
        categories: [],
        slug: 'masterminds-plus',
        link: ''
      },
      {
        id: 264,
        name: 'Claron',
        img: '/assets/images/selectedProducts/claron.png',
        type: '',
        created_at: new Date(),
        is_highlighted: true,
        images: [],
        description: '',
        product_features: {
          id: 0,
          created_at: new Date(),
          catalogType: '',
          feature_text: '',
          pdffiles: '',
          items: [],
          specs: []
        },
        categories: [],
        link: '',
        slug: 'claron'
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
                        <a href={`/catalogo-agropecuario/${product.slug}`}><img className='w-full object-cover' src={product.img ? product.img : '/assets/images/product/placeholder/placeholder.jpg'} alt="footer-blog" /></a>
                      </div>
                      <div>
                        <Link className='text-white hover:text-light' href={`/catalogo-agropecuario/${product.slug}`}><h5>{product.name}</h5></Link>
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
