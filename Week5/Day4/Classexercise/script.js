// Async Await
// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - 
// if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array
async function nameGetter(nameOne, nameTwo) {
    if (typeof nameOne == "string" && typeof nameTwo == "string") {
        const names = [nameOne, nameTwo]
        return (names)
    }else{
        throw new Error ("nto names")
    }
    }
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
async function nounGetter(noun){
    if (noun.length < 3) {
        throw new Error ("noun to short")
    }else{
        const nounOne = noun
        return (nounOne)
    }
}
// The 3rd function, receives a city
//  if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
async function cityGetter(city){
    if (city[0] === city[0].toUpperCase()) {
        const town = city
        return (town)
    }else{
     throw new Error ("first letter no Caps")
    }
}
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" 
// -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex:


async function verbGetter(verb){
    const city = await cityGetter("My dreams")
    const noun = await nounGetter("vanila")
    const names = await nameGetter("oren", "buddy boop")
    console.log(([names[0],names[1],city, noun,verb]));
    if (verb.endsWith("ing") === true) {
        console.log(`${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`);
    }else{
        throw new Error ("not ing")
    }
}

verbGetter("eating")


