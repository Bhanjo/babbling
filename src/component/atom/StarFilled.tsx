import Image from 'next/image';

interface Props {
  size?: number;
}

export const StarFilled = ({ size }: Props) => {
  return (
    <Image
      src='/image/starFilled.png'
      alt='채워진별'
      width={size ?? 25}
      height={size ?? 25}
    />
  );
};
