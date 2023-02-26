const {largeNumber} = require('./lagenumber');
const {today} = require(`./lagenumber`)
const b = 5
const  mod = largeNumber + b

date = today()
console.log(date);

let http = require("http");
const server = http.createServer((req,res) => {
    res.setHeader('content-Type', 'text/html')
    res.end(`<p>My module is : ${mod}</p><br><h1>HI IM FRONT END</h1>` );
    console.log('im listining');
})

server.listen(3000)