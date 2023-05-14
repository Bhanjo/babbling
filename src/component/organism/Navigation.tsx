import { NavButton } from '../atom';
import { StarScore } from '../molecule';

const Navigation = () => {
  return (
    <>
      <NavButton href='/' text={'Home'} />
      <NavButton href='/speech-list' text={'Start'} />
      <StarScore score={3} />
    </>
  );
};

export default Navigation;
