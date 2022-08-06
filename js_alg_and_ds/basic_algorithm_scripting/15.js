function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const word2 = arr[1].toLowerCase();
  for (let i = 0; i < word2.length; i++) {
    const letter = word2[i];
    if (!word1.includes(letter)){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
