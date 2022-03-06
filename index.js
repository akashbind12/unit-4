const addition = require("./add.js");
const division = require("./div.js");
const multiplication = require("./multiply.js");
const subtraction = require("./subtract.js");

// Enter the values of a and b
let a = 4;
let b = 2;

let add = addition(a,b)
let div = division(a,b)
let mul = multiplication(a,b)
let sub = subtraction(a,b)

console.log(` add:${add}, div:${div}, mul:${mul}, sub:${sub}`)
