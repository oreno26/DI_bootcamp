// PART I
// Use fetch to fetch one 1 random gif with the category of "sun",
// then append the gif to the page. Use this documentation
//  https://developers.giphy.com/docs/api/endpoint#random
//  https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
function gifMaker(input) {
  console.log(input);
  fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${input}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  )
    .then((resOne) => {
      if (resOne.status !== 200) {
        throw new Error(`data not aquired`);
      } else {
        const info = resOne.json();

        return info;
      }
    })
    .then((resTwo) => {
      console.log(resTwo);
      if (resTwo.data.length === 0) {
        throw new Error(`data not aquired`);
      } else {
        const gif = resTwo.data.images.original.url;
        console.log(resTwo.data);
        gifappender(gif);
      }
    })
    .catch((err) => {
      gifMaker("404");
    });
}
function gifappender(url) {
  const gifOne = document.createElement(`img`);
  gifOne.src = url;
  document.getElementById(`box`).appendChild(gifOne);
}

// gifMaker(prompt(`what gif would you like?`))

//  Part II
// Instead of having a fixed category of gif.
//  First, fetch one word from this api :
//  http://random-word-api.herokuapp.com/word?number=1
//  You will then fetch 1 random gif, depending on the word.
//  The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api.
// This api will return a random word - for example : "happy" Using this word as a category,
// you will fetch one random gif with the category of "happy" and display it on the page
function randomGif() {
  fetch("http://random-word-api.herokuapp.com/word?number=1 ")
    .then((resFst) => {
      if (resFst.status !== 200) {
        throw new Error(`data not aquired`);
      } else {
        // console.log(resFst);
        const word = resFst.json();
        return word;
      }
    })
    .then((resScnd) => {
      const word = resScnd[0];
      console.log(word);
      gifMaker(word);
    });
}

randomGif()

//  randomGif()
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"
