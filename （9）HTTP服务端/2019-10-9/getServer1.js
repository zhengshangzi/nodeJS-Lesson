/**
 * 请求localhost:8081/
 * 响应HTML页面，页面里有个超链接 
 * <a href='localhost:8081/new?newId=12&newType=1'>新闻</a>
 * 点击超链接的时候在控制台输出发情期请求的资源路劲和传递了参数
 */
const http=require("http");
const url=require("url");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    if(urlObj.pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.end("<a href='http://localhost:8081/new?newId=12&newType=1'>新闻</a>");
    }
    else if(urlObj.pathname=="/new"){
        console.log(urlObj.pathname);
        console.log(urlObj.query.newId);
        console.log(urlObj.query.newType);

    }

}).listen(8081);


console.log("Server is listening 8081")