import React from 'react'

const CardSkeletonLoader = () => {
  return (
    <>
    {Array.from({ length: 12 }).map((_, i) => (
      <div
      key={i}
      className=" cart-loading-pulse overflow-hidden max-w-[221px] w-[221px] hover:shadow-lg shadow-md p-2 pb-3   bg-gray-300 rounded-lg"
    >
      <div className="relative flex aspect-square  items-center bg-gray-400 rounded-md">
        <div className="w-full h-full object-contain bg-gray-400 rounded-md" />
      </div>
      
      <div className="flex flex-col  gap-3 mt-2 px-2">
        <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
        <div className="w-3/4 h-6 bg-gray-400 rounded"></div>
        <div className="w-full h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
    ))}
    </>
  )
}

export default CardSkeletonLoader
