import React from 'react';

interface Props {
  text: string;
  style?: string;
  onClick?: () => void;
}
const Title = ({ text, style, onClick }: Props) => {
  return (
    <button
      className='text-lg hover:bg-sky-600 hover:text-white'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Title;
