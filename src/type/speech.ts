export interface SpeechList {
  speechList: SpeechItem[];
}

export interface SpeechItem {
  id: number;
  speechId: number;
  title: string;
  difficulty: number;
  isComplete: boolean;
  score: number;
}
