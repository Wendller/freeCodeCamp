function convertToRoman(num) {

  let numToRoman = "";

  const numerals = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };

  for (let i = 0; i < Object.keys(numerals).length; i++) {
    if (num >= numerals[Object.keys(numerals)[i]]) {
      numToRoman += Object.keys(numerals)[i].repeat(Math.trunc(num / numerals[Object.keys(numerals)[i]]));
      console.log(numToRoman);

      num -= numerals[Object.keys(numerals)[i]] * Math.trunc(num / numerals[Object.keys(numerals)[i]]);
      console.log(num);
    }
  }
  
  return numToRoman;
}

 console.log(convertToRoman(21));