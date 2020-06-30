function pairElement(str) {

  let array = [];
  let pairs = [];
  function matchPair(string) {

    string = string.split("").map(letter => {
      if (letter == "G") {
        return array.push(`${letter}C`);
      }

      if (letter == "C") {
        return array.push(`${letter}G`);
      }

      if (letter == "A") {
        return array.push(`${letter}T`);
      }

      if (letter == "T") {
        return array.push(`${letter}A`);
      }
    });

    array = array.map(pair => pair.split());

    for (let i = 0; i < array.length; i++) {

      pairs.push(array[i][0].replace(/([A-Z])([A-Z])/g, "$1$2").split(""));
    }
    return pairs;
  }



  return matchPair(str);
}

console.log(pairElement("ATCGA"));