"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array with union operator
var user = ["as"];
//Tuple
var tuser = ["", 23, true];
tuser[2] = false;
var person;
person = ["Ankit", 25, true]; // Valid
function getPerson() {
    return ["Ankit", 25];
}
var tperson = getPerson();
console.log(tperson[0]); // Output: Ankit
console.log(tperson[1]); // Output: 25
var friends;
friends = ["Ankit", "Rohan", "Vikas"]; // Valid
var puser = [55, "sd"];
