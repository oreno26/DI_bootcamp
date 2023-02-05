const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
function add() {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  console.log(sum);
}
add();
// 2. Using the for each method, find the sum of the array
let total = 0;
prices.forEach((price) => (total += price));
console.log(total);

// Exercise 2
const ageClient = [5, 8, 40, 18];
// Use the some method to check if there is at least one adult in the array (ie. age bigger or equal to 18)
// If there is, alert him that he is in charge of the others
const check = ageClient.some((age) => {
  if (age > 18) {
    console.log(`you are in charge`);
    alert(`you are in charge`);
  }
});

// Use the every method to check if all the users are adults (ie. age bigger or equal to 18)
// If there not, alert them that they have a price reduction

function checkAdult (){
    const value = ageClient.every((age) => age > 18)
    console.log(`result of method is`, value);
}
checkAdult()