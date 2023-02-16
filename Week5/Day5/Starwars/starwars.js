const btn = document.getElementById(`finder`);
const box = document.getElementById(`box`);
btn.addEventListener("click", finder);

async function finder() {
  let loading = document.createElement(`h1`);
  loading.classList.add("fa-solid", "fa-cog", "fa-spin", "loading");
  loading.setAttribute("id", `loader`)
  box.appendChild(loading);
  toDel = document.querySelectorAll(`.text`); //---> dleter
  toDel.forEach((line) => {
    line.remove();
  });
   
  try {
    let randomNum = Math.floor(Math.random() * 83 + 1);
    console.log(randomNum);
    let api = `https://www.swapi.tech/api/people/${randomNum}/`;
    let result = await fetch(api);
    let resultTwo = await result.json();
    document.getElementById(`loader`).remove();
    let properties = resultTwo.result.properties;
    let { name, height, gender, birth_year, homeworld } = properties;
    let world = await homeworldAPI(homeworld);
    const infoArr = [height, gender, birth_year, world];
    appender(name, infoArr);
  } catch (error) {
    console.log(error);
  }
}

async function homeworldAPI(api) {
  let worldApi = await fetch(api);
  let worldApiTwo = await worldApi.json();
  let worldName = worldApiTwo.result.properties.name;
  return worldName;
}

function appender(name, arr) {
  //name
  const head = document.createElement("h1");
  const nameText = document.createTextNode(name);
  head.appendChild(nameText);
  head.classList.add(`text`);
  box.appendChild(head);
  //arr
  arr.forEach((info) => {
    const wordBox = document.createElement(`p`);
    const word = document.createTextNode(info);
    wordBox.appendChild(word);
    wordBox.classList.add(`text`);
    box.appendChild(wordBox);
  });
}
