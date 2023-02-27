const express = require('express')
const app = express()


app.get('/', (req, res)=>{
res.send(`<h1>THIS IS AN <b>HTML</b> TAG</h1>`)
})

app.listen(3000, () =>{
    console.log(`3000`);
})






// Create a server file, name it - serverExpress.js
// Use express to create a server.  for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/
