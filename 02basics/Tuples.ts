// array with union operator
const user : (string  | number)[] = ["as"]

//Tuple


const tuser : [string, number, boolean] =  ["", 23, true]

tuser[2] = false

let person: [string, number, boolean];

person = ["Ankit", 25, true];  // Valid


function getPerson(): [string, number] {
    return ["Ankit", 25];
}

const tperson = getPerson();
console.log(tperson[0]);  // Output: Ankit
console.log(tperson[1]);  // Output: 25



let friends: [string, ...string[]];

friends = ["Ankit", "Rohan", "Vikas"];  // Valid


// optional element

type optional = [number, string, boolean?]

let puser : optional = [55, "sd"]

export {}