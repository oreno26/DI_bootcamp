// Create a program using XMLHTTPREQUEST to receive data from the below API and append it to the DOM.
// Use the events onload, onprogress,onerror
// http://universities.hipolabs.com/search?country=Israel

const xhr = new XMLHttpRequest();
let info
function request() {
    xhr.open("GET", "http://universities.hipolabs.com/search?country=Israel")
    xhr.send()
}
// request()
xhr.onload = function(){
    if (xhr.status !==200) {
        console.log(`error Error ERror`);
    }else{
        const info = JSON.parse(xhr.response)
        console.log(info);
        append(info)
    }
}
xhr.onprogress = function (event){
    console.log(event.loaded);
}


const button = document.getElementById(`button`)
        button.addEventListener("click", request)

 function append(arr){
    const list = document.getElementById(`container`)
    arr.forEach(uni => {
       const li = document.createElement(`li`) 
       const text = document.createTextNode(uni.name)
       li.appendChild(text)
       list.appendChild(li)
    });
 }



