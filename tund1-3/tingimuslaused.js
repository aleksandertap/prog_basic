let age = prompt("Sisesta oma vanus",)
    if(age >= 0 && age <=12){
        console.log("oled Laps");
    }
    else if(age > 12 && age < 20){
        console.log("Oled teismeline")
    }
    else if(age >= 20){
        console.log("oled Täiskasvanud")
    }
    else(
        console.log("Sa ei sisestanud normaalset vanust")
    )

let Puuvili = prompt("sisesta oma lemmikvili inglise keeles")
switch(Puuvili){
    case "apple":
        console.log("populaarne vili on õun");
        break;
    case "pear":
        console.log("populaarne vili on pirn");
        break;
    case "banana":
        console.log("populaarne vili on banaan");
        break;
    case "cherry":
        console.log("populaarne vili on kirss");
        break;
    case "watermelon":
        console.log("populaarne vili on , mis ei kasva puu otsas");
        break;
    default:
        console.log("sa sisestasid meile mitte tuntud puuvilja")
}

let discount = (age > 0 && age < 20) ? "Saad soodust" : "Ei Saa soodust"
console.log(discount);