'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Speech = () => {
  const { transcript, listening } = useSpeechRecognition();
  const [
    isBrowserSupportSpeechRecognition,
    setIsBrowserSupportSpeechRecognition,
  ] = useState(false);

  useEffect(() => {
    if (SpeechRecognition.browserSupportsSpeechRecognition()) {
      setIsBrowserSupportSpeechRecognition(true);
    }
  }, []);

  if (!isBrowserSupportSpeechRecognition) {
    return null;
  }

  return (
    <>
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
