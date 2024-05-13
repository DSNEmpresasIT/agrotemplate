import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  return (
      <a className='bg-light rounded-full  w-12  h-12 flex justify-center items-center  relative backToTop' href="#">
        <span className='absolute inset-0 z-[9999] flex justify-center items-center'> 
         <FaArrowUp className='text-xl text-white'/>
        </span>
        <span className='pulse_1 bg-light absolute inset-0 rounded-full'></span>
        <span className='pulse_2 bg-light absolute inset-0 rounded-full'></span>
      </a>
  )
}

export default BackToTop
