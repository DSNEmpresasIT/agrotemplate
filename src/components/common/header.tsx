import React from 'react';
import Backlinks from './backLinks';


interface HeaderProps {
  title: string;
  seccion: string;
  backLinks: string[]; 
}

const Header: React.FC<HeaderProps> = ({ title, seccion, backLinks }) => {
  return (
    <div className='flex justify-center h-[300px]  z-40  relative '>
      <div className='bg-black/50 h-full gap-2 w-full absolute flex justify-center items-center z-[9999] flex-col'>
        <h1 className=' text-3xl md:max-w-[700px] lg:text-5xl lg:max-w-[900px] pb-2 w-full text-center text-white'>{title}</h1>
        {/* <p className=' md:text-2xl  md:max-w-[700px] lg:max-w-[900px] w-full text-center text-white '>
        {seccion}
        </p> */}
        <Backlinks rutas={backLinks} />
      </div>
      <img className='w-full h-full object-cover mix-blend-hard-light bg-black/50' src={'/assets/images/carrousel-banner/02.png'} />
    </div>
  );
}

export default Header;
