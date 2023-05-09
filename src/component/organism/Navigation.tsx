import NavButton from '../atom/NavButton';

const Navigation = () => {
  return (
    <>
      <NavButton href='/' text={'Home'} />
      <NavButton href='/speech-list' text={'Start'} />
    </>
  );
};

export default Navigation;
