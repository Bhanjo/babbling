'use client';
import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Speech = () => {
  const { transcript, listening } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>음성 인식이 지원되지 않는 브라우저입니다.</div>;
  }

  const handleRecord = () => {};

  return (
    <div>
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
    </div>
  );
};

export default Speech;
