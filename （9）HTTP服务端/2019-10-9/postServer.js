const http=require("http");
const url=require("url");
const fs=require("fs");
const querystring=require("querystring");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postform.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }   
    else if(urlObj.pathname == "/pf"){
        var dataStr ="";
        req.on("data",function(chunk){
            dataStr += chunk;
        })
        req.on("end",function(){
            var dataObj=querystring.parse(dataStr);
            console.log(dataObj);
            res.end("username:"+dataObj.username+"pwd:"+dataObj.pwd);
        })
    }
}).listen(8082);

console.log("Server is listening 8082")