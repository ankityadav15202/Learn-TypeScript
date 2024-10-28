let score : number | string = 5
score  = "52"

type User = {
    name : string,
    id : number
}

type admin = { 
    username : string,
    id : number
}


let ankit : User | admin = {name: "ankit", id : 54}
ankit = {username : "asd", id  : 25}



// function getId(id :number | string) : number | string{
//     return id
// }
function getId(id :number | string) : number | string{
    if(typeof id === "string"){
        return id.toLowerCase()
    }
    return id + 2
}

getId(5)
getId("5")


const data : (number | string )[] = [1,2,3,"4"]

let seatAllotment : "lower" | "middle" | "upper"

seatAllotment = "middle"
// seatAllotment = "side"


export{}