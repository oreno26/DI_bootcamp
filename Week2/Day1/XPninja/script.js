// Exercise 1
5 >= 1  // true
0 === 1 // false
4 <= 1// 
1 != 1 // false

"A" > "B" // false
"B" < "C" // false
"a" > "A" // true
"b" < "A" // false
true === false // false
true != true // false

// Exercise 2


// let numbers = prompt('write different numbers with comma');
// console.log()


let num1 = parseFloat(prompt("Enter the first number: "));

let num2 = parseFloat(prompt("Enter the second number: "));
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);


// Exercise 3
// Hint: if statement (tomorrow’s lesson)
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.

let sentence = prompt('please write sentence about Nemo e.g (I love the movie named Nemo)');
let lowerSentence = sentence.toLowerCase();
let nemoIndex = lowerSentence.indexOf("nemo");

if (nemoIndex === -1) {
  console.log("I can't find nemo");
} else {
  console.log(`I found nemo at ${nemoIndex}`);
}
 
