// // Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (a,b) => console.log(a + b);
// sum(3, 4)

// // Instructions
// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)



// x*1000 + "Gr"
// First, use function declaration and invoke it.
function kgGr(x){
    gram = x * 1000 + "Gr"
    console.log(gram);
}
kgGr(1)
// Then, use function expression and invoke it.
const kiloToGr = function(x){
    gramTwo = x * 1000 + "Gr"
    console.log(gramTwo);
}
kiloToGr(2)
// // Write in a one line comment, the difference between function declaration and function expression.
// // Finally, use a one line arrow function and invoke it.
const KiloGram = (x) => console.log(x * 1000 + "gr");
KiloGram(3)

// instructions
// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
//  and married to <partner's name> with <number of children> kids."

(function(numChildren, partnerName, geographicLocation, jobTitle){
    const container = document.getElementById(`container`) 
    const div = document.createElement(`div`)
    const text = document.createTextNode(`You will be a ${jobTitle} in ${geographicLocation},and married to ${partnerName} with ${numChildren} kids.`)
    container.appendChild(div)
    div.appendChild(text)
})(4, "mary", "narnia", "astronaut");