// Using a method, take this array 
const array = [1 ,[2] ,[3] ,[[[4]]] ,[[[5]]] ]
console.log( "test", array);


console.log(array.flat());
console.log(array.flat(1));
console.log(array.flat(2));
// 
// array: [1],[2],[3],[4],[5]].


// Bonus Try to do it on one line.
// Using a method, take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
console.log(greeting.flat());
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
// Turn the trapped number 3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] 

console.log(trapped.flat(Infinity));

into: [3]
