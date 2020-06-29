function myReplace(str, before, after) {
  const upperRegExp = /([A-Z])(\w+)/g;
  const lowerRegExp = /([a-z])(\w+)/g;

  if(upperRegExp.test(before)) {
    after = after.replace(after[0], after[0].toUpperCase())
    return str.replace(before, after);  
  }

  if(lowerRegExp.test(before)) {
    after = after.replace(after[0], after[0].toLowerCase())
    return str.replace(before, after);  
  }
  
}

console.log(myReplace("Let us go to the store", "store", "mall"));