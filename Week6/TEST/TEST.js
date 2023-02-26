// 1 
// const nums = [3, 7, 10]
// nums[1]
// //2
// const arrNums = [1, 2, 3, 4, 5]
// arrNums.splice(2, 0)
// nothing
// //3 
// const bestNumbers = [1, 2, 3]
//  const secondBestNumbers = [7, 8, 9]
    
//     const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
//     console.log(favoriteNumbers) [4,5,6,1,2,3,7,8,9]
//     //4
//     const football = {
//         type: "sport",
//         clubs: {
//           france : "Paris Saint-Germain",
//           spain : "Atlético Madrid",
//         }
//       }  
      
//       football.clubs.spain = "Real Madrid";
//       console.log(football.clubs.spain); "REAL MADRID"
//       //5
//     const myteam = "bestTeam";
   
//    const football = {
//      type: "sport",
//      clubs: {
//        france : "Paris Saint-Germain",
//        spain : "Atlético Madrid",
//      }
//    }  
   
//    football.clubs[myteam] = "France national football team";
//    console.log(football.clubs); error? my guess
// clubs: {
    //        france : "Paris Saint-Germain",
    //        spain : "Atlético Madrid",
            //   myteam: "France national football team";
    //      }

// //    Can we define the function as follows? 
// //    If yes, 
// //    * what is it called ?
// //    * what is this part ?
// //        ```
//        function(a, b){
//           return a*b;
//        } ;
// //        ```
// //    * explain how to invoke it

//    ```javascript 
// //    anonymous function
//    const x = function(a, b){  
//       return a*b;
//    } x(2,4)
// //    ```


// function sayHello() {
//     return "Hello, ";
//  }
//  function greeting(helloMessage, name) {
//    console.log(helloMessage() + name);
//  }
//  greeting(sayHello, "JavaScript!");

//  function sum(num1=10, num2){
//     return num1 + num2
// }
// num1=10 used as default
// let sum =  (num1=10, num2) => num1 + num2

// sum(40,2)//
// function foo () {
//     function bar() {
//       return "Poppin' bottles";
//     }
//     return bar;
//   }
  
//   console.log(foo()())

// 11. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click V
//       ☐ onclick

// 12. Does the `addEventListener()` method allow you to add many events to the same element?

//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```

//     DOM exercise

//     1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM.
//               * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//               * else the content of the paragraph is "New Paragraph" --> MANDATORY  : use ternary operator
//                   * Example: if the paragraph is the 3rd one added, the content should be "Hello"
//       --> MANDATORY : Use arrow functions.
let count = 0
let adder = () =>{
    count ++
    const para = document.createElement('p');
    para.addEventListener('mouseover', color);
    para.style.border = '2px solid black'
    box.appendChild(para)
    
    const text = document.createTextNode("hello!")
    count % 3 == 0 ? para.appendChild(text) : para.appendChild(document.createTextNode('no'))


} 
 const button = document.getElementById('btn')
 const box =document.getElementById('box')
button.addEventListener('click', adder)

function color(e){
    console.log('1');
    e.target.style.color = 'red'

}

    // 2. Part II : Add to each new paragraph, an event listener of mouse over. 
    // When you hover on a paragraph, the paragraph should become red (ie. color of the                        text).
// //     14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
// // Console.log the sum of this array

//  const marks = [67, 60, 89, 90, 67, 42];
 
//    let sum = 0

//     for (let i = 0; i < marks.length; i++){
//        sum +=  marks[i];
//        console.log(sum);
//     }
//  let sumTwo = 0
//     for (const score of marks) {
//         sumTwo += score
//         console.log(sumTwo);
        
//     }

    // 15. What is the value of `passed` in the following code?

     
        //  const marks = [67, 60, 89, 90, 67, 42];

        //  const passed = marks.every(function(m) {
        //     return m >= 50;
        //  }); false, every check if ALL of them are

    //     const nums = [10, 50, 88];

    //     const bignums = nums.filter(function(n) {
    //        return n > 10;
    //     });
 
    //     console.log(bignums);an array on the numbers over 10
    //  ```
 
    const input = [ 1, 2, 3, 4, 5 ];
       //code

      input.forEach((num,i,arr) => {arr[i] = num*num
        
       });
       
       console.log(input) // [ 1, 4, 9, 16, 25]


       const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
        let total = secondInput.filter(num=> num > 0).reduce((acc, num)=> acc+num)




         console.log(total) //42

        //  const Pre = 'George Raymond Richard Martin';
        //  const initials = Pre.split(" ").map(word => word.charAt(0)).join('')
        //  console.log(initials)//'GRRM'

        // How objects are passed to a function in JavaScript? By Value or By Reference ? Explain in detail, using the below example:

         function changeTshirt (myshirt){
            console.log("myshirt", myshirt); //blue was not yet touched
            myshirt.color = "red"
            console.log("myshirt", myshirt); //red it was changed //this is the parameter
            console.log("tshirt", tshirt); // red we changed it  //this is the global variable
        }
    
    
        const tshirt = {
            color : "blue",
            price : 10
        }
    
        changeTshirt(tshirt)

        // How would you change the code above, so that when you modify the key `color` from the parameter `myshirt`, 
        // it won't change the global variable `tshirt` ?
       
        // Use object destructuring to retrieve the value of the keys `france` and `spain`
       
        // const football = {
        //     type: "sport",
        //     clubs: {
        //       france : "Paris Saint-Germain",
        //       spain : "Atlético Madrid",
        //     }
        //   }  

        //   let {clubs: {france, spain}} = football
        //   console.log(france, spain);


          function retrieveSports ({clubs: {france : franceTeam,spain : spainTeam }}) {
            const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
            console.log(sentence);
         }
    
         const football = {
             type: "sport",
             clubs: {
               france : "Paris Saint-Germain",
               spain : "Atlético Madrid",
             }
           }  
    // My favorite football teams are ${paris saitn} and ${atlecti madrid}
         retrieveSports(football)

         class Item {
            constructor(nameProduct, priceProduct) { 
                  this.name = nameProduct;
                  this.price = priceProduct;
            }
     
            displayInfo () {
                 console.log(this.name + " is for $ " + this.price)
            }
         } 
     
         const cake = new Item("Chocolate Cake", 10);
         cake.displayInfo(); //chocloate cake is for $10


         Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      }) // uppercase succes

      const p = new Promise(function(resolve, reject) {
        setTimeout(function() {
           resolve("OK");
        }, 2000);
     });
     
     p.then(function(data) {
        console.log(data);
     });
     //afeter 2 seconds, we will print ok

     async function test() {
        let result = 'first!';
        
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve('done!'), 1000);
        });
      
        result = await promise;
      
        console.log(result);
      }
      
      test();//after 1 sec log done! the AWAT stops the funcrtion


      const catBut = document.getElementById('cat')

      catBut.addEventListener('click', catFact)

      async function catFact(){
        try {
            let api = `https://catfact.ninja/fact`
            let result = await fetch(api)
            if (result.status !== 200) {
                throw new Error("wrong")  
            }else{
                let resultTwo = await result.json()
                appender(resultTwo.fact)
                }
        } catch (error) {
            console.log(error);
        }
      }

      function appender(fact){
        let text = document.createTextNode('^>.<^' +fact + '^>.<^')
        let p = document.createElement('p')
        p.appendChild(text)
        box.appendChild(p)
      }