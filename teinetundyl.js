
let age = prompt("sisesta vanus");
if(age >= 7 && age < 16){
    document.write("Käid põhikoolis, mine kell 10 sööma")
}
else if (age == 16){
     document.write("kui käid põhikoolis,mine kell 10 sööma <br> Kui käid gümnaasiumis, siis mine kell 11 sööma")
}

else if(age > 16 && age <20){
     document.write("Käid gümnaasiumis, mine kell 11 sööma")
}

else if(age == 20){
     document.write("Kui käid gümnaasium, mine kell 11 sööma <br> Kui oled täiskasvanud mine kell 12.30 sööma")
}

else if(age >= 20){
     document.write("Oled täiskasvanud, mine kell 12.30 sööma")
}

else if(age >= 0 && age < 7){
     document.write("sa oled liiga noor, ära söö midagi")
}

else if(isNaN(prompt)){
     document.write("Sisend ei ole number, proovi uuesti")
}