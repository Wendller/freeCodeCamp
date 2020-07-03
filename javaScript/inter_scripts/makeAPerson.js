var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  if (typeof firstAndLast != "string") {
    return undefined;
  } else {

    let first = firstAndLast.split(" ")[0];
    let last = firstAndLast.split(" ")[1];

    this.getFirstName = function() {
      return first;
    };

    this.setFirstName = function(string) {
      if (typeof string == 'string') {
        first = string.split(" ")[0];
        return first + " " + last;
      }
    };

    this.getLastName = function() {
      return last;
    };

    this.setLastName = function(string) {
      if (typeof string == 'string') {
        if (string.split(" ").length == 1) {
          last = string;
          return first + " " + last;
        } else {
          last = string.split(" ")[1];
          return first + " " + last;
        }
      }
    };

    this.getFullName = function() {
      return first + " " + last;
    };

    this.setFullName = function(string) {
      if (typeof string == 'string') {
        first = string.split(" ")[0];
        last = string.split(" ")[1];

        return first + " " + last;
      }
    };
  }
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.setFirstName("John"));
console.log(bob.getFirstName());

console.log(bob.setFullName("Haskell Curry"));