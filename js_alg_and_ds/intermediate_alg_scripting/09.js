function fearNotLetter(str) {
  const start = str[0].charCodeAt();
  for (let i = start; i <= start + str.length - 1; i++)
    if (str[i - start] !== String.fromCharCode(i)) return String.fromCharCode(i);
  return undefined;
}

const test = fearNotLetter("abcdefghjklmno");
console.log(test);
