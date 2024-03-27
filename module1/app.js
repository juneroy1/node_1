// commonJS - every file is module (by default)
// modules -- encapsulated code (only share minimum)
// const { secret, name2 } = require("./4-names.js");
const names = require("./4-names.js");
const sayhI = require("./5-utils.js");

const data = require("./6-alternative.js")
require("./7-mine.js")

console.log(names.secret, names.name2);
console.log("data", data)
sayhI("Juneroy");
sayhI(names.secret);
sayhI(names.name2);




