const { today } = require(`./lagenumber`);
let http = require("http");
date = today();

const server = http.createServer((req, res) => {
    res.setHeader('content-Type', 'text/html')
  res.end(`<h1> The date and time are now : ${date}</h1>`);
  console.log("im listining");
});

server.listen(3000);
