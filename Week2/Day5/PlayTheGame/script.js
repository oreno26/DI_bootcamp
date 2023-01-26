let attemps = 3

function playTheGame() {
  if (confirm("ok") === true) {
    alert(`lets play`);
    let userNum = prompt(`id like a number between 0 and 10`);
    console.log(userNum);
    if (userNum < 0 || userNum > 10) {
      alert(`not a good number`);
    } else if (userNum >= 0 && userNum <= 10 && !null) {
      alert(`good your number is ${userNum}`);
     let computerNumber = Math.round(Math.random() * 10);
      console.log(computerNumber);
      compareNumbers(userNum, computerNumber)
    } else if (userNum === null || (isNaN(userNum))) {
      alert(`not a number!`);
    }
  } else {
    alert(`goodbye`);
  }
}

function compareNumbers(userNum,computerNumber){
  let userNumTwo = userNum
  let computerNumberTwo = computerNumber
  while (attemps >0){   
    if(userNum > computerNumberTwo){
        attemps--
        alert(`Your number is bigger,guess again`)
         userNum = prompt(`new number`)
    }else if(userNum < computerNumberTwo){
        attemps--
        alert(`The computer has a higher number,guess again`)
        userNum = prompt(`new number`)
        // console.log(computerNumber);
    }else if(userNum == computerNumber){
        alert(`ding ding ding same number`)
    }
    
    // while (attemps <= 2){
    // if(userNumTwo > computerNumber){
    //     attemps--
    //     alert(`Your number is bigger,guess again`)
    //     let userNumTwo = prompt(`new number`)
    // }else if(userNumTwo < computerNumber){
    //     attemps--
    //     alert(`The computer has a higher number,guess again`)
    //     let userNumTwo = prompt(`new number`)
    //     console.log(userNumTwo);
    // }else if(userNumTwo == computerNumber){
    //     alert(`ding ding ding same number`)
    // } 
    // }



    if (attemps == 0){
        alert(`GAME OVER`)
    }
}
}