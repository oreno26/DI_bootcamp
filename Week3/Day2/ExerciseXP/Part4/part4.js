// i need to put in the radious and output the volume

const firstForm = document.forms[0];
const radius = document.forms[0].elements.radius;
// const radiusNum = radius.value
firstForm.addEventListener("submit", volume);

function volume(evt) {
  evt.preventDefault();
  const radiusNum = radius.value;

  console.log(typeof +radiusNum);

  if (+radiusNum > 0) {
    let volume = (4 / 3) * Math.PI * radiusNum ** 3;
    alert(volume);
  } else {
    alert(`not a number or not a valid one`);
  }
}
