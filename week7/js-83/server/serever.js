const http = require('http');
const server = http.createServer((req, res ) =>{
    console.log('hello, get your request.....');
    if(req.url === '/'){
        if(req.method === 'GET'){
        res.end('<a href="http://localhost:5001/about">HOME HONDA</a>')}
    }else if(req.url === '/about'){
        res.end('<h1>THIS ISNT FERRARI</h1>')
    }else{
      res.end('404 NOT FOUND')
    }
    
})

server.listen(5001, ()=>{
    console.log('run on port 5001');
})