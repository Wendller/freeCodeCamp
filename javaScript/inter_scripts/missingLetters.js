function fearNotLetter(str) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  const range = str.length;
  let string = "";
  let target = allLetters.slice(allLetters.indexOf(str[0]), allLetters.indexOf(str[0]) + range);

  console.log("Target: " + target);

  for (let i = 0; str.length; i++) {
    if (str[i] != target[i]) {
      return "Missing letter: " + target[i];
    }
  }

  return undefined
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));