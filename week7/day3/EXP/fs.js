const fs = require('fs');

// Create an fs.js file, and inside use the Node JS File System to read the text file and 
// console.log the output in the terminal

try {
    const data = fs.readFileSync('text', 'utf-8')
    console.log(data);
} catch (error) {
    console.log(err);
}
 
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

fs.writeFile("newtext", "new file text", "utf-8", (err) =>{
    console.log("file made");
})
// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)


fs.appendFile('newtext', "some more text", "utf-8", (err)=>{
    if (err) {
        return console.log(err);
    }
    console.log("text added");
})
// Use the Node js File System to delete the file.


const path = 'newtext'
fs.unlink(path,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("delete succus");
})