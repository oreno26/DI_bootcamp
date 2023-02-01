// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false
function isBlank() {
  const wordToCheck = prompt(`give a word`);
  if (wordToCheck === ``) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isBlank()

// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbreviator() {
  const toAbrrreviate = prompt(`your full name please`);
  const toAbrrreviateArray = toAbrrreviate.split(" ");
  toAbrrreviateArray.splice(1, 1, toAbrrreviateArray[1][0].toUpperCase());
  let abbreviatedName = toAbrrreviateArray.join(` `);
  console.log(abbreviatedName);
}
abbreviator()

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

// i need to turn it all to upper case, than make an array and change eace letter 0 in each word to lower case so a loop

function flipper() {
  const sent = prompt(`tell me something`).toUpperCase();
  const sentOneArray = sent.split(` `);
  console.log(sentOneArray);
  for (var i = 0; i < sentOneArray.length; i++) {
    sentOneArray[i] =
      sentOneArray[i].charAt(0).toLowerCase() + sentOneArray[i].slice(1);
  }
  const sentTwo = sentOneArray.join(" ");
  console.log(sentTwo);
}

flipper();
