function frankenSplice(arr1, arr2, n) {
  
  let array = [...arr2]
  array.splice(n, 0, ...arr1);

  console.log(array)
  return array;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

