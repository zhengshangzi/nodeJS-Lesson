/*
//1.引入http原生模块
const http = require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
//2.创建一个服务器
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var urlPathName=urlObj.pathname;
    if(urlPathName=="/favicon.ico"){
        res.end();
    }
    else if(urlPathName=="/"){
        //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath=__dirname + "\\view\\index.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"Text/html"});
    res.write(htmlContent);
    res.end();
    //console.log(htmlContent);//出现HTML
    //console.log(htmlPath);//出现地址
    }
    else if(urlPathName=="/js/index.js"){
        var jsPath=path.join(__dirname,"/js/index.js");
        var jsContent=fs.readFileSync(jsPath);
        //console.log(jsContent);
        res.writeHead(200,{"Content-Type":"Text/javascript"});
        res.write(jsContent);
        res.end();
    }
    /*
    console.log(urlPathName);
    console.log(urlObj);
    //console.log(req.url);
    
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath=__dirname + "\\view\\index.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"Text/html"});
    res.write(htmlContent);
    res.end();
    //console.log(htmlContent);//出现HTML
    //console.log(htmlPath);//出现地址
    *
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");
*/

//1.引入http原生模块
const http = require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
//2.创建一个服务器
var server=http.createServer(function(req,res){
    
    // 5、process.platform得到当前系统
    //req.url表示URL地址中，端口以后的内容
    //使用了URL.parse讲req.url装换为对象，对象提取pathname
    
    var urlObj=url.parse(req.url);
    var urlPathName=urlObj.pathname;
    //根据资源路径，可以决定执行哪一段代码
    if(urlPathName=="/favicon.ico"){
        res.end();
    }
    else if(urlPathName=='/'){

        // console.log(req.url); //资源发起请求
        var sys=process.platform;
        // console.log(sys);
        //4、当客户端的http请求发起的时候，才会执行回调函数里面的内容
        var htmlPath=__dirname + "\\view\\index.html";
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent=htmlContent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
        // console.log(htmlPath);
        // console.log(htmlContent);
    }
    else if(urlPathName=="/js/index.js"){
        var jsPath=path.join(__dirname,"/js/index.js");
        var jsContent=fs.readFileSync(jsPath);
        //console.log(jsContent);
        res.writeHead(200,{"Content-Type":"Text/javascript"});
        res.write(jsContent);
        res.end();
    }
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");
