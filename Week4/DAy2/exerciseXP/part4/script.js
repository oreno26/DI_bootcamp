// const nav = document.getElementById(`navbarNav`)


(function(name){
    const nav = document.getElementById(`navbarNav`)
    const divOne = document.createElement(`div`)
    divOne.classList.add("profile")
    const text = document.createTextNode(name)
    divOne.style.backgroundImage =`url("Profile-1.jpg")`;
    divOne.style.color = "white"
    divOne.appendChild(text)
    nav.appendChild(divOne)
})(prompt(`Whats your name?`))