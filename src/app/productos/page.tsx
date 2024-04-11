'use client'
import React from 'react'
import Header from '@/components/common/header'
import NavProducts from '@/components/catalog/navProducts';
import { CUSTOMPATHS } from '@/util/enums';

const page = () => {
  const rutas = [`${CUSTOMPATHS.PRODUCTS}`];

  return (
    <div>
     <Header backLinks={rutas} title='Productos Agropecuarios' seccion='Berardo'/>
      <NavProducts/>
    </div>
  )
}
export default page