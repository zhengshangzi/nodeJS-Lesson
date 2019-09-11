const http = require("http");
var server=http.createServer(function(req,res){
    /*
    *http协议，协议的结构 协议的请求响应过程
    *状态码
     */
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("<h1>hello world</h1>");
    //res.write("hello world");
    //响应结束
    res.end();
});
server.listen(8081);
console.log("server is listening 8081");

/*
1. shift +鼠标右键 点击打开power shell窗口（空白处右键）
2. 编译node.js文件 node+文件名（node后加空格）
3. 每次修改了JS文件后，需要重新执行node+文件名（node后加空格）
4. 在node中的js文件中，必须得编译才能执行
5. webstorm
测试网址：localhost:8081
*/