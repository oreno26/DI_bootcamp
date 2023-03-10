const form = document.getElementById("reg");
const input = form.querySelectorAll("[required]");
const btn = document.getElementById("submit");

for (let i = 0; i < 5; i++) {
  input[i].addEventListener("keyup", enable);
}
function enable(e) {
  let isEmpty = false;
  for (const inp of input.values()) {
    if (!inp.value || inp.value === " ") {
      isEmpty = true;
      break;
    }
  }
  !isEmpty ? (btn.disabled = false) : (btn.disabled = true);
}

form.addEventListener("submit", register);

function register(e) {
  e.preventDefault();
  const formData = new FormData(form);
   const user = {
     "fName" : formData.get("fName").toLowerCase(),
     "lName" : formData.get("lName").toLowerCase(),
     "email" : formData.get("email"),
     "username" : formData.get("username"),
     "password" : formData.get("password")
   }
   alert('NEW USER REGISTERD')
console.log(user);
}
