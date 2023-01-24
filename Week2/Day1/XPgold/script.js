let sentence = ["my"," favorite"," color"," is"," blue"];
console.log(sentence.join(''))




let firstWord = 'fire'
let secondWord = 'potato'
firstWord = firstWord.slice(0, 3) + secondWord.slice(2);
secondWord = secondWord.slice(0, 1) + firstWord.slice(2);
let thirdWord = ' '

console.log(firstWord + secondWord)
console.log(firstWord + thirdWord + secondWord)




let num1 = parseFloat(prompt("Enter the first number: "));

let num2 = parseFloat(prompt("Enter the second number: "));
let sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);

let subtract = num1 - num2;
alert("The subtract of " + num1 + " and " + num2 + " is " + subtract);

let multiply = num1 * num2;
alert("The multiply of " + num1 + " and " + num2 + " is " + multiply);

let divide = num1 / num2;
alert("The divide of " + num1 + " and " + num2 + " is " + divide);