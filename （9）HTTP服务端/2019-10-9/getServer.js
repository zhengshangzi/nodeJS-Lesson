const http=require("http");
const url=require("url");//提取数据的模块

http.createServer(function(req,res){
    /**
     * 哪些发起的是get请求
     * 1. 点击超链接
     * 2. 地址栏通过网址请求
     * 3. ajax发起get请求
     * 接收get请求的参数
     * req.url(http.IncomingMessage.url)
     * 提取URL上的有效数据，例如资源路径，参数
     * 可以借助URL模块（原生模块）url.parse(req.url,true);
     * 请求URL端口以后的内容:例如http://localhost:8081/888  请求的是/888
     */
    console.log(req.url);
    var urlObj=url.parse(req.url,true);
    console.log(urlObj);
}).listen(8081);

console.log("Server is listening 8081")