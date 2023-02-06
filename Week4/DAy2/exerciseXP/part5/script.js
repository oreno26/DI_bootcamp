// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument:
//  the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like 
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// function makeJuice(size){
//     const container = document.getElementById(`container`)
//     let = size
//     function addIngredients(one, two, three){
//         const div = document.createElement(`div`)
//         const text = document.createTextNode(`you want a ${size} shake with ${one}
//         ${two} ${three}`)
//         div.appendChild(text)
//         container.appendChild(div)
//     }
//    addIngredients("mango", "banana", "melon")
// }
// makeJuice("small")












// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like
//  The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". 
//  Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
// Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice(size){
    const container = document.getElementById(`container`)
    const div = document.createElement(`div`)
    text = `you want a ${size} shake with `
    let = size
    const ingredients = []
    function addIngredients(one, two, three){
        ingredients.push(one)
        ingredients.push(two)
        ingredients.push(three)
        console.log(ingredients);
    }
    function displayJuice(){
        ingredients.forEach((ingredient) => {
         text += " " + ingredient + " "
         console.log(text);
        });
    }
    // div.appendChild(text)
    container.appendChild(div)
    addIngredients("mango", "banana", "melon")
    addIngredients("apple", "pepper", "berry")
    displayJuice()
    const result = document.createTextNode(text)
    div.appendChild(result)

}
makeJuice("small")