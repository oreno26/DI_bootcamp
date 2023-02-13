// Create a function that checks if an email contain the '@', if it doesnt, throw an error and catch it
function checkEmail(mail){
try {
    if(mail.includes(`@`)===false){
      throw new Error("invalid email ")
    }else{
        console.log(mail);
    }
} catch (err) {
    alert(`your mail has no @ ${err.message}`)
}
}


checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught

const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';// const error
} catch(e) {
  console.log(e);
}

console.log("after")//yes


// Which type of error will be thrown ? Look on the different types errors on Google const erooe
// Is the console.log("after") will be shown on the console ?0