


// You first need to validate the data:
// make sure the limit is equal to 10
// make sure the query is not empty, and contains at least 5 characters
// if not, you shouldn't submit the form

const formOne = document.getElementById(`formOne`)

formOne.addEventListener("submit", validate)

function validate(e){
    if(e.target[1].value.length < 4 ||  e.target[0].value != 10 ){
        e.preventDefault()
        console.log(e.target[1].value.length);
        console.log(e.target[0].value);
        alert(`WRONG`)
    }
}   