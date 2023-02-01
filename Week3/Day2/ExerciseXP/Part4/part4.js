// i need to put in the radious and output the volume

const firstForm = document.forms[0];
const radius = document.forms[0].elements.radius;
// const radiusNum = radius.value
firstForm.addEventListener("submit", volume);

function volume(evt) {
  evt.preventDefault();
  const radiusNum = evt.target.radius.value;
  // evt = the form that had the event, .target = tells to target it, .radius = in this case is the id

  console.log(typeof +radiusNum);

  if (+radiusNum > 0) {
    let volume = (4 / 3) * Math.PI * radiusNum ** 3;
    document.forms[0].elements.volume.value = volume;
  } else {
    alert(`not a number or not a valid one`);
  }
}
