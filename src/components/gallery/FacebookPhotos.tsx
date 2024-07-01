import React from 'react';

const FacebookPhotos = ({ photos }: { photos: any[] }) => {
  console.log(photos, 'photos en component');
  return (
    <>
      {photos.map((post, i) => (
        <div key={i}>
          <a target='_blank' rel='noopener noreferrer' href={post.target.url}>
            <img className='object-cover aspect-square overflow-hidden' src={post.image.src} alt="facebook-photo" />
          </a>
        </div>
      ))}
    </>
  );
};

export default FacebookPhotos;
