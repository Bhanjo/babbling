'use client';
import { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Speech = () => {
  const [value, setValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const { listening, transcript } = useSpeechRecognition();

  const handleRecord = () => {
    if (isRecording) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
    setIsRecording(listening);
  };

  const handleTranscript = () => {
    setValue(transcript);
  };

  return (
    <div>
      <div onChange={handleTranscript}>{value}</div>
      <button onClick={handleRecord}>음성인식</button>
      <div>{isRecording ? '녹음중' : '정지됨'}</div>
    </div>
  );
};

export default Speech;
