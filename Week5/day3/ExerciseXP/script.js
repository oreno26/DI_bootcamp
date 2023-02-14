// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    const myPromise = new Promise(function (resolve, reject){
          if(num <= 10 && num >0){
            resolve("good number!")
          }else{
            reject("BAd Bad number")
            throw new Error("bad bad")
          }
    }).then((res)=>
    console.log(res)).catch((err)=> console.log(err))
    
}
compareToTen(15)
compareToTen(8)



//part 2
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() 
// and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

function fourSecondPromise() {
    const myFourSecondProm  = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if (2<4) {
            resolve("success")}
            else{
            reject("bad")
        throw new Error("bad bad")}


        }, 4000)
    });
    
}
fourSecondPromise()

const promise =  Promise.resolve(3);
promise.then((res)=> console.log(res)).catch((err)=> console.log(err))

const promiseTwo = Promise.reject("boo")

promiseTwo.then((res)=> console.log(res)).catch((err)=> console.log(err))