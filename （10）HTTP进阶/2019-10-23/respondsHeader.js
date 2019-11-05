const http=require('http');
http.createServer(function(req,res){
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.setHeader('Content-Length',10);//响应内容的字节长度
    //res.setHeader("Content-Encoding","gzip");//设置服务端进行压缩文件的模式
    res.setHeader('Date',(new Date()).toLocaleString);//服务端响应的时间
    res.setHeader('Set-Cookie','name=zhangsan');
    res.statusCode=404;
    res.end('hello node')

}).listen(8081);
console.log('server is listening 8081');