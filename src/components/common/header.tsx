import React from 'react';
import Backlinks from './backLinks';


interface HeaderProps {
  title: string;
  seccion: string;
  backLinks: string[]; 
}

const Header: React.FC<HeaderProps> = ({ title, seccion, backLinks }) => {
  return (
    <div className='flex justify-center h-[300px]  z-40 mb-40 relative '>
      <div className='bg-black/50 h-full  w-full absolute flex justify-center items-center z-[9999] flex-col'>
        <h1 className=' md:text-4xl lg:text-5xl pb-2 md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white'>{title}</h1>
        <p className=' text-xs md:text-2xl  md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white '>
        {seccion}
        </p>
        <Backlinks rutas={backLinks} />
      </div>
      <img className='w-full h-full object-cover mix-blend-hard-light bg-black/50' src={'/assets/images/carrousel/home1-1.jpg'} />
    </div>
  );
}

export default Header;
