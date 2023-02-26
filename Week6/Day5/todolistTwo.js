const list = document.getElementById('list');
let listTwo = JSON.parse(localStorage.getItem("list"))
console.log(listTwo);
(function(){
   let title = document.createElement('li');
   let decrip = document.createElement('li');
   let start = document.createElement('li');
   let end = document.createElement('li');
   let titleText = document.createTextNode(`To do: ${listTwo[0]}`);
   let decripText = document.createTextNode(listTwo[1]);
   let startText = document.createTextNode(`start on ${listTwo[2]}`);
   let endText = document.createTextNode(`Ends on: ${listTwo[3]}`);
   title.appendChild(titleText)
   decrip.appendChild(decripText)
   start.appendChild(startText)
   end.appendChild(endText)
   list.appendChild(title)
   list.appendChild(decrip)
   list.appendChild(start)
   list.appendChild(end)

})()