import React from "react";
import { getFormatDate } from "@/util/helpers/getDateFormat";
import ButtonComponent from "../ui/ButtonComponent";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";
import { HiOutlineLink } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/index";

import { InstagramPostMediaTypes } from "@/util/types/types";
import { VideoComponent } from "./BlogPosts";
import { clearSelectedPost } from "@/redux/store/slice/blogSlice";

export const BlogDetails = () => {
  const dispatch = useDispatch();
  const { selectedPost } = useSelector((state: RootState) => state.blog);
  const instagramPostDetail = selectedPost;

  if (!instagramPostDetail) return null;

  return (
    <article className="animate__animated animate__fadeIn">
      <div className="ps-6 pb-5">
        <ButtonComponent
          onClickFunction={() =>
            dispatch(clearSelectedPost(undefined))
          }
          text="Atrás"
        />
      </div>

      <div className="flex gap-4 flex-col md:min-w-[900px] max-w-[900px] w-full pb-10  mx-auto px-6">
        <div className="post-inner">
          <div className="w-full flex mb-2 justify-center">
            <a type="button" className="w-full">
            {instagramPostDetail.media_type === InstagramPostMediaTypes.IMAGE && (
              <img
                className="w-full object-cover max-h-[600px] aspect-square rounded-md"
                src={instagramPostDetail.media_url}
                alt="blog-detail-image"
              />
            )}
            {instagramPostDetail.media_type === InstagramPostMediaTypes.CAROUSEL && (
              <img
                src={instagramPostDetail.media_url}
                className="w-full object-cover max-h-[600px] aspect-square rounded-md"
                alt="blog-detail-image"
              />
            )}
            {instagramPostDetail.media_type === InstagramPostMediaTypes.VIDEO && <VideoComponent instagramPost={instagramPostDetail} />}
            </a>
          </div>
          <div>
            <h4 className="text-2xl font-semibold py-4">{getFormatDate(instagramPostDetail.timestamp)}</h4>
            <div className="meta-post">
              <p>
                <span className="pe-2">
                  A través de
                  <a target="_blank" rel="noopener noreferrer" className="text-blue-500 ps-1 font-medium" href={instagramPostDetail.permalink}>
                    Instagram
                  </a>
                </span>
              </p>
            </div>
            <p className="pt-4">{instagramPostDetail.caption}</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-lg">Síguenos:</span>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/solucionesagropecuariasintegrales"
              className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-blue-600"
            >
              <SlSocialFacebook className="text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com/felixmenendezsrl/"
              className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-pink-600"
            >
              <SlSocialInstagram className="text-pink-600" />
            </a>
            <a
              href="https://www.youtube.com/@lafarmaciadelcampo"
              className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-red-600"
            >
              <SlSocialYoutube className="text-red-600" />
            </a>
            <a
              href="https://linktr.ee/felixmemendezsrl"
              className="hover:-translate-y-1 duration-200 flex items-center justify-center rounded-full h-10 w-10 border border-dashed border-blue-500"
            >
              <HiOutlineLink className="text-blue-500" />
            </a>
          </div>
        </div>
        {/* <CommentsSection comments={instagramPostDetail.comments} /> */}
      </div>
    </article>
  );
};
