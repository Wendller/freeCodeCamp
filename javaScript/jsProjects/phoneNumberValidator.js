function telephoneCheck(str) {
  
  const phoneExp = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/g;

  if (phoneExp.test(str)) {
  
      return true
  }

  return false;
}

console.log(telephoneCheck("(6054756961)"));