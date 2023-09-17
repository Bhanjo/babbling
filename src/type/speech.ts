export interface SpeechList {
  speechList: SpeechTitle[];
}

export interface SpeechSentences {
  sentences: SpeechSentence[];
}

export interface SpeechItem {
  id: number;
  speechId: number;
  title: string;
  sentence: string;
}

export type SpeechTitle = Pick<SpeechItem, 'id' | 'speechId' | 'title'>;
export type SpeechSentence = Pick<SpeechItem, 'id' | 'speechId' | 'sentence'>;
