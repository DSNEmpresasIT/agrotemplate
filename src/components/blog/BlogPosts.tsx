import { BlogTypes } from "@/context/blog-context/blog";
import { useBlogContext } from "@/context/blog-context/blog-context";
import { CUSTOMPATHS } from "@/util/enums";
import { getFormatDate } from "@/util/helpers/getDateFormat";
import { FacebookPost } from "@/util/types/types";
import React, { useState } from "react";
import CustomPagination from "../paginator/PaginatorComponent";


export const BlogPosts = () => {
  const { state, dispatch }: any = useBlogContext();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4; 


  const hanleSetPostDetail = (post: FacebookPost): void => {
    dispatch({
      type: BlogTypes.SET_FACEBOOK_POST_DETAIL,
      payload: post,
    });
    setCurrentPage(0); 
  };

  const getCurrentPagePosts = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return state.facebookPostData?.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <article className="w-full justify-center px-3 items-center flex flex-col md:min-w-[800px]">
      {
        getCurrentPagePosts()?.map((post: FacebookPost, i: number) => {
          return (
            <div className="w-full max-w-[900px] mt-10  animate__animated animate__fadeIn" key={`${post.created_time}/${i}`}>
                <div className="w-full  flex mb-2 justify-center">
                  <a type="button" className="w-full " onClick={() => hanleSetPostDetail(post)}>
                    <img  className="w-full object-cover max-h-[600px] aspect-square rounded-md" src={post.image.src} alt="post-image" />
                  </a>
                </div>
                <div className="flex  flex-col gap-4 px-5 ">
                  <div className=" post-date">
                      Félix Menéndez a través de <a href={post.url} target="_blank">Facebook</a>
                  </div>
                  <a className=" text-4xl font-bold hover:text-light cursor-pointer" type="button" onClick={() => hanleSetPostDetail(post)}>
                    <h3>{getFormatDate(post.created_time)}</h3>
                  </a>
                  <p>
                    {post.description}
                  </p>
                  <div className=" flex-wrap flex justify-between">
                    <div className="text-btn">
                      <a className="hover:text-light cursor-pointer" type="button" onClick={() => hanleSetPostDetail(post)}>
                        <span >
                          Ver post completo<i className="fa fa-angle-double-right"></i>
                        </span>
                      </a>
                    </div>
                    <div className="flex gap-3">
                        <a className="hover:text-light cursor-pointer" type="button" onClick={() => hanleSetPostDetail(post)}>{post.comments?.length ?? '0'} Comentarios</a>
                        <a className="hover:text-light cursor-pointer" type="button" onClick={() => hanleSetPostDetail(post)}>{post.reactions?.length ?? "0"} Likes</a>
                    </div>
                  </div>
                </div>
              </div>
          )
        })
      }
      <div className="h-36 w-full flex justify-center items-center">
       <CustomPagination
           pageCount={Math.round(Math.ceil((state.facebookPostData?.length || 0) / postsPerPage))}
           onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};
