let shoppingCart =[
    {name: "apple", quantity: 4},
    {name: "banana", quantity: 2},
    {name: "orange", quantity: 5},
    {name: "milk", quantity: 1},
    {name: "bread", quantity: 2},
];
console.log(shoppingCart)

let koguQuant = shoppingCart.reduce((sum, next) => sum + next.quantity, 0)
console.log(`Toodete täielik kogus on ${koguQuant}`)

shoppingCart.push({name: "yogurt", quantity: 3})
console.log(shoppingCart)

shoppingCart[0] =  {name: "apple", quantity: 4+3},
console.log(shoppingCart)

shoppingCart.splice(1,1)
console.log(shoppingCart)

let cartNames = shoppingCart.map(item => item.name)
console.log(cartNames)

let search = cartNames.includes("milk")
console.log(search)

shoppingCart.sort((quant1, quant2)=> quant2.quantity - quant1.quantity)
console.log(shoppingCart)