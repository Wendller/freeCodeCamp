function addTogether() {

  let a = arguments[0];
  let b = arguments[1];
  
  if (arguments.length > 1) {
    return typeof (a + b) == "number" ? a + b : undefined;
  } else {
    if (typeof a == "number") {
      return function addPlus(b) {
        return typeof (a + b) == "number" ? a + b : undefined;
      }
    }
  }

}

console.log(addTogether(2, 3));