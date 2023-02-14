// api.giphy.com/v1/gifs/search?q=hilarious&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
const container = document.getElementById(`container`);
const form = document.getElementById(`form`);
const xhr = new XMLHttpRequest();
form.addEventListener("submit", find);

function find(e) {
  e.preventDefault();
  let query = e.target[0].value;
  // console.log(query);
  let url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=1&offset=${Math.floor(
    Math.random() * 100
  )}&rating=R&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  // console.log(url);

  request(url);
}
function request(link) {
  xhr.open("GET", link);
  xhr.send();
}
xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log(`error Error ERror`);
  } else {
    const gif = JSON.parse(xhr.response);
    appender(gif);
  }
};
function appender(name) {
  console.log(name.data[0].images.downsized.url);
  const div = document.createElement(`div`);
  const removeOne = document.createElement(`button`);
  const gifLink = document.createElement(`img`);
  gifLink.src = name.data[0].images.downsized.url;
  gifLink.classList.add(`gif`);
  const textDel = document.createTextNode(`delete one`);
  removeOne.appendChild(textDel);
  removeOne.addEventListener("click", remove);
  div.appendChild(removeOne);
  div.appendChild(gifLink);
  div.classList.add(`delete`);
  container.appendChild(div);
}

function remove(e) {
  e.target.parentElement.remove();
  console.log(e.target);
}

const deleteer = document.getElementById(`allDel`);
deleteer.addEventListener("click", allDelete);

function allDelete() {
  let toDel = document.querySelectorAll(`.delete`); //---> brings an array
  toDel.forEach((gif) => {
    gif.remove();
  });
}
