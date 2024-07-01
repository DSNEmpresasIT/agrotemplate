import React from 'react';

const InstagramReels = ({ reels }: { reels: any[] }) => {
  return (
    <>
      {reels.map((post, i) => (
        <div key={i}>
          <a target='_blank' href={post.permalink}>
            <video className='object-cover aspect-square' src={post.media_url} controls />
          </a>
        </div>
      ))}
    </>
  );
};

export default InstagramReels;