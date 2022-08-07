// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  const result = [...bookList];
  result.push(bookName);
  return result;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const result = [];
  for (const name of bookList) {
    if (name === bookName) continue;
    result.push(name);
  }
  return result;
    // Change code above this line
}
