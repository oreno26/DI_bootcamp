// // Part I
// // Create a TV function constructor with 3 parameters :
// // brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.

// // Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// // Add methods to increase and decrease volume.
// // When the methods are called it will increase or decrease the volume by 1.

// // Create an object for the LG TV
// // Call the inscrease method, and check if the volume changed

// class Tela {
//     constructor(brand, channel=1 ,volume=50){
//        this.brandTV = brand;
//        this.channelTV = channel;
//        this.volumeTV = volume
//        }

//        volumeUP(){
//           this.volumeTV++
//        }

//        volumeDOWN(){
//         this.volumeTV--
//        }

// // }

// // const LG = new Tela("LG",)
// // console.log(LG);
// // LG.volumeUP();
// // console.log(LG);

// // Part II
// // Create a subclass for Smart TV
// // It overrides the method increase,
// //  so it increase the volume by 10 and not by 1
// // Add a attribute of Netflix
//  that should be equal to true by default
class SmartTV extends Tela{
    constructor(brand, channel=1 ,volume=50,){
             super(brand, channel=1 ,volume=50)
             this.netflix = true
    }
    volumeUP(){
        this.volumeTV += 10
     }

     volumeDOWN(){
      this.volumeTV -= 10
     }

}
const smart = new SmartTV("samsung")
console.log(ss0mart);
smart.volumeUP()
// console.log(smart);

// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60
// the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like:
// "Panasonic at channel 8, volume 75".

class Tela {
  constructor(brand, channel = 1, volume = 50) {
    this.brandTV = brand;
    this.channelTV = channel;
    this.volumeTV = volume;
  }
  volumeUP() {
    if (this.volumeTV < 100) {
      this.volumeTV++;
    }
  }
  volumeDOWN() {
    if (this.volumeTV >= 0) {
      this.volumeTV--;
    }
  }
  setChannel(n) {
    if (n <= 50 && n > 0) {
      this.channelTV = n;
    }
  }
  reset() {
    this.channelTV = 50;
    this.volumeTV = 1;
  }
}
const LG = new Tela("LG",4 , 99);
console.log(LG);
LG.reset();
console.log(LG);