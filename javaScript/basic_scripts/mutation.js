function mutation(arr) {
  let found = [];
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < arr[1].length; i++) {
    found.push(first.indexOf(second[i]));
  }
  console.log(found);
  for (let j = 0; j < found.length; j++) {
    if (found[j] === -1) {
      console.log("false" + found);
      return false
    }
  }

  for (let j = 0; j < found.length; j++) {
    if (found[j] != -1) {
      console.log("true " + found);
      return true
    } 

  } 

}

mutation(["hello", "hey"]);