function fibRange(num) {
  let range = [];
  let a = 0;
  let b = 1;
  let finalNum = b;

  for (let i = 0; i < num; i++) {
    range.push(finalNum);
    finalNum = a + b;
    a = b;
    b = finalNum;
  }

  console.log("Fibonacci sequence: " + range);
  return range.filter(number => number % 2 != 0);
}

function sumFibs(num) {
  const fibSequence = fibRange(num);

  let sum = 0;
  
  for (let i = 0; i < fibSequence.length; i++) {
    if (fibSequence[i] <= num) {
      sum += fibSequence[i];
    }
  }

  return sum;
}

// console.log(fibRange(10));
console.log(sumFibs(10));