// ternary operator
// let age = 21;
// let message = age >= 18 ? "You're and adult" : "You're a minor";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// if else startement lihtsalt oma sisse panna

// switch
// let day = 7;
// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }

// kui liiga palju else if statemente. alates neljast
// break annab selle ainuõige, kui breaki ei ole, siis ta võtab alates väärtus kuni lõpuni välja

//string-methods - manipulate and work with text (strings)

// let userName = "BroCode";
// console.log(userName.charAt(2)); //leiab tähe ja kuvab : o
// console.log(userName.indexOf("d")); //mitmendal kohal see täht on : 5
// console.log(userName.lastIndexOf("o")); //mitmendal kohal o asub : 4
// console.log(userName.length);//mitu tähte on : 7
// userName =userName.trim(); //kaotab ära tühjad kohad
// console.log(userName);
// userName =userName.toUpperCase();//teeb tähed suureks
// userName =userName.toLowerCase();//teeb tähed väikseks
// userName =userName.repeat;//stackib järjestikuliselt
// userName =userName.startsWith();//minule vastaval tingimusele algab
// userName =userName.endsWith();//minule vastale tingimusele lõpeb
// userName =userName.includes();//sisaldab sinu otsitud väärtust
// userName =userName.replace();//vahetada karakterid ("x", "y") x'i y'ga
// userName =userName.padStart();//lisab karakterile alguses mingi tähe (20, "o")
// userName =userName.padEnd();//


//string slicing - alg stringist võtab jupi

//üks versioon
// const fullName="Bro Code";
// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(4, 8);
// console.log(firstName);
// console.log(lastName)

// let firstChar =fullName.slice(0, 1)
// let lastChar =fullName.slice(-1)
// console.log(firstChar)
// console.log(lastChar)

//teine versioon
// const fullName="Broseph Code";

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName= fullName.slice(fullName.indexOf(" ")+1)

// console.log(firstName);
// console.log(lastName);

//method chaining - kutsub ühte meetodit järjestikuliselt

//no method chaining
// let username = prompt("enter your usename: ");
// username = username.trim()
// let letter = username.charAt(0)
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase()

// username = letter + extrachars
// console.log(username)

//method chaining

// let username = prompt("enter your usename: ");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
// console.log(username)

// logical operators - combine or manipulate boolean vales

//AND = &&
//OR  = ||
//NOT = !

// = 
// ==
// ===
// !=
// !==