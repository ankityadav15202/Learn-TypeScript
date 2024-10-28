"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 5;
score = "52";
var ankit = { name: "ankit", id: 54 };
ankit = { username: "asd", id: 25 };
// function getId(id :number | string) : number | string{
//     return id
// }
function getId(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id + 2;
}
getId(5);
getId("5");
var data = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "middle";
