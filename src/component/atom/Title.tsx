import React from 'react';

interface Props {
  text: string;
  style?: string;
}
const Title = ({ text, style }: Props) => {
  return <h1 className='text-lg'>{text}</h1>;
};

export default Title;
