function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let targetKeys = Object.keys(source);

  for (let i = 0; i < collection.length; i++) {
    var objKeys = Object.keys(collection[i])

    //console.log(collection[i][objKeys[0]])
    for (let j = 0; j < objKeys.length; j++) {
      //console.log(source[targetKeys[j]])
       if (collection[i][objKeys[j]] == source[objKeys[j]] && objKeys.length >= targetKeys.length) {

         arr.push(collection[i]);
       }
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] == arr[k + 1]) {
      arr.splice(k, 1)
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let itemKey = Object.keys(arr[i]);

    for (let j = 0; j < targetKeys.length; j++) {
      if (itemKey.includes(targetKeys[j]) == false) {
        arr.splice(i, 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let itemKey = Object.keys(arr[i]);

    for (let j = 0; j < itemKey.length; j++) {
      if (itemKey[j] == targetKeys[j] &&  arr[i][itemKey[j]] != source[itemKey[j]]) {
        console.log(arr[i][itemKey[j]])
        return arr.splice(i, 0);
      }
    }
  }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));