function isPrime(num) {
  if (num == 1) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }  
    }
  }

  return true
}

function sumPrimes(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  //? console.log(primes)
  //? console.log(primes.filter(num => num <= num))
  
  const result = primes.reduce((sum, num) => {
    return sum + num
  }, 0);

  return result;
}

console.log(sumPrimes(10));
