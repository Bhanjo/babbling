'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useBrowserSupportSpeechRecognition } from './hooks';
import { getSpeechSentenceAction } from '@/util/action';

const Speech = () => {
  const route = useRouter();
  const path = usePathname();
  const backSpeechList = () => {
    route.push(`/${path.split('/')[1]}`);
  };

  const {
    transcript,
    listening,
    isBrowserSupportSpeechRecognition,
    SpeechRecognition,
  } = useBrowserSupportSpeechRecognition();

  const [compareSentence, setCompareSentence] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const speechId = +path.split('/')[2];
      const data = await getSpeechSentenceAction(speechId);
      setCompareSentence(data?.sentence);
    };
    getData();
  }, [path]);

  if (!isBrowserSupportSpeechRecognition) {
    return null;
  }

  return (
    <>
      <button onClick={backSpeechList} className='bg-sky-400 text-white'>
        목록으로 돌아가기
      </button>
      <div>음성 인식 결과: {transcript}</div>
      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
        // disabled={listening}
      >
        음성 인식 시작
      </button>
      <button
        onClick={() => SpeechRecognition.stopListening()}
        // disabled={!listening}
      >
        음성 인식 정지
      </button>
      <p>{compareSentence}</p>
    </>
  );
};

export default Speech;
