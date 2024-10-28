type User = {
    name : string;
    id : number;
    isLoggedin : boolean;
}


function createuser(user : User){
    return {name : user.name, id : user.id, isLoggedin : user.isLoggedin}
}
createuser({name : "ankit", id : 15, isLoggedin: false})

type name = string

let username : name = "ankit"

export {}


// In TypeScript, type is used to define custom types (or type aliases) that you can reuse throughout your code to specify the shape of objects, functions, or any other values. It allows you to describe the structure and type requirements for data, enabling better type safety and readability.

// Why use type?
// Type Safety: It ensures that the data adheres to the specified structure, helping prevent errors.
// Code Readability: It makes your code easier to understand by explicitly stating the types of data expected.
// Reusability: You can define a type once and use it in multiple places in your code, avoiding repetition.