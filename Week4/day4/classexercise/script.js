// const facts = {numPlanets: 9, yearNeptuneDiscovered: 1846};
// const {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); //9 ?
// console.log(yearNeptuneDiscovered); //1846 ?
//2
// let planetFacts = {
//     numPlanets: 9,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?{
// //     yearNeptuneDiscovered: 1846,
// //     yearMarsDiscovered: 1659
// //   }



// // Modify the code below, and destructure the object in the parameter 
// // (ie. you should have 3 parameters : name, house and goodstudents)

// function getDetails({name,house,goodstudent }) {
// 	console.log(name, house,`is a good student:`, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : name, house, friendName and age)

// function getMoreDetails({name, house, friend : { friendName, age} }) 
// {
// 	console.log(name, house, friendName, age)
// }
// getMoreDetails(
// 			{name: 'Hermione Granger', 
// 				house: 'Gryfindor', 
// 				friend :  {
// 					friendName : 'Harry Potter', 
//                     age : 20
// 				}
// 			})

// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
// store : [cityOne, cityTwo], //array destructuring
// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails({first : firstname ,last : lastname , housesLocation : [locationOne, locationTwo], houses : {value : valueHouses}  }){
// 	console.log(firstname, lastname)
// 	console.log(locationOne, locationTwo, valueHouses)

// }

// getElonMuskDetails(elonPerson)

// Exercise 6
// Display in the body of the document, the name, email and phone of every employee.  
// Use a loop and object destructuring
const container = document.getElementById(`container`)

const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]  
employees.forEach(person => {
         const { name ,email , phone} = person
         console.log(name, email, phone);
        const info = document.createTextNode(`${name} ${email}  ${phone}`)
        const para = document.createElement(`li`)
        para.appendChild(info)
        container.appendChild(para)
  })





  const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];


//    Using MAP,  create a new array of objects, containing the name, score and isAboveAverage
//     if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
   

const studentNew = studentsFootball.map(elem =>{
         const {score} = elem;
         const {name} = elem
         const isAboveAverage = score > 50 ? true : false;
         const newObje = {
            ...elem, isAboveAverage : isAboveAverage} 
            //will also work with only typing isAboveAverage
            //  once because name of the key is the same as the variable 
         return newObje;

})

console.log(studentNew);


// ( function(obj){
//     for 
// })





