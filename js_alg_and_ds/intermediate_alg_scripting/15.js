const nok = (n1, n2) => {
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);

  for (let num = max; num <= min * max; num += max) {
    if (num % min === 0) return num;
  }
}
function smallestCommons(arr) {
  const x = Math.min(...arr);
  const y = Math.max(...arr);
  let scm = 1;
  for (let i = x; i <= y; i++) {
    scm = nok(scm, i);
  }
  return scm;
}

smallestCommons([1,5]);
