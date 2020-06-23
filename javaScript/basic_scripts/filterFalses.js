function bouncer(arr) {

  let dangers = [false, null, "", 0, undefined];
  let indexes = [];
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (dangers.indexOf(arr[i]) >= 0 || Number.isNaN(arr[i])) {
      indexes.push(i);
    }
   
    (indexes.indexOf(i) >= 0) ? console.log("Intruder Here!") : array.push(arr[i]);
  }
  console.log(array);

  return array;
}

bouncer([7, "ate", "", false, 9]);
