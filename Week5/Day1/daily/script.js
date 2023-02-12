const formOne = document.getElementById(`formOne`);

formOne.addEventListener("submit", append);

function append(e) {
  let newObj = {
    name: e.target[0].value,
    lastname: e.target[1].value,
  };
  let text = JSON.stringify(newObj);
  let div = document.createElement(`div`);
  let textNode = document.createTextNode(text);
  div.appendChild(textNode);
  document.body.appendChild(div);

  e.preventDefault();
}
