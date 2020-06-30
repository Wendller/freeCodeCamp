function uniteUnique(arr) {
  
  const arrays = [...arguments];

  let response = [];

  response.push(arr[0])

  console.log("First number: " + arr[0]);

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (response.indexOf(arrays[i][j]) == -1) {
        response.push(arrays[i][j])
        //console.log(response)
      } 
    }
  }

  return response
}


console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));