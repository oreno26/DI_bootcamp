let tasks = "";
const form = document.querySelector("form")

form.addEventListener("submit", addTask)

function addTask(evt){
    evt.preventDefault()
const toDo = document.forms[0].firstElementChild.value
console.log(evt.target[0]); 
if(toDo !== ""){
    tasks = toDo
    creatingTask(tasks)
} else {
    alert(`empty`)
}
}
function creatingTask(task){
    
    const container = document.querySelector("#list")
    const div = document.createElement("div")
    div.classList.add("listTasks")

    const button = document.createElement("button")
    const iconTrash = document.createElement("i")

    iconTrash.classList.add("gray")
    iconTrash.classList.add("fa-regular", "fa-trash-can")

    const newInput = document.createElement("input")
    newInput.setAttribute("type","checkbox");
    newInput.setAttribute("value", task)
    
    div.appendChild(newInput)
    container.appendChild(div)
    
    button.appendChild(iconTrash)
    div.appendChild(button)

    const newLabel = document.createElement("label")
    const labelText = document.createTextNode(tasks)

    
    newLabel.appendChild(labelText)
    div.appendChild(newLabel)

}

