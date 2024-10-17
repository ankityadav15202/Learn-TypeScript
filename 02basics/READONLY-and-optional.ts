type User = {
    readonly _id : string
    name : string;
    email : string;
    isActive : boolean;
    creaditCardDetails? : number
}

let myUser : User = {
    _id : "52775",
    name : "ankit",
    email : "asfd",
    isActive : false
}


type CardNumber = {
    cardnumber : string
}

type cardDate = {
    carddate : string
}

type cardDetails = cardDate & CardNumber & {
    cvv : number
}

export{}


// readonly Modifier
// The readonly modifier ensures that a property cannot be modified after it has been initialized. It is useful when you want to protect certain properties from being changed.

// Key Points for readonly:
// A property marked readonly can only be set during initialization (either directly when creating the object or inside a constructor).
// It prevents accidental modification of data.



// Optional (?) Properties
// Optional properties allow you to define properties that are not required when creating an object. This is useful when some properties might not always have values.


// Key Points for Optional (?) Properties:
// Optional properties can either be present or absent in the object.
// The type of an optional property is effectively T | undefined (for example, age?: number means age can be either a number or undefined).