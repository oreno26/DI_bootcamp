const btn = document.getElementById("list");
const shoplist = document.getElementById("display");

const fetcher = (e) => {
  e.preventDefault();
  fetch("http://localhost:5001/api/shoppinglist")
    .then((res) => res.json())
    .then((data) => append(data));
};

btn.addEventListener("click", fetcher);

function append(arr) {
  arr.forEach((element) => {
    const itemText = document.createTextNode(
      `Item: ${element.item} Amount: ${element.amount}`
    );
    const itemLi = document.createElement("li");
    itemLi.appendChild(itemText);
    shoplist.appendChild(itemLi);
  });
}
