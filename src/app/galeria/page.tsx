'use client'
import Header from '@/components/common/header';
import { getInstagramPhotos } from '@/services/instagram-services';
import { CUSTOMPATHS, SOCIAL_NETWORKS_LINKS } from '@/util/enums';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiOutlineLink } from 'react-icons/hi';
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl';


export default function page ({ INSTAGRAM_TOKEN = 'IGQWRPR1lXYWdkQWUzVmFBVHI5MmVCUGxpeUVvU2VMaWJvT01OX2ZAsSWdtT01UeW5fRXJJd2NTRmpkX0NmVW50YXlWaUJLZADAzRkRUSV9HWE4tNXJVSEZAFR1Jya04zalVudlhkRlFRRmJ6VGNfTTBhZA3dFQUxKZAW8ZD'}: { INSTAGRAM_TOKEN: string }) {
  const [instagramPhotos, setInstagramPhotos ] = useState<any>();
 useEffect(() => {
    getInstagramPhotos(INSTAGRAM_TOKEN)
      .then(res => setInstagramPhotos(res))
      .catch(err => console.log(err))
  }, [INSTAGRAM_TOKEN])
  const rutas = [ 'galeria'];

   const links = SOCIAL_NETWORKS_LINKS
  return (

    <>
    <Header backLinks={rutas} title={`Galeria de Instagram`} seccion='Berardo'/>
    <div className="min-h-screen w-full  mx-auto max-w-[1200px] px-3 ">
        <div className="mt-4 mb-6 border-b border-inherit  ">
          <div className='justify-between flex '>
          <div className='flex gap-2'>
          <img src="/assets/images/logo/logoGallery.jpg" alt="instagram logo" className='w-16 flex items-center h-16 rounded-full bg-black/60 ' />
            <div >
            <h5 className=' text-lg font-semibold'>felixmenendezsrl</h5>
            <span className='bg-inherit'>{instagramPhotos && instagramPhotos.length} post</span>
            </div>

         </div>

          <div>
            <Link  className="bg-light lab-btn font-semibold px-3 py-2 rounded-sm"  href={SOCIAL_NETWORKS_LINKS.INSTAGRAM}>
            <span>Seguinos</span> 
        </Link>
          </div>
          </div>
       

         
          <div className="flex gap-2 mt-4 pb-2">
                  <a href="https://www.facebook.com/solucionesagropecuariasintegrales" className=" border-blue-600 gap-2 flex items-center">
                    <SlSocialFacebook className="text-blue-600"/> <span>Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/felixmenendezsrl/" className="flex gap-2  items-center" >
                    <SlSocialInstagram className="text-pink-600"/> <span>Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/@lafarmaciadelcampo" className="flex gap-2  items-center">
                    <SlSocialYoutube className="text-red-600" /><span>Youtube</span>
                  </a>
                  <a href="https://linktr.ee/felixmemendezsrl" className="flex gap-2  items-center">
                    <HiOutlineLink className="text-blue-500"/><span>Linktree</span>
                  </a>
            
              </div>
         

        </div>

        <div className="grid auto-rows-[500x] grid-cols-3 mb-6">
  {instagramPhotos?.map((post: any, i: number) => (
    <div key={i}>
      <a  target='_blank' href={post.permalink}><img className='object-cover aspect-square' src={post.media_url} alt="footer-gallery" /></a>
      </div>
   
  ))}
</div>
      </div>
  </>
  )
}
