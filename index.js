const circle = require("./circle.js");

const radius = 3;

console.log(`The circumference of a circle of radius ${radius} is ${circle.circumferennce(3)}`);
console.log(`Its area is ${circle.area(radius)}`);

const Account = require("./accounting.js");
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());

//Load the moment package as a module
const moment = require("moment");

//Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

//compute the number of years
console.log(moment("1993-04-22").fromNow());