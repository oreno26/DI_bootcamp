const allBooks = [
  {
    title: "the outsiders",
    author: "S E hinton",
    image:
      "https://i0.wp.com/booksofbrilliance.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-19-at-2.24.19-AM.png?fit=632%2C942&ssl=1",
    alreadyRead: true,
  },
  {
    title: "mist",
    author: "Stphen king",
    image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Mist2007.jpg",
    alreadyRead: false,
  },
];
console.log(allBooks[0]["title"]);

// Using the DOM, render the books inside an HTML table
// (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
const newTable = document.createElement("table");

const bookList = document.body.firstElementChild;

for (let i = 0; i <= allBooks.length -1 ; i++) {
  newTable.innerHTML += `
        <tbody>
          <tr>
            <td>${allBooks[i]["title"]} by ${allBooks[i]["author"]}</td>
            <td>
              <img src="${allBooks[i]["image"]}" style="width:100px">
            </td>
            <td style="color:${
              allBooks[i]["alreadyRead"] ? "red" : "black"
              
            }">${allBooks[i]["alreadyRead"]}</td>
          </tr>
        </tbody>    
        `;
}
bookList.appendChild(newTable);
