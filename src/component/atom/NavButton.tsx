import React from 'react';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

export const NavButton = ({ text, href }: Props) => {
  return <Link href={href}>{text}</Link>;
};
