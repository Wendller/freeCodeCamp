const { lookahead } = require("./text");

console.log(lookahead);

//console.log(lookahead.match(/.+[^in]active$/gim));

//? Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

//? Positive lookbehind (frases que tem ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim));