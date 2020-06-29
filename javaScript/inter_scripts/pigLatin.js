function translatePigLatin(str) {
  const consonantExp = /^([^aeiouAEIOU])(\w)+/g;
  const notConsonantExp = /^([aeiouAEIOU])(\w)+/g;

  if (consonantExp.test(str)) {
    console.log("Consonant word");
    
    const firstLetter = str.match(/^([^aeiouAEIOU]+)/g);
    str = str.replace(/^([^aeiouAEIOU]+)/g, "");
    
    return `${str}${firstLetter}ay`;
  }

  if (notConsonantExp.test(str)) {
    console.log("Vowel word");
    
    return `${str}way`;
  }

}

console.log(translatePigLatin("eight"));