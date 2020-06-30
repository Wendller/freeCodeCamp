function dropElements(arr, func) {

  let target = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      let first = {
        index: arr.indexOf(arr[i]),
        num: arr[i]
      } 
      target = first;
      break;
    }

  }

  if (target.index != undefined) {
    arr = arr.slice(target.index + 1);
    arr = [target.num, ...arr];
  } else {
    return [];
  }

  return arr;
}

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 4;}));