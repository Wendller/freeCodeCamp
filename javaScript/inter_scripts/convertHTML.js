function convertHTML(str) {
  
  const regExpAMP = /(&)/g;
  const regExpLT = /(<)/g;
  const regExpGT = /(>)/g;
  const regExpLTGT = /(<>)/g;
  const regExpQOT = /(")/g;
  const regExpAPOS = /(')/g;

  if (regExpAMP.test(str)) {
    str = str.replace(regExpAMP, "$1amp;")
    return str;
  }

  if (regExpLTGT.test(str)) {
    str = str.replace(regExpLTGT, "&lt;&gt;")
    return str;
  }

  if (regExpLT.test(str)) {
    str = str.replace(regExpLT, "&lt;")
    return str;
  }

  if (regExpGT.test(str)) {
    str = str.replace(regExpGT, "&gt;")
    return str;
  }

  if (regExpQOT.test(str)) {
    str = str.replace(regExpQOT, "&quot;")
    return str;
  }

  if (regExpAPOS.test(str)) {
    str = str.replace(regExpAPOS, "&apos;")
    return str;
  }
  
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));