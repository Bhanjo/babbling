import { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export const useBrowserSupportSpeechRecognition = () => {
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

  return {
    SpeechRecognition,
    transcript,
    listening,
    isBrowserSupportSpeechRecognition,
  };
};
