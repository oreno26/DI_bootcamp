const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// Using the array above, use the map method, to create a new array that contains only the name of the people
const names = famousPeople.map((elem) => elem.name)
console.log(names);
const container = document.getElementById(`container`)
// Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
const jobs = famousPeople.map((elem, i) => elem.name + ` is a ` + elem.job)
console.log(jobs);

const list = document.createElement(`ul`)
// BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the 
// DOM (in a paragraph, appended to a div with an id "container")
jobs.forEach((elem, i) => {
const ident = document.createTextNode(elem)    
const li = document.createElement(`li`)
li.appendChild(ident)
list.appendChild(li)
})
container.appendChild(list)



//

const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];

//    Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, 
//    the key isAboveAverage will be true, 
//    else the key isAboveAverage will be false. Use ternary operator

const studentsNew = studentsFootball.map((elem) => (
    {
    name: elem.name,
    score: elem.score,
    isAboveAverage: elem.score > 50 ? true : false
}
)
)

console.log(studentsNew);


// part 2
// Exercise 1: create a new array that filters only the positive value
const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positive = numbers.filter((elem) => elem > 0)
console.log(positive);

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared 
// in Star Trek: The Next Generation. Use filter() to filter the array of characters below

const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 
 const appearedInNext = characters.filter((elem) => elem.series.includes(`Star Trek: The Next Generation`))
 console.log(appearedInNext);

//  Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates.

const colors = ["blue", "red", "red", "blue", "yellow"]
                                                    // indexOf only shows "FIRST" aperance
const colorsUnique = colors.filter((elem, i) => colors.indexOf(elem) === i)
console.log(colors.indexOf("red"));
console.log(colorsUnique);


//part 3
// find the sum of the score of the students using reduce
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];
 const sumScore = students.reduce((accumulator, elem) =>{
        return elem.score + accumulator
 }, 0 )
console.log(sumScore);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

// elem.score > 50 ? true : false

const actualVoters = voters.reduce((accumulator, elem) =>{
         return elem.voted === true ? accumulator+1 : accumulator  
}, 0)
console.log(actualVoters);