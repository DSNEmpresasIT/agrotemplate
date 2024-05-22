import React from 'react'
import Header from '@/components/common/header'
import { CUSTOMPATHS } from '@/util/enums';
import { BlogComponent } from '@/components/blog/BlogComponent';

const page = () => {
  const rutas = [`${CUSTOMPATHS.NEWS}`];
  const { FACEBOOK_TOKEN = '', FACEBOOK_PAGE_ID = '', INSTAGRAM_TOKEN = ''} = process.env;

  return (
    <div className='min-h-screen'>
        <Header title="Seccion de Noticias" seccion="Sección de la Página" backLinks={rutas} />
        <div className="mt-10 ">
       
            <BlogComponent keys={{ FACEBOOK_TOKEN, FACEBOOK_PAGE_ID, INSTAGRAM_TOKEN }}/>
         
      </div>
    </div>
  )
}

export default page
