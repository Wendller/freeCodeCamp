function steamrollArray(arr) {
  return arr.reduce((array, target) => {
    if (!Array.isArray(target)) {
      return array.concat(target);
    } else {
      return steamrollArray(array.concat(target));
    }
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));