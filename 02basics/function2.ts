
// Return type in function
function addTwo(num: number): number {
    return num + 2;
    // return "hello"  // This would cause an error since the return type is number.
}

addTwo(5);

// Function with return type
function getValue(myVal: number): boolean {
    if (myVal > 5) {
        return true;
    }
    return true
//     // return "200 OK";  // Error: Type 'string' is not assignable to type 'boolean'
}

const getHello = (name: string): string => {
    return "";  // Returns a string
};

// An array with a union of types (string and number)
const heros: (string | number)[] = ["thor", 1, "ironman"];

// Using map with correct typing
heros.map((hero) => {
    return `hero is ${hero}`;  // Template string
});

