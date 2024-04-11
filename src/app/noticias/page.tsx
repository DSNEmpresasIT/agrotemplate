import React from 'react'
import Header from '@/components/common/header'
import { CUSTOMPATHS } from '@/util/enums';

const page = () => {
  const rutas = [`${CUSTOMPATHS.NEWS}`];

  return (
    <div className='min-h-screen'>
        <Header title="Seccion de Noticias" seccion="Sección de la Página" backLinks={rutas} />
    </div>
  )
}

export default page
