let reverseString = (word) => {
  let result = '';
  for (i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};
