const findLongestWordLength = str =>
  str
  .split(' ')
  .reduce((acc, val) => (acc > val.length) ? acc : val.length, 0);

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
