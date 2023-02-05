let text = "Hello";

function checkText (){
	console.log("In the function",text); //hello
	text += " World";// we are changing the variable the global one in the local scope
	console.log("Still in the function",text); //hello world
}

console.log("before the function", text);//hello 

checkText()

console.log("after the function", text); //hello world

let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend);  //alice redclared locally
	friend += " Smith";
	console.log("Still in the function",friend);//alice smith
}

console.log("before the function", friend);//harry from global scope


checkfriend()

console.log("after the function", friend);// harry, because a new local variable was declared

// Exercise 1:
// Greet the user with his name, the user's name is a parameter. Do this exercise,


// first by using function declarations
let name = prompt(`what is yout name`)

function sayHello(name){
	console.log("Hello,", name);
}
sayHello(name)

// then function expression,
const hello = function (name){//making
	console.log("hello,", name);
}
hello(name);//calling

// then arrow function

const hey = (name) => console.log("hello,", name); 
hey(name)