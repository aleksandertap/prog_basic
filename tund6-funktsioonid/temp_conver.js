let ask = prompt("Kas C või F tahad convertida")

if(ask === "C"){
let celsius = Number(prompt("Enter Celsius to convert to Fahrenheit"))

function celciusToFahrenheit(element){
    return (element * 9/5) +32
}
document.write("See Celsius on " + celciusToFahrenheit(celsius) + " Fahrenheiti<br>")
}

else if(ask === "F"){
let fahrenheit = Number(prompt("Enter Fahrenheit to convert to Celsius"))

function fahrenheitToCelsius(element){
    return (element - 32) * 5/9
}
document.write("See Fahrenheit on " + fahrenheitToCelsius(fahrenheit) + " Celsiust")
}
else{
    document.write('Sisesta kas "C" või "F"')
}