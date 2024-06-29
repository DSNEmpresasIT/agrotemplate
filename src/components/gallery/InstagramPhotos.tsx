import React from 'react';

const InstagramPhotos = ({ photos }: { photos: any[] }) => {
  console.log(photos, 'fotos insta')
  return (
    <div className="grid auto-rows-[500px] grid-cols-3 mb-6">
      {photos.map((post, i) => (
        <div key={i}>
          <a target='_blank' href={post.permalink}>
            <img className='object-cover aspect-square' src={post.media_url} alt="instagram-photo" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstagramPhotos;