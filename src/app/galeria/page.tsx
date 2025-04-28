'use client'
require('dotenv').config();
import Header from '@/components/common/header';
import InstagramPhotos from '@/components/gallery/InstagramPhotos';
import InstagramReels from '@/components/gallery/InstagramReels';
import FacebookPhotos from '@/components/gallery/FacebookPhotos';
import { CUSTOMPATHS, GalleryType, SOCIAL_NETWORKS_LINKS } from '@/util/enums';
import React, { useEffect, useState } from 'react';
import { getInstagramPhotos, getInstagramVideos } from '@/services/instagram-services';
import { getFacebookImagePosts, getFacebookPageAccessToken } from '@/services/facebook-services';
import Link from 'next/link';
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl';
import { HiOutlineLink } from 'react-icons/hi';
import SkeletonLoader from '@/components/gallery/SkeletonLoader';
import Backlinks from '@/components/common/backLinks';
import Banner from '@/components/common/Banner';


const GalleryPage = () => {
  const [contentType, setContentType] = useState<GalleryType>(GalleryType.FACEBOOK_PHOTOS);
  const [instagramPhotos, setInstagramPhotos] = useState<any[]>([]);
  const [instagramReels, setInstagramReels] = useState<any[]>([]);
  const [facebookPhotos, setFacebookPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const FACEBOOK_TOKEN = process.env.FACEBOOK_TOKEN || '';
  const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID || '';
  const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN || '';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        switch (contentType) {
          case GalleryType.INSTAGRAM_PHOTOS:
            const photos = await getInstagramPhotos(INSTAGRAM_TOKEN);
            setInstagramPhotos(photos);
            break;
          case GalleryType.INSTAGRAM_REELS:
            const reels = await getInstagramVideos(INSTAGRAM_TOKEN);
            setInstagramReels(reels);
            break;
          case GalleryType.FACEBOOK_PHOTOS:
            const accessToken = await getFacebookPageAccessToken(FACEBOOK_TOKEN, FACEBOOK_PAGE_ID);
            const fbPhotos = await getFacebookImagePosts(accessToken.access_token, FACEBOOK_PAGE_ID);
            setFacebookPhotos(fbPhotos);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType]);

  const renderContent = () => {
    if (loading) {
      return  <SkeletonLoader/>
    }

    switch (contentType) {
      case GalleryType.INSTAGRAM_PHOTOS:
        return <InstagramPhotos photos={instagramPhotos} />;
      case GalleryType.INSTAGRAM_REELS:
        return <InstagramReels reels={instagramReels} />;
      case GalleryType.FACEBOOK_PHOTOS:
        return <FacebookPhotos photos={facebookPhotos} />;
      default:
        return null;
    }
  };

  const getPostCount = () => {
    switch (contentType) {
      case GalleryType.INSTAGRAM_PHOTOS:
        return instagramPhotos?.length;
      case GalleryType.INSTAGRAM_REELS:
        return instagramReels?.length;
      case GalleryType.FACEBOOK_PHOTOS:
        return facebookPhotos?.length;
      default:
        return 0;
    }
  };

  return (
    <>
      <Banner title='Galería de Redes Sociales' />
      <div className="min-h-screen w-full mx-auto max-w-[1200px] px-5 mb-16">
        <div className="my-4 md:my-16">
          <Backlinks rutas={[CUSTOMPATHS.GALLERY]} />
        </div>

        <div className="mt-4 mb-6">
          <div className='justify-between flex items-center'>

            <div className='flex gap-2 items-center'>
               <img src="/assets/images/logo/logoGallery.jpg" alt="instagram logo" className='w-16 flex items-center h-16 rounded-full bg-black/60 ' />
              <div >
                <h5 className=' text-lg font-semibold'>felixmenendezsrl</h5>
                <span className='bg-inherit'>{getPostCount()} post</span>
              </div>
            </div>

              <div>
                <Link  className="bg-light lab-btn font-semibold px-3 py-2 rounded-sm"  href={SOCIAL_NETWORKS_LINKS.INSTAGRAM}>
                <span>Seguinos</span> 
                </Link>
              </div>
          </div>
        </div>

        <div className="mt-4 mb-6 border-b border-inherit  justify-between flex">
          <div className="flex gap-3  mt-4 pb-2">
                  <button onClick={() => setContentType(GalleryType.FACEBOOK_PHOTOS)} className={`${contentType == GalleryType.FACEBOOK_PHOTOS && ' border-b-2  border-blue-600'} pb-3 flex gap-2  items-center`}>
                    <SlSocialFacebook className="text-blue-600"/> <span>Facebook</span>
                  </button>
                  {/* <button onClick={() => setContentType(GalleryType.INSTAGRAM_PHOTOS)} className={`${contentType == GalleryType.INSTAGRAM_PHOTOS && ' border-b-2  border-pink-600'} pb-3 flex gap-2  items-center`} >
                    <SlSocialInstagram className="text-pink-600"/> <span>Instagram</span>
                  </button>
                  <button onClick={() => setContentType(GalleryType.INSTAGRAM_REELS)} className={`${contentType == GalleryType.INSTAGRAM_REELS && ' border-b-2  border-pink-600'} pb-3 flex gap-2  items-center`}>
                    <SlSocialInstagram className="text-pink-600"/> <span>Instagram Reels</span>
                  </button> */}
                  

        </div>
        <div className='flex gap-2 mt-4 pb-2'>
        <a href="https://www.youtube.com/@lafarmaciadelcampo" className="flex gap-2  pb-3 items-center">
                    <SlSocialYoutube className="text-red-600" /><span>Youtube</span>
                  </a>
                  <a href="https://linktr.ee/felixmemendezsrl" className="flex gap-2 pb-3 items-center">
                    <HiOutlineLink className="text-blue-500"/><span>Linktree</span>
                  </a>
        </div>
        </div>
        
        <div className='mx-auto max-w-[350px] sm:max-w-full w-full grid sm:grid-cols-2 md:grid-cols-3 overflow-hidden'>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
