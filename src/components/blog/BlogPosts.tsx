import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { InstagramPost, InstagramPostMediaTypes } from '@/util/types/types';
import CustomPagination from '../paginator/PaginatorComponent';
import { selectPost } from '@/context/store/slice/blogSlice';
import { RootState } from '@/context/store';

export const VideoComponent = ({ instagramPost, className }: { instagramPost: InstagramPost, className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxHeight = className ? className : 'max-h-[600px]'
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className={`w-full object-cover ${maxHeight} aspect-square rounded-md`}
        autoPlay
        muted
        loop
        controls
        src={instagramPost.media_url}
      ></video>
    </div>
  );
};

export const BlogPosts = () => {
  const dispatch = useDispatch();
  const { instagramPosts } = useSelector((state: RootState) => state.blog);

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;


  const handleSetPostDetail = (post: InstagramPost) => {
    dispatch(selectPost(post));
    setCurrentPage(0);
  };

  const getCurrentPagePosts = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return instagramPosts.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <article className="w-full justify-center px-3 items-center flex flex-col md:min-w-[800px]">
      {getCurrentPagePosts().map((post: InstagramPost, i: number) => (
        <div className="w-full max-w-[900px] mt-10 animate__animated animate__fadeIn" key={post.id}>
          <div  className="w-full flex mb-2 justify-center">
            {post.media_type === InstagramPostMediaTypes.IMAGE && (
              <img
                className="w-full object-cover max-h-[600px] aspect-square rounded-md"
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
            {post.media_type === InstagramPostMediaTypes.VIDEO && <VideoComponent instagramPost={post} />}
          </div>
          <div className="flex flex-col gap-4 px-5">
            <div className="post-date">
              Félix Menéndez a través de <a href={post.media_url} target="_blank">Instagram</a>
            </div>
            <h3>{new Date(post.timestamp).toLocaleDateString()}</h3>
            <p>{post.caption}</p>
            <div className="flex-wrap flex justify-between">
              <div className="text-btn">
                <span onClick={() => handleSetPostDetail(post)} className=" rounded-md bg-light lab-btn font-semibold px-4 py-1 cursor-pointer">
                  <span>Ver post completo<i className="fa fa-angle-double-right"></i></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="h-36 w-full flex justify-center items-center">
        <CustomPagination
          pageCount={Math.ceil(instagramPosts.length / postsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </article>
  );
};
