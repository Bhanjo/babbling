'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useBrowserSupportSpeechRecognition } from './hooks';

const Speech = () => {
  const {
    transcript,
    listening,
    isBrowserSupportSpeechRecognition,
    SpeechRecognition,
  } = useBrowserSupportSpeechRecognition();

  const route = useRouter();
  const path = usePathname();
  const backSpeechList = () => {
    route.push(`/${path.split('/')[1]}`);
  };

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
    </>
  );
};

export default Speech;
