function spinalCase(str) {
  const words = str.split(/[\s\_]/g);
  const result = words.map(word => {
    let result = word[0].toLowerCase();
    for (let i = 1; i < word.length; i++) {
      const letter = word[i];
      if ((letter.match(/[A-Z]/) || []).length === 1) result += `-${letter}`
      else result += letter;
    }
    return result;
  });
  //words.split()
  return result.join('-').toLowerCase();
}

const test = spinalCase('AllThe-small Things');
console.log(test);
