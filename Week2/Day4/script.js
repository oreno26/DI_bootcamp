
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, 
// and my dad is 1.2 the age of my mum.

// 4. Call the function.



// 2. Write a Javascript function that takes a parameter: myAge
// const myAge = prompt(`how old am i?`)

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, 
// and my dad is 1.2 the age of my mum.
// age(prompt(`how old aam i?`));
function age(myAge) {  
let momAge = (myAge *2);
let dadAge = (momAge *1.2);
console.log(`i am ${myAge} and my mom is ${momAge} my dad is ${dadAge}`);
return momAge;
}
// 4. Call the function.
age(prompt(`how old aam i?`));;



// Exercise 1
// You are the manager of the chocolate factory,
//  in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.

// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"
// Call the function a few times,

// checkQuantityOrder(8);
// checkQuantityOrder(15);
// checkQuantityOrder(30);


function checkQuantityOrder(quantity, name = "WHO ARE YOU?!") {
    if((quantity >= 5) && (quantity <= 10)){
        console.log(`WOW <3 ${name} <3 you get flowers`);
    }else if ((quantity > 10) && (quantity <= 20)){
        console.log(`You <3 ${name} <3 my Dear friend get BoOoZe :D  <3`);
    }else if (quantity > 20){
        console.log(`OH MY GOD <3 ${name} <3 YOU GET A TRIP TO <3PARIS<3`);}
}

checkQuantityOrder(8, "oren");
checkQuantityOrder(15,);
checkQuantityOrder(30, "bill");



// Modify the function checkQuantityOrder
// , so that instead of console logging "Dear client, you won a ..." it will return the gift.
// Create a function sendGift, 
// it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."





// BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear <name_client>, you won a trip to Paris"
// Call the function a few times,

// checkQuantityOrder(8, "John");
// checkQuantityOrder(15);
// checkQuantityOrder(30, "David");


// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

// function age(myAge) {  
//     let momAge = (myAge *2);
//     let dadAge = (momAge *1.2);
//     console.log(`i am ${myAge} and my mom is ${momAge} my dad is ${dadAge}`);
//     return momAge;
//     }
//     age(prompt(`how old aam i?`));


console.log(`my mom is ${age(prompt(`how old aam i?`))}`);




// Modify the function checkQuantityOrder
// So that instead of console logging "Dear client, you won a ..." it will return the gift.
// Create a function sendGift, 
// it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."


function checkQuantityOrder(quantity, name = "WHO ARE YOU?!") {
    if((quantity >= 5) && (quantity <= 10)){
        return "Flowers"
    }else if ((quantity > 10) && (quantity <= 20)){
        return "wine"
    }else if (quantity > 20){
        return "trip to paris"
    } 
}

console.log(checkQuantityOrder(8, "oren"));
// console.log(checkQuantityOrder(15,));
// console.log(checkQuantityOrder(30, "bill"));


// Create a function sendGift,
// it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."
function sendGift() {
console.log(`you won a ${checkQuantityOrder(8, "oren")}`);
console.log(`you won a ${checkQuantityOrder(15,)}`)
console.log(`you won a ${checkQuantityOrder(25, "bill")}`)
}

sendGift()