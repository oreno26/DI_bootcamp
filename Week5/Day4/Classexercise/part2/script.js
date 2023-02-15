// function getWord () {
//     fetch("http://random-word-api.herokuapp.com/word?number=1")
//     .then((resOne) => {
//         if(resOne.status !== 200){
//             throw new Error ("Couldnt find a word")
//         }
//         return resOne.json();
//     })
//     .then((resTwo) => {
//         console.log(resTwo[0]);
//         getGif(resTwo[0]);
//     })
//     .catch((err) => {
//         const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
//         displayInfo(`ERROR WORD NOT FOUND ${err}`, errorGif)
//     })
// // }

async function getWord() {
  try {
    const response = await fetch(
      "http://random-word-api.herokuapp.com/word?number=1"
    );
    if (response.status !== 200) {
      throw new Error("not found");
    }
    const gif = await response.json();
    const gifWord = (gif[0])
    console.log(gifWord);
     return gifWord
  } catch (error) {
    console.log("error");
  }
}


 async function getGif(word) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  )
    .then((resOne) => {
      if (resOne.status !== 200) {
        throw new Error("Couldnt find a word");
      }
      return resOne.json();
    })
    .then((resTwo) => {
      if (resTwo.data.length === 0) {
        throw new Error("Couldnt find a gif");
      } else {
        const gif = resTwo.data.images.original.url;
        displayInfo(word, gif);
        console.log(gif);
      }
    })
    .catch((err) => {
      const errorGif =
        "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif";
      displayInfo("ERROR", errorGif);
    });
}



































function displayInfo(wordUser, gifUser) {
  const container = document.getElementById("container");
  const div = document.createElement("div");
  const para = document.createElement("p");
  const image = document.createElement("img");

  const text = document.createTextNode(wordUser);
  para.appendChild(text);
  image.src = gifUser;

  div.append(para, image);
  container.appendChild(div);
}

getWord();
