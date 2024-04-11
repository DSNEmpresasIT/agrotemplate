import React from 'react';

interface ButtonProps {
  onClickFunction: () => void;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClickFunction, text }) => {
  return (
    <button className='bg-light lab-btn font-semibold px-4 py-1' onClick={onClickFunction}>
     <span>{text}</span>
    </button>
  );
};

export default ButtonComponent;
