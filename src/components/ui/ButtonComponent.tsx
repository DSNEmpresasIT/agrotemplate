import React from 'react';

interface ButtonProps {
  onClickFunction: () => void;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClickFunction, text }) => {
  return (
    <button className='bg-light lab-btn font-medium px-6 py-1 rounded-md' onClick={onClickFunction}>
     <span>{text}</span>
    </button>
  );
};

export default ButtonComponent;
