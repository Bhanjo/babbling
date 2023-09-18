'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Title from '@/component/atom/Title';
import { SpeechList as SpeechItems, SpeechTitle } from '@/type';
import { getSpeechListAction } from '@/util/action';

const SpeechList = async () => {
  const router = useRouter();
  const path = usePathname();

  const [speechList, setSpeechList] = useState<SpeechItems>();
  const onClick = (speechId: number) => {
    router.push(`${path}/${speechId}`);
  };

  useEffect(() => {
    const getItem = async () => {
      const data = await getSpeechListAction();
      setSpeechList(data);
    };
    getItem();
  }, []);

  return (
    <>
      {speechList?.speechList.map((item: SpeechTitle) => (
        <div key={item.id}>
          <Title
            key={item.id}
            text={item.title}
            onClick={() => onClick(item.speechId)}
          />
        </div>
      ))}
    </>
  );
};

export default SpeechList;
