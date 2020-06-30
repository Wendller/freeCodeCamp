function smallestCommons(arr) {
  let range = [];

  if (arr[0] > arr[1]) {
    arr = [arr[1], arr[0]]
  }

  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  
  console.log("The range of numbers is: " + range);

  let smallerCommon = 0;
  const biggerCommon = range.reduce((total, num) => { return total * num }, 1);

  for (let i = 0; i < biggerCommon; i++) {
    smallerCommon++;
    for (let j = range[0]; j <= range[range.length - 1]; j++) {
      if (smallerCommon % j != 0) {
        break;
      } else if (j == range[range.length - 1]) {
        i = biggerCommon;
      }
    }
  }

  return "The smallest coomon multiple is : " + smallerCommon;
}


console.log(smallestCommons([2, 10]));
