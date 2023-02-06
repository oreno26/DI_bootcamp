// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? alex, 25
// console.log(personObj2); // -> ? alex, 25
  

// //part 2

function setObj(person) {
	person = {
        name: 'John',
        age: 50
    };
    
    return person;
}

let personObj1 = {
    name: 'Alex',
    age: 30
};

let personObj2 = setObj(personObj1);

console.log(personObj1); // -> alex 30
console.log(personObj2); // ->  jhon 50

// // part 3
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div

// (function (username) {
//     let name = document.createTextNode(`Hello ${username}`);
//     document.getElementById(`container`).appendChild(name)
// })("John")



// function funcName (){
//     function inner(){
//     }
// inner();
// inner
// }
// // NESTED FUNCTIONS
// // Create a function named starWars that takes no parameter.
// // The function should declare a variable characters equal to an empty array
// // In the startWars function, create a function named createCharacter. 
// It receives two parameters, the first name and last name of a character. 
// If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// // In the startWars function, create a function named displayCharacter 
// should display in the body the fullname of the characters,
// // Call the createCharacter function a few times inside the 
// starWars function and call the displayCharacter function once
function startWars(){
    const characters =[]
    function createCharacter(fName, lName = "smith"){
            characters.push(`${fName}  ${lName}`)
    }
    function displayCharacter(){
        characters.forEach(char => {
            let name = document.createTextNode(`whats you name? : ${char}`);
            let div = document.createElement("div")
            div.appendChild(name)
            document.getElementById(`container`).appendChild(div)
        });
    }
    createCharacter("luke", "skywalker")
    createCharacter("lando")
    createCharacter("darth", "vader")
    displayCharacter()
}

startWars()