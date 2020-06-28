const wordRegExp = /([\wÁ-ú]+)/g

//? Not numbers
const notNumReg = /\D/

//? check cpf 
const cpfForm = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

//? check phone number
const phoneNumReg = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/;

