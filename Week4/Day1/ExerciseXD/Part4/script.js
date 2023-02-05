// Write a JavaScript program that displays the colors in the following order :
//  “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// forEach((element, index, array) => { /* … */ })

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const sort = colors.forEach((color, num,)=>{
    console.log(`${num + 1}# choice is ${color}`);
})
// Check if at least one element of the array is equal to the value “Violet”.
//  If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

function isViolet(){
const check = colors.some((color) => color = "Violet");
if (check === true){
    console.log("yeah");
}else{
    console.log("no...");
}
}
isViolet()