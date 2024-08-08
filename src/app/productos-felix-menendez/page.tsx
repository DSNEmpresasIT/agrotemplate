
import React, { Suspense } from 'react'
import Header from '@/components/common/header'
import NavProducts from '@/components/catalog/navProducts';
import { CUSTOMPATHS } from '@/util/enums';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalogo',
  description: 'Productos agropecuarios'
};



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