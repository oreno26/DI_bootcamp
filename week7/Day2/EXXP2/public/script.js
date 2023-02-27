

const getter = () =>{
    ;
    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then(data => {appender(data)})
}
const mainDiv = document.getElementById('box')
const appender = (info) => {
    console.log(info);
    const mainDiv = document.getElementById('box')
    const text = document.createTextNode(info.firstname + " " + info.lastname + JSON.stringify(info))
    mainDiv.appendChild(text)

}
getter()
console.log(4);