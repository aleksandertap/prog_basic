let users = [ 
  {name: "John", age: 25},
  {name: "Alice", age: 30},
  {name: "Bob", age: 20},
  {name: "Jane", age: 35},
  {name: "Tom", age: 40},
  {name: "Sara", age: 29}
]
let above25 = users.filter(user => user.age > 25)
console.log(above25)

let userWithIsAdult = users.map(user => 
  ({...user, isAdult: user.age >= 18}) )
console.log(userWithIsAdult)

userWithIsAdult.forEach(user => {
  console.log(`Nimi: ${user.name} ja täiskasvanud? ${user.isAdult}`)
})
let average = users.reduce((sum, next) => sum + next.age, 0) / users.length
console.log(`Keskmine vanus on: ${average}`)
