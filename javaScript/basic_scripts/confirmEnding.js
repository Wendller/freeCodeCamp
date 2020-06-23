function confirmEnding(str, target) {

  let targetPart = str.slice((str.length - target.length), str.length);
  console.log(targetPart);

  if (targetPart == target) {
    return true;
  } else {
    return false;
  }
  
}

confirmEnding("Bastian", "n");