// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. 
// The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.


function makeAllCaps(arr){
    return new Promise(function(resolve, reject) {
        let checkedArr = arr.some(elem => (typeof elem !== "string"))
        if (checkedArr === true) {
            reject("not all atrings")
            throw new Error("bad")
        }else{
            const upperCaseArr = arr.map((word)=> word.toUpperCase())
            console.log(upperCaseArr);
            sortWords(upperCaseArr)
        }
    }).catch((err)=> console.log(err))
}
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4,
//  resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function sortWords(arrTwo){
    return new Promise(function(resolve, reject){
        if (arrTwo.length >= 4) {
            resolve (console.log(arrTwo.sort()))
        }else{
            reject("not 4 words")
            throw new Error("bad words")
        }
    }).catch((err)=> console.log(err))
}




makeAllCaps([1, "pear", "banana"])
makeAllCaps(["apple", "pear", "banana"])
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`