// 1.Remove Banana from the array.
// // Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.splice(1, 2, "Blueberries", "Oranges");
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);
fruits.splice(0,1);
console.log(fruits);
fruits.reverse();
console.log(fruits);

//2. Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);
