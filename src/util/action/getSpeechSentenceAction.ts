import { fetchSpeechSentence } from '@/api';
import { SpeechSentence, SpeechSentences } from '@/type';

export const getSpeechSentenceAction = async (speechId: number) => {
  const data = (await fetchSpeechSentence()) as SpeechSentences;
  const speech = data.sentences.find((item) => item.speechId === speechId);

  if (!speech) {
    return {
      id: undefined as unknown as any,
      sentence: `speechId: ${speechId}는 알 수 없는 데이터입니다.`,
      speechId: undefined as unknown as any,
    } as SpeechSentence;
  }

  return speech;
};
