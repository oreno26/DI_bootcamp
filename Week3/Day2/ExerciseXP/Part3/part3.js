// Declare a global variable named allBoldItems.
let allBoldItems = []
// Create a function called getBold_items() that takes no parameter.
//  This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let strong = document.getElementsByTagName("strong")
let startPoint = document.getElementsByTagName('strong').length
getBold_items()
function getBold_items(){
    for (let i = 0; i <= startPoint - 1; i++){
    allBoldItems.push(strong[i].textContent)
    }
    return allBoldItems
   
}
console.log(allBoldItems);
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    for (let i = 0; i <= startPoint - 1; i++){
        strong[i].style.color = "blue"
        }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
    for (let i = 0; i <= startPoint - 1; i++){
        strong[i].style.color = "black"
        }
    }

document.body.firstElementChild.addEventListener("mouseover", highlight)
document.body.firstElementChild.addEventListener("mouseout", return_normal)
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example