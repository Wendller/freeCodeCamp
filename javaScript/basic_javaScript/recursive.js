// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }


// }

// const arrays = [1, 2, 3, 4, 5];

// const result = multiply(arrays, 3);

// console.log(result);

///////////////////////////////////////////////////////////////

// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
//     console.log(n)
//     const countArray = countdown(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countdown(2))

function rangeOfNumbers(startNum, endNum) {

  if (endNum < 1) {
    return [];
  } 
  
  if (startNum > endNum) {
    return [];
  }

  else {
    const numArray = rangeOfNumbers(startNum + 1, endNum);
    console.log(numArray)
    numArray.push(startNum);
    return numArray
  }
   
}

console.log(rangeOfNumbers(1, 5));