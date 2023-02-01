//box

let boxToDrag = document.getElementById(`box`);
boxToDrag.setAttribute("draggable", true);
boxToDrag.addEventListener('dragstart', startDragging)
function startDragging(evt){
    evt.dataTransfer.setData("text/plain", evt.target.id);
    console.log("move has begun");
}

//done with box

//start with zone
let dropZone = document.getElementById(`target`);

dropZone.addEventListener('dragover', overTarget)
dropZone.addEventListener(`drop`, dropOnTarget )

function overTarget(evt) {
    evt.preventDefault();
    console.log(`we are over the target`);
}

function dropOnTarget(evt){
    evt.preventDefault();
    const lander = evt.dataTransfer.getData("text/plain");
    const elem = document.getElementById(lander);
    evt.target.appendChild(elem);
    alert('We Have TouchDown')

}


