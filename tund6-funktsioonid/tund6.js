//function - a section of reusable code. Declare once
//use it whenever you want.
//call the fuction to execute the code.

function add(x, y){
    return x + y
}
console.log(add(2, 3))

function isEven(number){
    return number % 2 === 0 ? true : false
}
console.log(isEven(14))
console.log(isEven(9))

function isValidEmail(email){
    if(email.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(isValidEmail("brok@gmail.com"))
console.log(isValidEmail("brok.gmail.com"))