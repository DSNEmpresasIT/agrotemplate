import React from 'react';

const SkeletonLoader = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
      <div key={index} className="animate-pulse">
      <a>
        <div className="bg-gray-200 h-64"></div>
      </a>
    </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
