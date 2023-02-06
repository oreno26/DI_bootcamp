// Write a JavaScript program to find the sum of all elements in an array.
const numbers = [1, 2, 2, 4,]
let sum = 0
numbers.forEach(num => sum += num )
console.log(sum);
    
// Write a JavaScript program to remove duplicate items in an array.
function filter(array) {
    return array.filter((value, index)=> 
    array.indexOf(value) !== index);
    
}
console.log(filter(numbers));





// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

function repeat(word, num) {
    let string = ""
    for (let i = num; i > 0; i--){
        string += word
    }
    return string
}




console.log(repeat('Ha!',3));
"Ha!Ha!Ha!"
