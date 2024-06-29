'use client'
import Header from '@/components/common/header';
import InstagramPhotos from '@/components/gallery/InstagramPhotos';
import InstagramReels from '@/components/gallery/InstagramReels';
import FacebookPhotos from '@/components/gallery/FacebookPhotos';
import { GalleryType } from '@/util/enums';
import React, { useEffect, useState } from 'react';
import { getInstagramPhotos, getInstagramVideos } from '@/services/instagram-services';
import { getFacebookImagePosts, getFacebookPageAccessToken } from '@/services/facebook-services';

const GalleryPage = () => {
  const [contentType, setContentType] = useState<GalleryType>(GalleryType.INSTAGRAM_PHOTOS);
  const [contentData, setContentData] = useState<any[]>([]);
  const { FACEBOOK_TOKEN = '', FACEBOOK_PAGE_ID = '', INSTAGRAM_TOKEN = ''} = process.env;

  useEffect(() => {
    switch (contentType) {
      case GalleryType.INSTAGRAM_PHOTOS:
        getInstagramPhotos(INSTAGRAM_TOKEN).then(setContentData);
        break;
      case GalleryType.INSTAGRAM_REELS:
        getInstagramVideos(INSTAGRAM_TOKEN).then(setContentData);
        break;
      case GalleryType.FACEBOOK_PHOTOS:
        getFacebookPageAccessToken(FACEBOOK_TOKEN, FACEBOOK_PAGE_ID).then(
          res => {
            getFacebookImagePosts(res.access_token, FACEBOOK_PAGE_ID).then(setContentData)
          }
        )
        break;
      default:
        break;
    }
  }, [contentType, INSTAGRAM_TOKEN, FACEBOOK_TOKEN, FACEBOOK_PAGE_ID]);

  const renderContent = () => {
    switch (contentType) {
      case GalleryType.INSTAGRAM_PHOTOS:
        return <InstagramPhotos photos={contentData} />;
      case GalleryType.INSTAGRAM_REELS:
        return <InstagramReels reels={contentData} />;
      case GalleryType.FACEBOOK_PHOTOS:
        return <FacebookPhotos photos={contentData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header backLinks={['galeria']} title={`Galeria de Redes Sociales`} seccion='Berardo'/>
      <div className="min-h-screen w-full mx-auto max-w-[1200px] px-3">
        <div className="mt-4 mb-6 border-b border-inherit">
          <div className="flex gap-2 mt-4 pb-2">
            <button onClick={() => setContentType(GalleryType.INSTAGRAM_PHOTOS)}>Instagram Photos</button>
            <button onClick={() => setContentType(GalleryType.INSTAGRAM_REELS)}>Instagram Reels</button>
            <button onClick={() => setContentType(GalleryType.FACEBOOK_PHOTOS)}>Facebook Photos</button>
          </div>
        </div>
        {renderContent()}
      </div>
    </>
  );
};

export default GalleryPage;
