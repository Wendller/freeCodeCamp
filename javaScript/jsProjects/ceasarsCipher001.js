function rot13(str) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const partners = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let decoded = "";

  str.split(" ").map(word => {
    // console.log(word)
    for (let i = 0; i < word.length; i++) {
      // console.log(word[i])
      if (/[A-Z]/.test(word[i])) {
        let partner = partners[letters.indexOf(word[i])].charCodeAt();

        // console.log(partner);
        decoded += String.fromCharCode(partner);
      } else {
        decoded += word[i];
      } 
    }
   decoded += " ";
  });

  str = decoded;
  return str;
}

console.log(rot13("SERR PBQR PNZC"));
