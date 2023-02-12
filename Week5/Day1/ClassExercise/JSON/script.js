// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
const container = document.getElementById(`container`)
let newJSdata = JSON.parse(jsonString)
console.log(newJSdata.quiz.sport.q1.options);
console.log(newJSdata);
let options = newJSdata.quiz.sport.q1.options
// use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
options.forEach(option => {
    let li = document.createElement(`li`)
    let text = document.createTextNode(option)
    li.appendChild(text)
    container.appendChild(li)
});
// Create another variable to stringify the JS object. Console.log the variable

const newJSON = JSON.stringify(newJSdata,  null , 2)
console.log(newJSON);