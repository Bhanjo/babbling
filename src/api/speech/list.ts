import Axios from '@/lib/axios';

export const fetchSpeechList = async () => {
  const res = await Axios.get('/dummy/speech-list.json');
  return res.data;
};
