//另一种创建server的方式
const http=require("http");

const server=new http.Server();
server.listen(8081);
server.on("request",function(req,res){
    res.end("hello node");
})