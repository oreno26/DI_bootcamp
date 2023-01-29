const planets = [ "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "PLUTO"]

for (const planet of planets){
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet.toLocaleLowerCase())
    // console.log(`div:`, div);

    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
}