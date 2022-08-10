const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.setFullName = function(fullName) {
    firstName = fullName.split(' ')[0];
    lastName = fullName.split(' ')[1];
  };

  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(fName) {
    firstName = fName;
  }

  this.getLastName = function() {
    return lastName;
  };
  this.setLastName = function(lName) {
    lastName = lName;
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFullName('Haskell Curry')
console.log(bob.getFullName());
