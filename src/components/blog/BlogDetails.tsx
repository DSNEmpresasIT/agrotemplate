"use client";
import React from "react";
import { CommentsSection } from "./blog-detail/CommentsSection";
import { useBlogContext } from "@/context/blog-context/blog-context";
import { BlogTypes } from "@/context/blog-context/blog";
import { getFormatDate } from "@/util/helpers/getDateFormat";
import ButtonComponent from "../ui/ButtonComponent";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";
import { HiOutlineLink } from "react-icons/hi";

export const BlogDetails = () => {
  const { state, dispatch }: any = useBlogContext();
  return (
    <article className="animate__animated animate__fadeIn">
      <div className="ps-6 pb-5">
        <ButtonComponent
          onClickFunction={() =>
            dispatch({
              type: BlogTypes.SET_FACEBOOK_POST_DETAIL,
              payload: undefined,
            })
          }
          text="Atras"
        />
      </div>

      <div className="flex gap-4 flex-col  md:min-w-[900px] mx-auto px-6">
        <div className="post-inner">
        
          <div className="w-full  flex mb-2 justify-center">
                  <a type="button" className="w-full " >
                    <img  className="w-full object-cover max-h-[700px]  rounded-md" src={state.facebookPostDetail.image?.src} alt="post-image" />
                  </a>
                </div>
          <div >
            <h4 className="text-2xl font-semibold py-4">{getFormatDate(state.facebookPostDetail.created_time)}</h4>
            <div className="meta-post">
              <p >
                <span className="pe-2">
                  A través de
                  <a target="_blank" className="text-blue-500 ps-1 font-medium"  href={state.facebookPostDetail.url}>
                    Facebook
                  </a>
                </span>
                <span className=" border-l px-2">
                  <a type="button" className="text-gray-500 font-medium">
                    {state.facebookPostDetail.reactions?.length ?? "0"} Me gusta
                  </a>
                </span>
                <span className="border-l px-2">
                  <a type="button" className="text-gray-500 font-medium">
                    {state.facebookPostDetail.comments?.length ?? "0"}{" "}
                    Comentarios
                  </a>
                </span>
              </p>
            </div>
            <p className="pt-4">{state.facebookPostDetail.description}</p>
          </div>
        </div>
       
       
            <div className="flex gap-2 items-center">
              <span className="text-lg ">Síguenos:</span>
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
      <CommentsSection comments={state.facebookPostDetail.comments} />
      </div>
      
    </article>
  );
};
