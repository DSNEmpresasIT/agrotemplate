import React from 'react';

interface ButtonProps {
  onClickFunction: () => void;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClickFunction, text }) => {
  return (
    <button className='relative bg-cc-green hover:brightness-110 transition-colors duration-200 text-white font-medium text-center py-2 rounded-md w-full' onClick={onClickFunction}>
     <span>{text}</span>
    </button>
  );
};

export default ButtonComponent;
