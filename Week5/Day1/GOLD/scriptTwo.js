let itBe = window.location.search
let button = document.getElementById(`get`)

button.addEventListener("click", append)

function append(){
    const div = document.createElement(`div`)
    const text = document.createTextNode(itBe)
    div.appendChild(text)
    document.body.appendChild(div)
}