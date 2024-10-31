//function expression

const numbers = [1,2,3,4,5,7]

const squares = numbers.map(function(element){
    return Math.pow(element, 2)
})

console.log(squares)

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element
})

console.log(total)


