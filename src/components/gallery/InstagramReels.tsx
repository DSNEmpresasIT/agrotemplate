import React from 'react';

const InstagramReels = ({ reels }: { reels: any[] }) => {
  return (
    <div className="grid auto-rows-[500px] grid-cols-3 mb-6">
      {reels.map((post, i) => (
        <div key={i}>
          <a target='_blank' href={post.permalink}>
            <video className='object-cover aspect-square' src={post.media_url} controls />
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstagramReels;