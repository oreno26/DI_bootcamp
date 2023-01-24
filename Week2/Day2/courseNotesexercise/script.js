const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object

// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"

// 4. Console.log the price for the specific fruit the user wants


// 1.
userCart["lastname"] = "smith"
console.log(userCart);

// 2.
userCart["prices"]["pear"] *= 1.17 ;
console.log(userCart);

// 3.
const chosenOne = prompt("choose one, Apple banana or pear")
const chosenOnelow = chosenOne.toLocaleLowerCase();
console.log(chosenOnelow);
 
// 4.
console.log(`=${userCart["prices"][chosenOnelow]}`);






const family = {
    lastName : "Smith",
    members : 3,
    names : ["John", "Tom", "Diana"],
    isInVacation: true ,
}

// Change dynamically the isInVacation key.
// If the key is true, it should become false and vice versa
// Dont use conditionals

family["isInVacation"] = ! + family["isInVacation"]
console.log(family)






// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"



const age = prompt("How old are you?")

if (age < 18){
	console.log("soory youre too young")
} else if (age == 18) {
	console.log("enjoy your first drive!");
} else if (age > 18){
	console.log("welecome back");
} else {
	console.log("dude that is NOT an age");
}



// let age = 20

// if (age === 18) {
// 	console.log("It's your birthday !!) 
// } else if (age > 18) {
// 	console.log(We can go to a pub together !!")
// } else {
// 	console.log("Sorry...You have to stay at home tonight")
// }