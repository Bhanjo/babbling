import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

const NavButton = ({ text, href }: Props) => {
  return <Link href={href}>{text}</Link>;
};

export default NavButton;
