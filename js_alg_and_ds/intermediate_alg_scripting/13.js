const fib = n => (n === 0 || n === 1) ? n : fib(n - 1) + fib(n - 2);

function sumFibs(num) {
  let sum = 0;
  for (let i = 0; i < Infinity; i++) {
    const numFib = fib(i);
    if (numFib > num) break;
    else if (numFib % 2 === 1) sum += fib(i);
  }
  return sum;
}

const test = sumFibs(4);
console.log(test);
