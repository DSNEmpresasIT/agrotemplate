import React from 'react';

const InstagramPhotos = ({ photos }: { photos: any[] }) => {
  console.log(photos, 'fotos insta')
  return (
    <>
      {photos.map((post, i) => (
        <div key={i}>
          <a target='_blank'  href={post.permalink}>
            <img  src={post.media_url} className='object-cover aspect-square' alt="instagram-photo" />
          </a>
        </div>
      ))}
    </>
  );
};

export default InstagramPhotos;