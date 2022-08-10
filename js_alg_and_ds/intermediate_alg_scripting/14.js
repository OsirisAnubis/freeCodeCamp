const isPrime = number => {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function sumPrimes(num) {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) result += i;
  }
  return result;
}

const test = sumPrimes(977);
console.log(test);
