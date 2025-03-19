'use client'
import { VideoComponent } from '@/components/blog/BlogPosts';
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
            <VideoComponent  instagramPost={lastReel} className='min-h-[400px] max-h-[400px] w-full' />
          </a>
        )
        : (
          <span>Loading</span>
        )
      }
    </div>
  )
}
