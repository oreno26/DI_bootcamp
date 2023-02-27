const http = require("http")
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser.
//  (Use only HTML tags, no HTML files)

const server = http.createServer((req, res) =>{
   
        res.end(`<h1>hello</h1><br><p>line two here</p><br><h2>line three bringing up the rear</h2>`)
    

})

server.listen(3000,() =>{
    console.log("over 3000");
})