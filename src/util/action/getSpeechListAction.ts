import { fetchSpeechList } from '@/api';
import { SpeechItem } from '@/type';

export const getSpeechListAction = async () => {
  const data = await fetchSpeechList();
  return data.speechList as SpeechItem[];
};
