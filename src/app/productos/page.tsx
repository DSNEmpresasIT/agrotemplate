'use client'
import React from 'react'
import Header from '@/components/common/header'

const page = () => {
  const rutas = ['/productos'];

  return (
    <div>
     <Header backLinks={rutas} title='Productos Agropecuarios' seccion='Berardo'/>
  
    </div>
  )
}
export default page