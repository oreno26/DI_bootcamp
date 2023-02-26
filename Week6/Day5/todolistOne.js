const list = []
const form = document.getElementById('todo');

form.addEventListener('submit', submitToList)

function submitToList(e){
     const text = e.target[0].value
     const descrip = e.target[1].value
     const start = e.target[2].value
     const end = e.target[3].value
     if (text.length == 0 || descrip.length == 0 || start.length == 0 || end.length == 0) {
        alert('must fill out all fields')
        e.preventDefault()
     }else{
        list.push(text, descrip, start, end)
        localStorage.setItem("list", JSON.stringify(list))
     }
}
