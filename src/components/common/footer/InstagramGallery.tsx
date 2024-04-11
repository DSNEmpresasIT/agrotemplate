'use client'
import { getInstagramPhotos } from '@/services/instagram-services';
import React, { useEffect, useState } from 'react'


export const InstagramGallery = ({ INSTAGRAM_TOKEN }: { INSTAGRAM_TOKEN: string }) => {
  const [instagramPhotos, setInstagramPhotos ] = useState<any>();
  // useEffect(() => {
  //   getInstagramPhotos(INSTAGRAM_TOKEN)
  //     .then(res => setInstagramPhotos(res))
  //     .catch(err => console.log(err))
  // }, [INSTAGRAM_TOKEN])

  return (

      <div className="footer-inner">
        <div className="footer-title">
          <h5 className='text-white text-lg  pb-4 font-semibold'>Ultimas publicaciones de Instagram</h5>
        </div>
        <div className="grid gap-1 grid-cols-3">
            {
              instagramPhotos?.map((post: any, index: number) => {
                if (index > 8) return;
                return (
                  <a  key={index} target='_blank' href={post.permalink}><img style={{minHeight: '100%'}} src={post.media_url} alt="footer-gallery" /></a>
                )
              })
            }
        </div>
      </div>

  )
}
