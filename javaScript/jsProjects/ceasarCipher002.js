function rot13(str) {

  var decoded = [];

  str.split("").map(word => {
    // console.log(word)
    for (let i = 0; i < word.length; i++) {
      // console.log(word[i])
      if (/[A-Z]/.test(word[i])) {

        decoded.push(((word[i].charCodeAt() - 65 + 13) % 26) + 65)
        // console.log(partner);
        
      } else {
        decoded.push(word[i].charCodeAt());
      } 
    }    
  });

  str = String.fromCharCode.apply(String, decoded);

  return str
  
}

console.log(rot13("SERR PBQR PNZC"));