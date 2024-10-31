//arrow function

const numbers = [1,2,3,4,5,7]

const squares = numbers.map((element)=> Math.pow(element, 2))

console.log(squares)

const total = numbers.reduce((accumulator, element)=>accumulator + element)

console.log(total)

