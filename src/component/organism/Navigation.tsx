import React from 'react';
import { NavButton } from '../atom';

const Navigation = () => {
  return (
    <div className='flex gap-2'>
      <NavButton href='/' text={'메인으로'} />
      <NavButton href='/speech' text={'문장 선택하기'} />
    </div>
  );
};

export default Navigation;
