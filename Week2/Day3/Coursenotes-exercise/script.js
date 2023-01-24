// // Create a structured HTML file linked to a JS file

// // 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen.

// // Sample Output: //"0 is even" //"1 is odd" //"2 is even"


let number = -1
for (let i = 0; i <= 15; i++) {
    // console.log(number += 1);
(number += 1);
// start of if
if (number%2 == 0){
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}
}


const prices = [23, 15, 34, 10];

// Create a variable sum equals to 0
// Loop over this array, to get the sum of all the numbers
// Where should you console log the sum ?

let sum = 0

for (let t = 0; t < 4; t++) {
    (sum += prices[t])
}
console.log(sum); 

















// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.

let names= ["john", "sarah", 23, "Rudolf",34]

for (let x = 0; x <= 4; x++) {
    console.log(names[x]);
    }
     //start of if