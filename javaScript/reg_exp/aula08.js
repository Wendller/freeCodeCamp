const { html2 } = require("./text");

//? $1 $2 --> retrovisor

console.log(html2);
//console.log(html2.match(/<(\w+).*>.+?<\/\1>/g));
//console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
console.log(html2.replace(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g, 'A tag encontrada: $1'));