// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}


// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// // const object2 = object1; 4
// // const object3 = object2; 4
// // const object4 = { number: 5}; 5

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)


// Create a class Animal with the attributes name, type and color. 
// The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color){
        this.name = name,
        this.type = type,
        this.color = color
    }
}
// Create a class Mamal that extends from the Animal class. 
// Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes,
//  and returns the details of the animal (name, type and color)
//  as well as the sound it makes.


class Mamal extends Animal{
    constructor(name, type, color, sounds){
        super(name, type, color)
        this.sounds = sounds || []
    }
    sound(soundMade){
        this.sounds.push(soundMade)
    }
    disc(){
        console.log(`hi! i a ${this.name} yes yes the ${this.type} my color? well thats offencive buttt im ${this.color} and i go ${this.sounds}`);
    }

}

const chicken = new Mamal("chicken", "cat", "awesome")
console.log(chicken);
chicken.sound("meow");
chicken.sound("purr");
console.log(chicken);
chicken.disc()