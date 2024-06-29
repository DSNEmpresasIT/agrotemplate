import React from 'react';

const FacebookPhotos = ({ photos }: { photos: any[] }) => {
  console.log(photos,'photos en component')
  return (
    <div className="grid auto-rows-[500px] grid-cols-3 mb-6">
      {photos.map((post, i) => (
        <div key={i}>
          <a target='_blank' href={post.permalink}>
            <img className='object-cover aspect-square' src={post.image} alt="facebook-photo" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FacebookPhotos;