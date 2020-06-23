function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let array = [];
    let string = "";
    for (let i = 0; i < num; i++) {
      array.push(str);
      string += array[i];
    }
    
    return string;
  }
}

repeatStringNumTimes("abc", 3);

