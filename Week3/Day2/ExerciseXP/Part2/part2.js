// Retrieve the form and console.log it.
const formToLog = document.forms[0];
console.log(formToLog);
// Retrieve the inputs by their id and console.log them.
const firstName = document.forms[0].elements.fname;
const lastName = document.forms[0].elements.lname;
const subM = document.forms[0].elements.submit;
// console.log(firstName);
// console.log(lastName);
// console.log(subM);
// Retrieve the inputs by their name attribute and console.log them.
// ?
// const firstNameAnother = document.forms[0].elements[0]
// const lastNameAnother = document.forms[0].elements[1]
// const submAnother = document.forms[0].elements.submit
//?

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? so it wont refresh
formToLog.addEventListener("submit", retrieveValue);
const list = document.getElementsByClassName(`usersAnswer`)[0];
function retrieveValue(evt){
  evt.preventDefault()
  list.appendChild(document.createTextNode(`User Input`))
  for (let i = 0; i <= document.forms[0].elements.length-2 ; i++){
  let input = document.createTextNode(document.forms[0].elements[i].value);
  let listI = document.createElement("li");
  listI.appendChild(input);//addind in the text
  list.appendChild(listI);// adding the `li` to the ul
  }
}
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
