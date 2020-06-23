function findLongestWordLength(str) {
  let string = str.split(" ");
  let bigger = 0;
  for (let i = 0; i < string.length; i++) {
    if(string[i].length > bigger) {
      bigger = string[i].length;
    }

  }
  return bigger;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");