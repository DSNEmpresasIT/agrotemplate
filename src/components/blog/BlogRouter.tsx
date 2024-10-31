'use client';
import React, { FC, useEffect } from 'react';
import { BlogDetails } from './BlogDetails';
import { SkeletonLoaderComponent } from './SkeletonLoaderComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import { setError, setLoading, setInstagramPosts } from '@/context/store/slice/blogSlice';
import { getInstagramPosts } from '@/services/instagram-services';
import { BlogPosts } from './BlogPosts';

export const BlogRouter: FC = () => {
  const dispatch = useDispatch();
  const { instagramPosts, selectedPost, loading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(setLoading(true));
    getInstagramPosts()
      .then((posts) => {
        console.log('Fetched posts:', posts);
        dispatch(setInstagramPosts(posts));
        dispatch(setError(false));
      })
      .catch(() => {
        console.error('Error fetching Instagram posts');
        dispatch(setError(true));
      });
  }, [dispatch]);
  
  return (
    <div>
      {loading && <SkeletonLoaderComponent />}
      {error && (
        <div className="text-center">
          <p>Error al cargar los posts de Instagram. Por favor, verifica tu conexión o intenta más tarde.</p>
          <p>Si el problema persiste, visita <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> para más información.</p>
        </div>
      )}
      {!loading && !error && instagramPosts.length === 0 && (
        <div className="text-center">
          <p>No hay publicaciones disponibles en este momento.</p>
        </div>
      )}
      {!loading && !error && selectedPost && <BlogDetails />}
      {!loading && !error && !selectedPost && <BlogPosts />}
    </div>
  );
  
  
};
