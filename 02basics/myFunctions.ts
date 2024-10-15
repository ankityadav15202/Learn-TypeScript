function addTwo(num : number){
    // num.toUpperCase()
    return num + 2
}

function getUpper (val : string){
    return val.toUpperCase()
}

function signUp(name : string, email : string, ispaid : boolean){
    return `${name},${email},${ispaid}` + name + email
}

let loginUser = (name : string, email:string= "anlko", ispaid: boolean = false)=>{

}

addTwo(5)
getUpper("hello")
signUp("ankit","ankit@gmail.com",false)
loginUser("ankit")
export {}