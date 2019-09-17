const http = require("http");
var server=http.createServer(function(req,res){
    
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("<h1>hello world</h1>");
    res.end();
});
server.listen(8080);
console.log("server is listening 8080");

