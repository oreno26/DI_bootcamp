const cartArr = JSON.parse(localStorage.getItem("Cart"));
const bigList = document.getElementById('cart');
const bigPrice = document.getElementById('total');
const button = document.getElementById('btn');
let total = 0;
(function (){
    
    cartArr.forEach(item => {
        const list = document.createElement('li')
        const name = document.createTextNode(item.item)
        list.appendChild(name)
        bigList.appendChild(list)
        total += total + item.price
    })
    const price = document.createTextNode(`your total has come to ${total}`)
    bigPrice.appendChild(price)
    ;
})()

button.addEventListener('click', clear)

function clear(){
    alert(`your total paymen is ${total}`)
    localStorage.clear()
    
}