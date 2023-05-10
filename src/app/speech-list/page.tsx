import { fetchSpeechList } from '@/api';
import Title from '@/component/atom/Title';
import { SpeechItem, SpeechList } from '@/type';

const SpeechList = async () => {
  const data = (await fetchSpeechList()) as SpeechList;
  return (
    <>
      {data.speechList.map((item: SpeechItem) => (
        <Title key={item.id} text={item.title} />
      ))}
    </>
  );
};

export default SpeechList;
