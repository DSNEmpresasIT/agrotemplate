'use client'
import { BlogTypes } from "@/context/blog-context/blog";
import { useBlogContext } from "@/context/blog-context/blog-context";
import { getInstagramVideos } from "@/services/instagram-services";
import { getFormatDate } from "@/util/helpers/getDateFormat";
import { FacebookPost, Keys } from "@/util/types/types";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

// icons 
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { HiOutlineLink } from "react-icons/hi";


export const BlogAsideSection = ({ keys }: { keys: Keys }) => {
  const { state, dispatch }: any = useBlogContext();
  const [ recentsPost, setRecentsPosts ] = useState<FacebookPost[]>();
  const [ instagramVideos, setInstagramVideos ] = useState<any[]>();

  function handleRecentPosts() {
    let index = 0; 
    let newRecentsPosts: FacebookPost[]= [];
    if (state.facebookPostData) {
      state.facebookPostData.forEach(( post: FacebookPost, i:number) => {
        if (post === state.facebookPostDetail) return;
        if (index === 4) return;

        index = index + 1;
        newRecentsPosts = newRecentsPosts[0] ? [...newRecentsPosts, post] : [post];
      }) 
      setRecentsPosts(newRecentsPosts)
    }
  }

  useEffect(() => {
    handleRecentPosts();
  }, [state.facebookPostData, state.facebookPostDetail]);

  useEffect(() => {
    if (keys.INSTAGRAM_TOKEN) {
      getInstagramVideos(keys.INSTAGRAM_TOKEN)
      .then(res => setInstagramVideos(res))
      .catch(err => (console.log(err), setInstagramVideos([])))
    }
  }, []);
  return (
    
      <aside className="w-full pb-4 max-w-[300px] md:max-w-[600px] xl:max-w-[300px]">
        
          <div className="flex flex-col mb-4 justify-start  items-center gap-4">
              <div className="flex max-h-[260px] max-w-[260px]">
                <img className="rounded-full object-cover w-full" src="assets/images/logo/circular-logo.png" alt="author" />
              </div>
            
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/solucionesagropecuariasintegrales" className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-blue-600">
                    <SlSocialFacebook className="text-blue-600"/>
                  </a>
                  <a href="https://www.instagram.com/felixmenendezsrl/" className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-pink-600" >
                    <SlSocialInstagram className="text-pink-600"/>
                  </a>
                  <a href="https://www.youtube.com/@lafarmaciadelcampo" className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-red-600">
                    <SlSocialYoutube className="text-red-600" />
                  </a>
                  <a href="https://linktr.ee/felixmemendezsrl" className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-blue-500">
                    <HiOutlineLink className="text-blue-500"/>
                  </a>
            
              </div>
          </div>
        
        <div className="flex flex-col md:flex-row  w-full xl:flex-col gap-2  ">
          <div >
            <div className="widget-header">
              <h5 className="text-light font-semibold text-lg">Recent Post</h5>
            </div>
            <ul className='flex flex-col'>
              {
                recentsPost?.map((post: FacebookPost) => {
                  return (
                    <li 
                      key={`${post.url}-recent-posts`} 
                      onClick={() => dispatch({ type: BlogTypes.SET_FACEBOOK_POST_DETAIL, payload: post })} 
                      className="flex  py-5 gap-1 animate__animated animate__fadeIn border-b border-black/5"
                    >
                      <div className=" flex rounded-sm items-center min-w-[80px] max-w-[80px] ">
                      
                          <img className="w-full  object-cover aspect-square" src={post.image.src} alt="product" />
                    
                      </div>
                      <div className="flex flex-col  gap-2">
                        <a type="button" className="hover:text-light cursor-pointer text-black">
                          <h6 className="truncate">{getFormatDate(post.created_time)}</h6>
                        </a>
                        <p className="text-black/50 truncate">By Facebook F.M.</p>
                      </div>
                    </li>
                  )
                })
              }
              {
                !recentsPost &&  (
                  <>
                    <li className="flex gap-1">
                      <Skeleton height={70} width={70} />
                      <Skeleton height={15} count={3} width={150} />
                    </li>
                    <li className="flex gap-1">
                      <Skeleton height={70} width={70} />
                      <Skeleton height={15} count={3} width={150} />
                    </li>
                    <li className="flex gap-1">
                      <Skeleton height={70} width={70} />
                      <Skeleton height={15} count={3} width={150} />
                    </li>
                    <li className="flex gap-1">
                      <Skeleton height={70} width={70} />
                      <Skeleton height={15} count={3} width={150} />
                    </li>
                  </>
                ) 
              }
            </ul>
          </div>
          <div >
            <div className="text-light font-semibold text-lg pb-3 xl:py-5">
              { instagramVideos?.length && <h5>Instagram</h5> }
            </div>
            <ul className="grid grid-cols-2 gap-1 flex-wrap justify-content-center">
              {
                instagramVideos?.map((photos: any, i: number) => {
                  if (i > 3) return;
                  return (
                    <li className="animate__animated animate__fadeIn" key={`${photos.permalink}-aside-detail`}>
                      <a href={photos.permalink}>
                        <video className="w-full h-full object-cover" src={photos.media_url} loop muted autoPlay width='100%' height='100%' />
                      </a>
                    </li>
                  )
                })
              }
              {
                !instagramVideos && (
                  <>
                    <li className="animate__animated animate__fadeIn" >
                      <Skeleton width={120} height={200}  />
                    </li>
                    <li className="animate__animated animate__fadeIn" >
                      <Skeleton width={120} height={200}  />
                    </li>
                    <li className="animate__animated animate__fadeIn" >
                      <Skeleton width={120} height={200}  />
                    </li>
                    <li className="animate__animated animate__fadeIn" >
                      <Skeleton width={120} height={200}  />
                    </li>
                  </>
                )
              }
            </ul>
          </div>
        </div>

      </aside>

  );
};
