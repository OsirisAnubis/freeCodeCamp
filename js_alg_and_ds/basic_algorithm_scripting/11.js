const titleCase = str => {
  const arrWords = str.split(' ');
  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i][0].toUpperCase() + arrWords[i].slice(1).toLowerCase()
  }
  return arrWords.join(' ');
};

console.log(titleCase("I'm a little tea pot"));
