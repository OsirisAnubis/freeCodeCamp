function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  for (const obj of collection) {
    const isOk = keys.reduce((acc, key) =>
      (source[key] === obj[key]) ? acc : false && acc, true);
    if (isOk) arr.push(obj);
  }
  // Only change code above this line
  return arr;
}

const test = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(test);
