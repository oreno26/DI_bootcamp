let sec = 10
setTimeout(saleEnd, 1000)


function saleEnd(){
   let box = document.querySelector("#container")
   let div = document.createElement(`div`)
   let divText = document.createTextNode(`SALE ENDS IN ${sec} second`)
   div.appendChild(divText)
   box.appendChild(div)
}


// Use the same code as before but create a countdown in the banner.

const id = setInterval(countDown, 1000)
function countDown(){
   let target = document.body.firstElementChild.firstElementChild //finding taget
   if(sec >= 0) //condition
   {target.textContent = `SALE ENDS IN ${sec} seconds`} //changing the text
   else{//when timer reaches 0
    target.textContent = `SALE OVER`
    clearInterval(id)
   }
   sec --

}



// ... "The sales end in 9sec ! "

// etc ... until 0

// If you need help for this exercise, look at the 1st video of this tutorial
