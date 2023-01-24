const six = 6
let stars = ""
for (let i = 0; i < six; i++){
    stars = stars + " * "
    console.log(stars);
}


//gold

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

  