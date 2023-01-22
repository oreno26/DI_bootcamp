let addressNumber = 17;
let addressStreet = "Yitzhak Rabin";
let country = "Narnia";

const globalAddress = `I live at ${addressStreet} ${addressNumber} in ${country}`;

console.log(globalAddress);

const birthYear = 1993;
let randomYear = 2045;

const age = randomYear - birthYear;

const sent = `I will be ${age} in the year ${randomYear}`;

console.log(sent);

const all = ` my name is oren ${globalAddress} and ${sent}`;

console.log(all);



const pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);

pets.splice(3, 1, "horse");

console.log(pets.length);

console.log(pets);
