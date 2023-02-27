const http = require("http");
const { user } = require("./users");

const server = http.createServer((req, res) => {
  res.end(`<p>${JSON.stringify(user)} </p>`);
});

server.listen(5000, () => {
  console.log("listen 5000");
});
