// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// Write a JavaScript arrow function
const isString = (stringCheck) => {
  const value = typeof stringCheck === "string" ? true : false;
  return value;
};
console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

// that checks whether the value of the argument passed, is a string or not.
// Use ternary operator

// Check out the example below to see the expected output
