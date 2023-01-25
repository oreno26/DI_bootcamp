// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false
function isBlank() {
    const wordToCheck = prompt(`give a word`)
    if (wordToCheck === ``){
        console.log(true);
    }else{
        console.log(false);
    }
}

isBlank()

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."


function abbreviator(){
    const toAbrrreviate = prompt(`your full name please`)
    const toAbrrreviateArray = toAbrrreviate.split(" ");
    toAbrrreviateArray.splice(1 , 1., toAbrrreviateArray[1][0].toUpperCase())
    let abbreviatedName = toAbrrreviateArray.join(` `);
    console.log(abbreviatedName);
}
abbreviator()


