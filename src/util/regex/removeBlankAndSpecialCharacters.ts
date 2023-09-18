export const removeBlankAndSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z가-힣]/g, '');
};
