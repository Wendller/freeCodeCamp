function destroyer(arr) {
  
  let array = Array.from(arguments)[0];

  let targets = Array.from(arguments).filter(item => typeof item == 'string' || typeof item == 'number');

  console.log(targets)

  for (let i = 0; i < targets.length; i++) {
    array = array.filter(item => item != targets[i]);
  }

  return array
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));