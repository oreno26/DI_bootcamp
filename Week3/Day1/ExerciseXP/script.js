
//Retrieve the div and console.log it
const divSpy = document.body.firstElementChild
const divSpyText = divSpy.textContent
console.log(divSpyText);

// Change the name “Pete” to “Richard”.
Pete = divSpy.nextElementSibling.children[1]
Pete.textContent = "Richard"

// Change each first name of the two <ul>'s to your name.
const list = document.getElementsByClassName(`list`)

for (ul of list){
    ul.firstElementChild.textContent = "Oren"
}

const parentList = list[1]
// Delete the <li> that contains the text node “Sarah”.
const sarah = document.getElementsByTagName('li')[3]
parentList.removeChild(sarah);

//

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

//2
//1 Add a “light blue” background color and some padding to the <div>.
const lightBlueDiv = document.body.children[3]
lightBlueDiv.style.backgroundColor = "lightblue"
// 2Do not display the <li> that contains the text node “John”.???

// 3Add a border to the <li> that contains the text node “Pete”.
const peteLi = lightBlueDiv.nextElementSibling.lastElementChild
peteLi.style.border = "2px red solid"
//4 Change the font size of the whole body.
document.body.style.fontSize = "1.5rem"
//5 Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).



//3


//1 In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const nav = document.getElementById("navBar")
nav.setAttribute("id", "socialNetworkNavigation")
const newNav = document.getElementById("socialNetworkNavigation")
// 2 We are going to add a new <li> to the <ul>.
const navUl = newNav.firstElementChild
// 2.1 First, create a new <li> tag (use the createElement method).
const newLi = document.createElement("li")
// 2.2 Create a new text node with “Logout” as its specified text.
const textNew = document.createTextNode("logout");
// 2.3 Append the text node to the newly created list node (<li>).
newLi.appendChild(textNew);
// 2.4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
navUl.appendChild(newLi);

//4
const allBooks = []

const book1 ={
    title: "iron Druid",
    author: "Kevin Hearne",
    image : "https://picsum.photos/200",
    alreadyRead : true 
}
const book2 ={
    title: "Star Wars",
    author: "Mel Brooks",
    image : "https://picsum.photos/200",
    alreadyRead : false 
}
allBooks.push(book1)
allBooks.push(book2)
console.log(allBooks);


// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
const table = document.createElement("table")
table.innerHTML= `
<thead>
 <tr>
  <th>My book list</th>
</tr>
</thead>
`
const bookListDiv = document.querySelector("listBooks")
bookListDiv.appendChild(table)
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
