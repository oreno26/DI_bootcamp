// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

// Make sure the values are not empty

// Write a story that uses each of the values.

// Make sure you check the console for errors when playing the game.
const inputForm = document.forms[0]
console.log(inputForm)
inputForm.addEventListener("submit", story)


function story(evt){
    evt.preventDefault();
    const arrWords = valuesForm();
    const story = `hello my name is ${arrWords[2]}, and i want to ${arrWords[3]} you a ${arrWords[0]}
    along time ago in ${arrWords[4]} me and my friends were very ${arrWords[1]} so we had to ${arrWords[1]}
    some one came and said im the ghost of ${arrWords[2]} and i said but thats me! turns out i was dead.. i have no friends`
    const storyText = document.createTextNode(story)
    document.querySelector("#story").appendChild(storyText)
}




function valuesForm(){
    let arrWords = [];
        for (let i=0; i<=inputForm.elements.length-2; i++){
            let word = inputForm.elements[i].value
            if ((typeof word == String)){
                arrWords.push(word)
            } else {
                alert(`Error, enter a word`) 
                break
            }
        }
        return arrWords
    }




