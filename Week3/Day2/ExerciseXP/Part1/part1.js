// Using a DOM property, retrieve the h1 and console.log it.

const toLog = document.body.firstElementChild.firstElementChild.textContent
console.log(toLog);
// Using DOM methods, remove the last paragraph in the <article> tag.
document.body.firstElementChild.removeChild(document.body.firstElementChild.children[6])
// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
const toRed = document.body.firstElementChild.children[1]

toRed.addEventListener("click", changeToRed)

function changeToRed() {
    toRed.style.backgroundColor = "red"
}
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const toHide = document.body.firstElementChild.children[2]

toHide.addEventListener("click", hider )

function hider(){
    toHide.style.display = "none"
}
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement("button");
button.style.height = 20 + `px`
document.body.appendChild(button);
button.addEventListener("click", textLarger)
function textLarger(){
    document.body.style.fontWeight = "bold"
}
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
const titleH = document.body.firstElementChild.firstElementChild

titleH.addEventListener("mouseover", sizeRandom)

function sizeRandom(){
    titleH.style.fontSize = Math.floor(Math.random() * 100) +'px';
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// faderHead = document.body.firstElementChild.children[1]
// faderHead.addEventListener("mouseover", fader())
// function (){
//     faderHead.style.animation = animation: fadeOut 5s;
// }