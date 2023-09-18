import { fetchSpeechList } from '@/api';
import { SpeechList } from '@/type';

export const getSpeechListAction = async () => {
  const data = (await fetchSpeechList()) as SpeechList;
  return data;
};
