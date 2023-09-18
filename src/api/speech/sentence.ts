import Axios from '@/lib/axios';

export const fetchSpeechSentence = async () => {
  try {
    const res = await Axios.get('/dummy/speech-sentence.json');
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
    }
  }
};
