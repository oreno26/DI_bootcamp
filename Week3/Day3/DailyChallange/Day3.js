const form = document.forms.Leters
console.log(form)
form.addEventListener("submit", submitButton)
form.addEventListener("keydown", Leters)

function submitButton(evt){
    evt.preventDefault();
const value = evt.target[0].value;
document.querySelector("#output").textContent = value;
console.log(value)
}

function Leters(evt){
        const code = evt.keyCode;
        if (!((code == 8) || (code == 32) || (code >= 37 && code <= 40) || (code >= 65 && code <= 90)))
         {
            evt.preventDefault();
        }
    }  