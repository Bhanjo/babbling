import React, { useRef } from 'react';
import { StarBlank, StarFilled, StarHalf } from '../atom';

interface Props {
  score: number; // 10점 만점
}

export const StarScore = ({ score }: Props) => {
  if (score < 0 || score > 10 || score % 1 > 0) {
    return (
      <p>0~10 사이의 정수만 가능합니다. {score}는 올바른 값이 아닙니다.</p>
    );
  }

  return defaultStar({ score });
};

const defaultStar = ({ score }: Props) => {
  const starArray = getStarArray(score);

  return (
    <div className='flex'>
      {starArray.map((status, index) => {
        if (status === 'filled') return <StarFilled key={index} />;
        else if (status === 'half') return <StarHalf key={index} />;
        else return <StarBlank key={index} />;
      })}
    </div>
  );
};

const getStarArray = (score: number) => {
  const filledStar = new Array(Math.floor(score / 2)).fill('filled');
  const halfStar = new Array(Math.floor(score % 2)).fill('half');
  const blankStar = new Array(Math.floor((10 - score) / 2)).fill('blank');
  const starArray = new Array().concat(filledStar, halfStar, blankStar);

  return starArray;
};
