function diffArray(arr1, arr2) {
  var newArr = [];
  var interception = [];
  
  function mixedArr(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let filteredItem = arr2.filter(item => item == arr1[i])
      newArr.push(filteredItem)
    }

    let items = newArr.map(list => list[0]).filter(item => item != undefined);
    
    for (let i = 0; i < arr1.length; i++) {
      if (items.indexOf(arr1[i]) == -1) {
        interception.push(arr1[i]);
      }
    }

    
  }

    mixedArr(arr1, arr2);
    mixedArr(arr2, arr1);
    
    return interception;
}
    


console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));