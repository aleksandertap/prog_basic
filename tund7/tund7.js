// objects -properties and/or methods

// let person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("Hi! I am spongebob!")},
//     eat: () => {console.log("Im eatin things krabby")}
// }

// let person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 33,
//     isEmployed: false,
//     sayHello: function(){console.log("Hi! i Am PaTriCK")},
//     eat: () => {console.log("im eating roks")}
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// person1.sayHello()
// person2.sayHello()
// person1.eat()
// person2.eat()

// this - reference to the objecy where THIS is used
//        person.name = this.name

// let person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello: function(){console.log(`Hi! I am ${this.name}`)},
//     eat: () => {console.log("Im eatin things krabby")}
// }
// let person2 = {
//     firstName: "Patrick",
//     favFood: "rocks",
//     sayHello: function(){console.log(`Hi! I am ${this.firstName}`)},
//     eat: () => {console.log(`Im eatin things like ${this.favFood}`)},
// }


// person1.sayHello()
// person2.eat()

// contructor = special methis for deifing the 
//              properties and methods of objects






// class 

// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: $${this.price.toFixed(2)}`)
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }

// let salesTax = 0.05;
// let product1 = new Product("Shirt", 19.99)

// product1.displayProduct();

// static - class owns anything static, not the objects

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius
//     }
//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// }

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.getCircumference(10))
// console.log(MathUtil.getArea(10))


// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username;
//         User.userCount++
//     }

// }

// const user1 = new User("Spongebob")
// const user2 = new User("Patrick")
// const user3 = new User("Sandy")

// console.log(user1.username)
// console.log(user2.username)
// console.log(user3.username)
// console.log(User.userCount)

// getter = special methos that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing object

class Rectangle{
    constructor(width, height){
        this.width = width,
        this.height = height
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        }
        else{
            console.error("width must be a positive number")
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height
    }
    get area(){
        return this._width * this._height
    }
}

const rectangle = new Rectangle(3 , 4)
rectangle.width =-55
rectangle.height = "pizz"

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)