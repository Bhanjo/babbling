import React from 'react';
import { fetchSpeechList } from '@/api';
import Title from '@/component/atom/Title';
import { SpeechItem } from '@/type';

const SpeechList = async () => {
  const data = await fetchSpeechList();
  return (
    <>
      {data.speechList.map((item: SpeechItem) => (
        <Title key={item.id} text={item.title} />
      ))}
    </>
  );
};

export default SpeechList;
