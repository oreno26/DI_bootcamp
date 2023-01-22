// Instructions
// 1 Store your favorite food into a variable.

// 2 Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// 3 Console.log I eat <favorite food> at every <favorite mea


const food = "pizza";
const favMeal= "lunch";

console.log(`i eat ${food} for ${favMeal}`)


// // ( Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// // Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.)





const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;

console.log(myWatchedSeriesLength)
 
const myWatchedSeriesSentence = `${myWatchedSeries[0]} ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`)


console.log(myWatchedSeries.indexOf('the big bang theory'));

myWatchedSeries[2]= "friends";
myWatchedSeries.push("Witcher")
myWatchedSeries.splice(0, 0, "pepa pig")
console.log(myWatchedSeries[2][2])
myWatchedSeries.splice(1 , 1)
console.log(myWatchedSeries)


// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsius = 30
console.log(celsius)
const fahrenheit = celsius/5*9+32
console.log(fahrenheit)

// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

console.log(3 + 4 + '5');
// 75 because it becomes a string


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

typeof(15)
// Prediction:number
// Actual:

typeof(5.5)
// Prediction:
// Actual:

typeof(NaN)
// Prediction:
// Actual:0000

typeof("hello")
// Prediction:
// Actual:

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:

"hamburger" + "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction:
// Actual:

"1" + "3"
// Prediction:
// Actual:

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual:




5 + "34"
// Prediction:
// Actual:

5 - "4"
// Prediction:
// Actual:

10 % 5
// Prediction:
// Actual:

5 % 10
// Prediction:
// Actual:

"Java" + "Script"
// Prediction:
// Actual:

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction:0
// Actual:

true + true
// Prediction:
// Actual:

true + false
// Prediction:
// Actual:

false + true
// Prediction:
// Actual:

false - true
// Prediction:
// Actual:

!true
// Prediction:not true/false
// Actual:

3 - 4
// Prediction:
// Actual:

"Bob" - "bill"
// Prediction:
// Actual: