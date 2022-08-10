const hasVowel = letter => (letter.match(/[aeiou]/) || []).length >= 1;

const translatePigLatin = str => {
  const firstLetter = str[0];
  if (hasVowel(firstLetter)) {
    return str + 'way';
  }
  //first consonant
  let firstsCons = firstLetter;
  let newStr = str.slice(1);
  for (let i = 1; i < str.length; i++) {
    const letter = str[i];
    if (!hasVowel(letter)){
      firstsCons += letter;
      newStr = newStr.slice(1);
    }
    else break;
  }
  return newStr + firstsCons + 'ay';
};

const test = translatePigLatin("glove");
console.log(test);
