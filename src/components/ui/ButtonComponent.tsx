import React from 'react';

interface ButtonProps {
  onClickFunction: () => void;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClickFunction, text }) => {
  return (
    <button className='relative bg-cc-green hover:bg-cc-light-green transition-colors duration-200 text-white font-medium px-6 py-1 rounded-md' onClick={onClickFunction}>
     <span>{text}</span>
    </button>
  );
};

export default ButtonComponent;
