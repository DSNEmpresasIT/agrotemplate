import React from 'react';

const SkeletonLoader = () => {
  return (
    <>
      {[...Array(9)].map((_, index) => (
      <div key={index} className="cart-loading-pulse m-1">
      <a>
        <div className="bg-gray-300 h-72"></div>
      </a>
    </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
