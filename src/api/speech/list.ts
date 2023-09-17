import Axios from '@/lib/axios';

export const fetchSpeechList = async () => {
  try {
    const res = await Axios.get('/dummy/speech-list.json');
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
    }
  }
};
