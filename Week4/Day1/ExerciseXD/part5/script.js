const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i)=>{
    (i <= 2) ? console.log(`${i+1+ordinal[i+1]} choice is ${color}`) : console.log(`${i+1+ordinal[0]} choice is ${color}`);
})


// //6
// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 2000;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const VAT = 1.17;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
const details = ["+200", "-100", "+146", "+167", "-2900"];
// Create a program that modifies the expenses (ie. the positive AND the negative expenses)
// so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

const expense = details.forEach((exp, ind) => {
  bankAmount += exp * VAT;
});

console.log(bankAmount);


// if(i <= 2){
//     console.log(`${i+1+ordinal[i+1]} choice is ${color}`);
// }else{
//     console.log(`${i+1+ordinal[0]} choice is ${color}`);
// }
