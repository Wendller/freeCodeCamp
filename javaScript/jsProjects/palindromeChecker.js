function palindrome(str) {
  let string = str.split(" ").join("").toLowerCase();

  const regExp = /[^a-zA-Z0-9]/g;
  string = string.replace(regExp, "");

  let reverseString = string.split("").reverse().join("");

  console.log(string);
  console.log(reverseString);
  
  return string == reverseString ? true : false;
}



console.log(palindrome("A man, a plan, a canal. Panama"));