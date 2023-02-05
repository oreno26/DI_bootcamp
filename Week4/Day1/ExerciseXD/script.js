// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? it wont change

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()//0
// funcTwo()//
// funcThree()//5
// // #2.2 What will happen if the variable is declared 
// with const instead of let ? error


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// const a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?works because of differant scopes

// //#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?