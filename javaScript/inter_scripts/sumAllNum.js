function sumAll(arr) {
  let numbers = [];
  let sum = arr[0] + arr[1];

  if (arr[0] > arr[1]) {
    for (let i = 0; i <= arr[0] - arr[1]; i++) {
      numbers.push(arr[0] - i);
      console.log(numbers);
    }
    
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  if (arr[0] < arr[1]) {
    for (let i = 0; i <= arr[1] - arr[0]; i++) {
      numbers.push(arr[1] - i);

    }
    
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  return sum;
}

console.log(sumAll([4, 1]));