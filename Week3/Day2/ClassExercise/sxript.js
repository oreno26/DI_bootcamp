// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue
// document.addEventListener("click", myFunction);

document.getElementById("red").addEventListener("click", colorChanger);
document.getElementById("blue").addEventListener("click", colorChanger);

function colorChanger(e) {
  console.log();
  document.body.style.backgroundColor = e.target.textContent.toLowerCase();
}

document.getElementById("buttonMaker").addEventListener("click", addButton);
// Exercise 2 - using the event object
const colors = ["black", "yellow", "green", "pink"];
const container = document.getElementById("container");
// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// V
// Using a loop, add one button per color inside the div container (do it directly in the JS)
function addButton() {
  for (let color of colors) {
    const newButton = document.createElement("button");
    const buttonName = document.createTextNode(color);
    newButton.appendChild(buttonName);
    container.appendChild(newButton);
    newButton.addEventListener("click", colorChanger);
  }
}

// Each button should have an "click" event listener that changes the background color of the document,
//  to the color of the button (do it directly in the JS)
