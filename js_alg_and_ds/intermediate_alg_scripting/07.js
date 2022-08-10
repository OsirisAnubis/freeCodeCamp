function myReplace(str, before, after) {
  if ((before[0].match(/[A-Z]/) || []).length > 0)
    return  str.replace(before, after[0].toUpperCase() + after.slice(1));
  return str.replace(before, after[0].toLowerCase() + after.slice(1));
}

const test = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(test);
