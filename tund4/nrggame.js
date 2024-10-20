const min = 1;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

for (let i = 10; i >0; i--){
  let guess = prompt("Paku üks number 1-100");
  
  
  if(guess === null){
    window.alert(`Andsid alla, vastus oli ${randomNum}`)
    break;
  }
  
guess= parseInt(guess);

  if(guess === randomNum){
    window.alert("Pakkusid õige numbri");
    break;
  }
  
  else if (guess < randomNum){
    window.alert(`Pakkusid liiga väikse arvu, sul on jäänud ${i - 1} arvamist`);
  }
  else if(guess > randomNum){
    window.alert(`Pakkusid liiga suure numbri, sul on jäänud ${i - 1} arvamist`);
  }
  
  else{
    window.alert(`Sa ei sisestanud numbrit. Sul on jäänud ${i - 1} korda.`);

  }
}
