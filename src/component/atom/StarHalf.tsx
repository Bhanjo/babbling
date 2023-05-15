import React from 'react';
import Image from 'next/image';

interface Props {
  size?: number;
}

export const StarHalf = ({ size }: Props) => {
  return (
    <Image
      src='/image/starHalf.png'
      alt='채워진별'
      width={size ?? 25}
      height={size ?? 25}
    />
  );
};
