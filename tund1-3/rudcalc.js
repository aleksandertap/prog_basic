let number1 = Number(prompt("sisesta üks arv"))
let number2 = Number(prompt("sisesta teine arv"))
let tehe = prompt("mis soovid teha?(+- liida,- - lahuta,* - korruta,/ - jaga,**- astendamine, % - jääk")

if (isNaN(number1) || isNaN(number2)){
    console.log("sa ei sisestanud numbreid, pane nüüd vaid numbrid")    
}
else{


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
        if (number2 !==0){
            console.log(number1 / number2)
        }
        else {
            console.log("sa ei saa jagada nulliga")
        }
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
}