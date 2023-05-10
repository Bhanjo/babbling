import Image from 'next/image';

interface Props {
  size?: number;
}

export const StarBlank = ({ size }: Props) => {
  return (
    <Image
      src='/image/starBlank.png'
      alt='빈별'
      width={size ?? 25}
      height={size ?? 25}
    />
  );
};
