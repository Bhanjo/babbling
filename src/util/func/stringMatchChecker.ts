export interface StringMatchRateCheckerOptions {
  calcInconsistentCharIndex?: true;
}

export interface StringMatchRateCheckerResult {
  matchRate: { matchLength: number; totalLength: number };
  inconsistentCharIndex?: number[];
}

export const stringMatchChecker = (
  targetString: string,
  originString: string,
  option?: StringMatchRateCheckerOptions
): StringMatchRateCheckerResult => {
  // str1과 str2를 비교
  // 전체 텍스트 길이는 originString 기준
  // matchLength는 targetString이 originString과 얼마나 일치하는지 판별
  // inconsistentCharIndex는 originString과 비교했을 때 다른 targetString의 index를 담고있게한다.

  return {
    matchRate: {
      matchLength: 1,
      totalLength: 10,
    },
    inconsistentCharIndex: [1, 2, 3],
  };
};
