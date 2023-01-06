const http= require('http');
// console.log(http);
const server = http.createServer(function(req,res){
    res.write('welcome to node js')
    res.write('welcome to earth')
    
    res.end()
}).listen(3000,()=>console.log("server is running localhost:3000"))