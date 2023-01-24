
let numbers = [123, 8409, 100053, 4, 333333333, 7]
for (let i=0; i<numbers.length; i++) {
    if(numbers[i] % 3 == 0){
        console.log("EIVGENY IS RIGHT");
    }else if (numbers[i] % 3 != 0){
        console.log("EIVGENY IS STILL RIGHT");
    }
}



const guest = prompt("please enter your name").toLocaleLowerCase()

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  if (guest in guestList){
    console.log(`hi ${guest} welecome back from ${guestList[guest]}`);
  }else{console.log(`hi new guy`);}


   sum = 0
  let age = [20,5,12,43,98,55];
  for (let t=0; t<age.length; t++){
    sum += age[t];
  }
  console.log(sum);

  let max = age[0];
for (let i of age) {
    if (i >= max){
        max = i
    }continue
}
console.log(max)