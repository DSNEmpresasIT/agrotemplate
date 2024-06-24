import Link from 'next/link'
import React from 'react'

export default function notFound(){
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#4a3627]">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img src="/assets/images/logo/404.png" alt="404 Illustration" width={400} height={300} />
        </div>
        <div className="text-2xl mt-4 mb-8 text-light">La pagina a la que intentas acceder no existe</div>

        <Link className="bg-light lab-btn font-semibold px-4 py-3"  href="/">
            <span>Volver a la pagina</span> 
        </Link>
      </div>
    </div>
  )
}





