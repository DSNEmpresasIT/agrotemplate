import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoaderComponent = () => {
  return (
    <article>
      <div style={{ width: '90%' }}>
        <Skeleton height={700} /> 
        <Skeleton  count={4}  height={30} />  
      </div>
      <div style={{ marginTop: '50px', width: '90%' }}>
        <Skeleton height={300} /> 
        <Skeleton  count={4}  height={30} />  
      </div>
    </article>
  );
};
