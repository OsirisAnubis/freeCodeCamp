function telephoneCheck(str) {
  const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regExp.test(str);
}

const test = telephoneCheck("1 555-555-5555");
console.log(test);
