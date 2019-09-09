/**
 * 1. 将图片的二进制数据转化为base64字符串编码格式；
 * 将base64字符编码直接存在网页中，浏览器可以识别该编码的，将该编码转化为一个图片显示
 * 2. 适用于图片较小的情况。减少http的请求数量，提高页面的性能
 */
const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.png");
    var imgBuffer=fs.readFileSync(imgPath);
    var base64Data =imgBuffer.toString("base64");
    var imgSrc = "data:image/png;base64,"+base64Data;
    //var htmlStr = "<!DOCTYPE html><head></head>" + "<body><img src='"+imgSrc+"'></body></html>";
    var htmlStr = "<!DOCTYPE html><head></head>" + "<body><img src='"+imgSrc+"'></body></html>";
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(htmlStr);
    res.end();
    console.log(base64Data);

}).listen(8081);
console.log("server is listening 8081");