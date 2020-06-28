function spinalCase(str) {

  let array = str
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace(/_/g, " ")
                .split(" ")
                .map(word => word.toLowerCase())
                .join("-");

  
  return array;
}

console.log(spinalCase('The_Andy_Griffith_Show'));