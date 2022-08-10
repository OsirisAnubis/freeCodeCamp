const dna = {
  'G': 'C',
  'C': 'G',
  'A': 'T',
  'T': 'A'
};
function pairElement(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push([str[i], dna[str[i]]])
  }
  return result;
}

const test = pairElement("ATCGA");
console.log(test);
