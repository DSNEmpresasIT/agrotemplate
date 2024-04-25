'use client'
import { getLastInstagramReel } from '@/services/instagram-services';
import React, { useEffect, useState } from 'react'


export const LastInstagramReel = ({ INSTAGRAM_TOKEN }: { INSTAGRAM_TOKEN: string }) => {
  const [ lastReel, setLastReel ] = useState<any>();

  useEffect(() => {
    getLastInstagramReel(INSTAGRAM_TOKEN)
      .then(res => setLastReel(res))
      .catch(err => console.log(err))
  }, [INSTAGRAM_TOKEN])
  return (
    <div className='w-full'>
      {
        lastReel 
        ? (
          <a className='w-full' href={lastReel.permalink} target='_blank'>
            <video width='100%' style={{borderRadius: '.375rem'}} src={lastReel.media_url} loop muted autoPlay />
          </a>
        )
        : (
          <span>Loading</span> // TODO Spinner
        )
      }
    </div>
  )
}
