const http =require('http')
const port = 3000
http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end('hello world\n')
}).listen (port, ()=> {
    console.log (`server running at http://localhost:${port}`)
});