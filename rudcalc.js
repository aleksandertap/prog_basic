let number1 = Number(prompt("sisesta üks arv"))
let number2 = Number(prompt("sisesta teine arv"))
let tehe = prompt("mis soovid teha?(+- liida,- - lahuta,* - korruta,/ - jaga,**- astendamine, % - jääk")


switch(tehe){
    case "+":
        console.log(number1 + number2)
        break
    case "-":
        console.log(number1 - number2)
        break
    case "*":
        console.log(number1 * number2)
        break
    case "/":
        console.log(number1 / number2)
        break
    case "**":
        console.log(number1 ** number2)
        break
    case "%":
        console.log(number1 % number2)
        break
    default:
        console.log("sa tegid midagi nüüd valesti, panid võõra tehtemärgi")    
}
