import { getSpeechSentenceAction } from '@/util/action';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export const useCompareSpeech = (script: string) => {
  const path = usePathname();

  const [compareSentence, setCompareSentence] = useState<string>();
  const replacedSentence = useMemo(
    () => removeBlankAndSpecialCharacters(compareSentence ?? ''),
    [compareSentence]
  );

  const compare = useMemo(() => {
    // script와 compareSentence에서 특수기호 및 공백 제거
    console.log(script, replacedSentence);
    return replacedSentence;
  }, [script, replacedSentence]);

  compare;

  useEffect(() => {
    const getData = async () => {
      const speechId = +path.split('/')[2];
      const data = await getSpeechSentenceAction(speechId);
      setCompareSentence(data?.sentence);
    };
    getData();
  }, [path]);

  return { compareSentence };
};

const removeBlankAndSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z가-힣]/g, '');
};
