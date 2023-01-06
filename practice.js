const http=require('http')
// console.log(http);
const server=http.createServer(function(req,res){
    res.write('welcom to the earth')
    res.write('node js')
    res.end()
}).listen(3000,()=>console.log('server is running:3000'))