// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(greeter, 2000);

function greeter() {
  alert("Hello World");
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const container = document.getElementById(`container`);
setTimeout(paraHello, 2000);

function paraHello() {
  let newP = document.createElement(`P`);
  let newPText = document.createTextNode(`Hello World`);
  newP.appendChild(newPText);
  container.appendChild(newP);
}

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
//  as soon as there will be 5 paragraphs inside the <div id="container">.

const idInterval = setInterval(sayHelloAgain, 2000);

let helloCount = 0;
function sayHelloAgain() {
  if (helloCount < 5) {
    helloCount++;
    let newPtwo = document.createElement(`p`);
    let newPTextTwo = document.createTextNode(`Hello World Again`);
    newPtwo.appendChild(newPTextTwo);
    container.appendChild(newPtwo);
  } else if (helloCount == 5) {
    clearInterval(idInterval);}
}
document.getElementById(`clear`).addEventListener(`click`, intervalClear)

function intervalClear(){
    clearInterval(idInterval)
}