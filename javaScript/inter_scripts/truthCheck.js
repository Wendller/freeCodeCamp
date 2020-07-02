function truthCheck(collection, pre) {

  for (let i = 0; i < collection.length; i++) {
    let keys = Object.keys(collection[i]);
    // console.log(keys);
    if (keys.indexOf(pre) != -1 && Boolean(collection[i][pre])) {
      console.log("ok");
    } else {
      // console.log("Oops...");
      return false;
    }
  }
  return true;
}



console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));