const colorArr =["lightsalmon", "salmon", "red", "darkred", "pink", "deeppink", 
"gold", "darkorange", "yellow", "lime", "olive","teal", "lightseagreen", "blue", 
"powderblue", "brown", "peru", "orchid", "white", "black", "gray"]
//color array

const pallet = document.getElementById("pallet")
function makingPallet(){
    for (let color of colorArr){
    // console.log(color) 
    // checking loop
    let paint = document.createElement("div");
    paint.classList.add("paint");
    paint.style.backgroundColor = color;
    paint.addEventListener("click", dipBrush);
    pallet.appendChild(paint);
}
}
makingPallet()
//palleet made

//begin canvas
const canvas = document.getElementById("canvas")
let paper
function makeCanvas(){
    for (let i = 1440; i > 0; i--){
        paper = document.createElement("div")
        paper.classList.add("canvasunit")
        // paper.style.backgroundColor = "white"
        // console.log(1); check if loop works
        // paper.addEventListener("click", cleanUp)
        paper.addEventListener("mousedown", mDown)
        paper.addEventListener("mouseover", mOver)
        paper.addEventListener("mouseup", mUp)
        canvas.appendChild(paper)
    }
}
makeCanvas()
// canvas made
 
//dipping brush
let brush
function dipBrush(evt){
    // console.log(evt.target.style.backgroundColor)
    brush = evt.target.style.backgroundColor
    console.log(brush);
}
//brush dipped




//paint
let isClicked = false // will be used to check if the mouse is clicked later on

function mDown(evt){
    isClicked = true //setting the mouse to clicked
    evt.target.style.backgroundColor = brush
}
 function mOver(evt){
    if(isClicked===true)
    evt.target.style.backgroundColor = brush
 }

 function mUp(evt){
    isClicked = false //stopping paint
 }


 //Making the clear button work
const clear = document.getElementById("clear")
const paperUnit = document.getElementsByClassName("canvasunit")
clear.addEventListener("click", cleanUp)

function cleanUp(evt){
    for (let i = 1440-1; i >= 0; i--){
       paperUnit[i].style.backgroundColor = "white"
       }
}



























