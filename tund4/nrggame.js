const min = 1;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
let guess;
do{
  guess = parseInt(prompt("paku number"));

  if (guess === randomNum) {
    alert("Sisestasid õige arvu");
  } 
  else if (guess > randomNum){
    alert("Pakkusid liiga suure numbri, paku uuesti ")
    
  }
  else if (guess < randomNum){
    alert("Sisestasid väiksema numbri, paku uuesti")
    
  }
}
while(guess !== randomNum)