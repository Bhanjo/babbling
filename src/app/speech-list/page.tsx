'use client';
import React, { useEffect, useState } from 'react';
import Title from '@/component/atom/Title';
import { SpeechItem } from '@/type';
import { getSpeechListAction } from '@/util/action';

const SpeechList = async () => {
  const [speechList, setSpeechList] = useState<SpeechItem[]>();

  useEffect(() => {
    const getItem = async () => {
      const data = await getSpeechListAction();
      setSpeechList(data);
    };
    getItem();
  }, []);

  return (
    <>
      {speechList?.map((item: SpeechItem) => (
        <div key={item.id}>
          <Title key={item.id} text={item.title} />
        </div>
      ))}
    </>
  );
};

export default SpeechList;
