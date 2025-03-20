"use client";
import { VideoComponent } from "@/components/blog/BlogPosts";
import { RootState } from "@/context/store";
import {
  setError,
  setInstagramPosts,
  setLoading,
} from "@/context/store/slice/blogSlice";
import { getInstagramPosts } from "@/services/instagram-services";
import { InstagramPostMediaTypes } from "@/util/types/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InstagramGallery = ({
  INSTAGRAM_TOKEN,
}: {
  INSTAGRAM_TOKEN: string;
}) => {
  // const dispatch = useDispatch();
  // const { instagramPosts } = useSelector((state: RootState) => state.blog);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   getInstagramPosts()
  //     .then((posts) => {
  //       console.log("Fetched posts:", posts);
  //       dispatch(setInstagramPosts(posts));
  //       dispatch(setError(false));
  //     })
  //     .catch(() => {
  //       console.error("Error fetching Instagram posts");
  //       dispatch(setError(true));
  //     });
  // }, [dispatch]);

  return (
    <div className="footer-inner">
      <div className="footer-title">
        <h5 className="text-white text-lg  pb-4 font-semibold">
          Ultimas publicaciones de Instagram
        </h5>
      </div>
      <div className="grid gap-1 grid-cols-3">
        {/* {instagramPosts?.map((post: any, index: number) => {
          if (index > 8) return;
          return (
            <a key={index} target="_blank" href={post.permalink}>
              {post.media_type === InstagramPostMediaTypes.IMAGE && (
                <img
                  className="w-full object-cover  max-h-[600px] aspect-square rounded-md"
                  src={post.media_url}
                  alt="blog-detail-image"
                />
              )}
              {post.media_type === InstagramPostMediaTypes.CAROUSEL && (
                <img
                  src={post.media_url}
                  className="w-full object-cover max-h-[600px] aspect-square rounded-md"
                  alt="blog-detail-image"
                />
              )}
              {post.media_type === InstagramPostMediaTypes.VIDEO && (
                <VideoComponent instagramPost={post} />
              )}
            </a>
          );
        })} */}
      </div>
    </div>
  );
};
