function largestOfFour(arr) {
  let biggers = [];

  for (let i = 0; i < arr.length; i++) {
    let bigger = 0;
    for (let j = 0; j < arr[i].length; j++) {
      //console.log(arr[i][j])
      if (arr[i][j] > bigger) {
        bigger = arr[i][j];
      }
    }
    biggers.push(bigger);
    console.log(biggers);
  }
  return biggers;
}