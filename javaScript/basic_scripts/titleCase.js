function titleCase(str) {
  let string = "";
  let strArray = str.split(" ");

  console.log(strArray);

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].toLowerCase();

    
    strArray[i] = strArray[i].replace(strArray[i].charAt(0), strArray[i].charAt(0).toUpperCase());
  }

  console.log(strArray)

  return strArray.join(" ");
}


titleCase("I'm a Little Tea pot");