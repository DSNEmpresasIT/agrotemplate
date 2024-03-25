import React from 'react'
import Header from '@/components/common/header'

const page = () => {
  const rutas = ['/noticias', '/noticias/incendio'];

  return (
    <div className='min-h-screen'>
        <Header title="Seccion de Noticias" seccion="Sección de la Página" backLinks={rutas} />
    </div>
  )
}

export default page
