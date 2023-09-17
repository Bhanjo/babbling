import { fetchSpeechList } from '@/api';
import { SpeechList } from '@/type';

export const getSpeechListAction = async () => {
  const data = await fetchSpeechList();
  return data as SpeechList;
};
