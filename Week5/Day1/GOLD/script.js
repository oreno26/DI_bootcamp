const formOne = document.getElementById(`formone`)

formOne.addEventListener("submit", maker)
let text
function maker(e){
// e.preventDefault()
 e.target[0].value + " " + e.target[1].value
 localStorage.setItem("lastname", "Smith");
}

// -->window.location.search<--// in two turning it to a variable and appending it