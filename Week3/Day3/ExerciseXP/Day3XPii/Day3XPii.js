// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> 
// to the right side of the <div id="container">, when the button is clicked on.
let idInterval;
const toAnimte = document.getElementById(`animate`)
document.getElementById(`mover`).addEventListener("click", move)
function move(){
      idInterval = setInterval(tomove, 1)
      let pos = 0
      function tomove(){
        if(pos < 350){
        pos ++;
        toAnimte.style.left = pos + 'px';
    }else if(pos == 350){
        clearInterval(idInterval)
       }
    
}
}


// The <div id="animate"> should move 1px to the right every milisecond,
//  until it reaches the end of the <div id="container">.




// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions