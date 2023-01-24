
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people
//  = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

const people = ["Greg", "Mary", "Devon", "James"];
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people);
// Write code to replace “James” to “Jason”.
people.splice(3, 1, "Jason");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));
// Write code to add your name to the end of the people array.
people.push("Orken")
console.log(people);
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
peopleTwo = (people.slice(1, 3));
console.log(peopleTwo);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf(`foo`));
// it doesnt exist
// Create a variable called last which value is the last element of the array.
last = (people[people.length-1]);
console.log(last);
//

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.


for (let i = 0; i < 5; i++)
console.log(people[i]);

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i < 5; i++) {
    if (people[i] === "Jason") { 
        break;
      }
    console.log(people[i]); // 0 1 2
  }

//   🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so:
//  “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// Create an array called colors where the value is a list of your five favorite color
colors = ["red", "blue", "black", "violet", "tan"]

for (let t = 0; t < 5; t++)

console.log(`My #${t+1} fave color is ${colors[t]}`)



// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// let number = null

let num;
do {
num = Number(prompt(`Please, enter a number that I'm thinking about:`));
}
while (num<10);
alert(`You are rigth! It's ${num}`);

// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log("apartments on first floor", building.numberOfAptByFloor.firstFloor);
console.log("apartments on third floor", building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("second tenant:", building.nameOfTenants[1]);
console.log("Dan has this many rooms:", building.numberOfRoomsAndRent.dan[0]);

const sarahRent = (building.numberOfRoomsAndRent.sarah[1])
const davidRent = (building.numberOfRoomsAndRent.david[1])
const danRent = (building.numberOfRoomsAndRent.dan[1])


if(sarahRent + davidRent > danRent){
  building.numberOfRoomsAndRent.dan[1] = 1200
}

console.log(building);

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
// 

const family ={
  dad: "jack",
  mom: "jane",
  son:  "jhon"
}

for (const key in family){
console.log(`key:`, key)
console.log(`value:`, family[key])
}



// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

 let sentance = ""
 for (const key in details){
  sentance = sentance + key + " " + details[key] +" "
 }

 console.log(sentance);

//  A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
//  Hint: a string is an array of letters
//  Console.log the name of their secret society. The output should be “ABJKPS”
 


 const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronym = ""

for (const name of names.sort()){
  acronym = acronym + name[0]
}
console.log(acronym);