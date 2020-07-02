function chunkArrayInGroups(arr, size) {
  let subArray;
  let newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    subArray = arr.slice(i, i + size);
    newArray.push(subArray);
  }

  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));