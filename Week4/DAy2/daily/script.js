let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that
//  console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = groceries.fruits.forEach((fruit) => console.log(fruit));

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable.
//  (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?no because user is going to the orginal adress
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
const cloneGroceries=()=>{
    let user = client
    client = "betty"
    let shopping = groceries
    groceries.totalPrice = "35" //the price will be changed because the price is stored in the stash
    shopping["other"]["payed"]=false
    console.log(shopping)
}
console.log(client);
// console.log(shopping);
cloneGroceries()