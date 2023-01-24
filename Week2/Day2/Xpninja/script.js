const age1 = prompt(`Enter the first date of birth in format YYYY:`);
const age2 = prompt(`Enter the first date of birth in format YYYY:`);
let dif = Math.abs((+age1)-(+age2));
console.log(`When the younger will be ${dif}, he will be half age ot the older one`)


// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
const zip = prompt(`Enter zip-code of 5 numbers`);
lengh === 5