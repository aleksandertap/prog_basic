// 1
let menu = [
    {name: "Veisesabasupp", price: 8.00, category: "starter"},
    {name: "Mozzarella salat", price: 13.00, category: "starter"},
    {name: "Lambasüdame tartar", price: 13.00, category: "starter"},
    {name: "Suitsune seakülg", price: 18.00, category: "main"},
    {name: "Teriyaki part", price: 19.00, category: "main"},
    {name: "Praetud merikoger", price: 19.00, category: "main"},
    {name: "Kamatarrend", price: 8.00, category: "dessert"},
    {name: "Kodune vahvel", price: 8.00, category: "dessert"},
    {name: "Porgandikook", price: 8.00, category: "dessert"},
]

function analyzeMenu(menu){
    let below10 = menu.filter(item => item.price < 10)

    let odavadTooted = below10.map(item => item.name)

    nameAndPrice = below10.forEach(item => {
        console.log(`Nimi: ${item.name}, Hind: ${item.price}`)}
    )

    let cheapTotalCost = below10.reduce((sum, item) => sum + item.price, 0) 

    return {
        odavadTooted,
        cheapTotalCost
    }
 }

 console.log(analyzeMenu(menu))
 



// all on kontrolliks

// // 2
// let below10 = menu.filter(item => item.price < 10)
// console.log(below10)

// //3
// let odavadTooted = below10.map(item => item.name)
// console.log(odavadTooted)

// //4
// let nameAndPrice = below10.forEach(item => {
//     console.log(`Nimi: ${item.name}, Hind: ${item.price}`)}
// )
// //5
// let cheapTotal = below10.reduce((sum, item) => sum + item.price, 0) 
// console.log(`Odavate toodete hind kokku: ${cheapTotal} eurot.`)