//? g => global
//? i => insensitive
//? () => group
//? | => or 
//? * =>  0 or n 
//? + => 1 or n 
//? ? => 0 or 1
//? {min, max} => minimum and maximum
//? m - multiline
//? ^ => begins with
//? $ => end with
//? [^] => denied
//? $1 $2 $3 => retrovisors

const { text, html, alfabeto } = require("./text");

const reg_epx = /\Lorem/gi;

const checkExp = text.match(reg_epx);

console.log(checkExp);

//! teste com replace e group
//console.log(text.replace(/(Lorem|Ipsu)/gi, '<$1/>'));

//! busando tag html
console.log(html.match(/<.+>.+<\/.+>/g)); //? greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //? non-greedy
