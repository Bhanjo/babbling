import React from 'react';

interface Props {
  text: string;
  style?: string;
}
const Title = ({ text, style }: Props) => {
  return (
    <button className='text-lg hover:bg-sky-600 hover:text-white'>
      {text}
    </button>
  );
};

export default Title;
