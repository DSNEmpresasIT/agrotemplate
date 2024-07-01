'use client'
import React, { Suspense } from 'react'
import Header from '@/components/common/header'
import NavProducts from '@/components/catalog/navProducts';
import { CUSTOMPATHS } from '@/util/enums';

const page = () => {
  const rutas = [`${CUSTOMPATHS.CATALOG}`];

  return (
    <div>
     <Header backLinks={rutas} title='Productos Agropecuarios' seccion='Berardo'/>
     <Suspense fallback={<div>Cargando...</div>}>
      <NavProducts/>
     </Suspense>
    </div>
  )
}
export default page