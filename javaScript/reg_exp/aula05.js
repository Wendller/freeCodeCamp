const { alfabeto } = require("./text");

//? [abc] --> Conjunto [^] - Negação
//? [0-9a-z] --> Range min-max
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-k]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));