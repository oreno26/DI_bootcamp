// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }
const values =Object.values(users)
const entries =  Object.entries(users)
console.log(entries);


for (const user of entries){
    user[1] = user[1] * 2
    console.log(user[1]);
}
console.log(entries);
// Using methods taught in class, turn the users object into an array:


// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
