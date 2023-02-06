// instructions
// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
//  and married to <partner's name> with <number of children> kids."

(function(numChildren, partnerName, geographicLocation, jobTitle){
    const container = document.getElementById(`container`) 
    const div = document.createElement(`div`)
    const text = document.createTextNode(`You will be a ${jobTitle} in ${geographicLocation},and married to ${partnerName} with ${numChildren} kids.`)
    container.appendChild(div)
    div.appendChild(text)
})(4, "mary", "narnia", "astronaut");