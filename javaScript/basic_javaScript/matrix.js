function zeroArray(m, n) {

  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    let row = [];

    for (let j = 0; j < n; j++) {
      row.push(0);
    }

    newArray.push(row);
  }

  return newArray;
}

console.log(zeroArray(3,3));