function compare(a, b){
  if (a < b){return -1;}
  if (a > b){return 1;}
  if (a === b){return 0;}
}

function getIndexToIns(arr, num) {
  let closest = "";
  let distances = [];
  let minDistance = "";
  arr = arr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    distances.push(Math.abs(arr[i] - num));
    minDistance = Math.min(...distances);

    if (Math.abs(arr[i] - num) == minDistance) {
      closest = arr[i];
    }
  }

  console.log("The closest number: " + closest);
  
  if (num < closest) {
    arr.splice(arr.indexOf(closest), 0, num);
  }

  if (num > closest) {
    arr.splice(arr.indexOf(closest) + 1, 0, num);
  }
  
  console.log("The array: " + arr);

  return arr.indexOf(num);
  
}

getIndexToIns([2, 5, 10], 15);