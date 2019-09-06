//1.引入http原生模块
const http = require("http");
const fs=require("fs");
const path=require("path");
//2.创建一个服务器
var server=http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath=path.join(__dirname + "\\view\\index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"Text/html"});
    res.write(htmlContent);
    res.end();
    //console.log(htmlContent);//出现HTML
    //console.log(htmlPath);//出现地址
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");
