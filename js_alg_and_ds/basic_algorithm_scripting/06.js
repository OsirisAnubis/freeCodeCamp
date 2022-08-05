const confirmEnding = (str, target) =>
  target === str.slice(str.length - target.length);

const test = confirmEnding("Bastian", "n");

console.log(test);
