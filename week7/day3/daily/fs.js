const fs = require('fs')

const data = fs.readFileSync('rightleft.txt',"utf-8");
   const arrLR = data.split("")

try{
   let count = 0
   arrLR.forEach((elem) =>{
    if (elem == ">") {
        count ++
    }else if(elem =="<"){
        count --
    }
    
   })
   if (count < 0) {
    console.log(`you have moved ${-1 * count} steps to the right`);
   }else{
    console.log(`you have moved ${count} steps to the right`);
   }
} catch{
    console.log(err);
}


try {
    let countTwo = 0
    let countStep = 0
    while (countTwo != -1) {
    for (const elem of arrLR) {
        if (elem == ">" && countTwo != -1) {
            countTwo ++
            countStep ++
        }else if(elem == "<" && countTwo != -1){
            countTwo --
            countStep++
        }else if (countTwo === -1) {break;} { 
            // console.log(countStep);
        } }log(`it took ${countStep}s`)
    }
} catch (error) {
    console.log(error);
}






// arrLR.forEach((elem)=>




try {
    let countTwo = 0
    while (countTwo != -1) {
        
    }
} catch (error) {
    console.log(error);
}
