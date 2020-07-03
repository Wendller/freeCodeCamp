function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let orbitalValues = [];
  
  function getOrb(altitude) {
    let semiAxis = (earthRadius + altitude)**3;
    let orbPeriod = 2 * Math.PI * Math.sqrt(semiAxis / GM);

    return Math.round(orbPeriod);
  }

  arr.map((obj) => {
    let objPeriod = {
      name: obj.name,
      orbitalPeriod: getOrb(obj.avgAlt)
    }

    return orbitalValues.push(objPeriod);
  });

  return orbitalValues;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));