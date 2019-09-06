const http = require("http");
/*实例化*/
var server =new http.Server();
/*sever监听客户端的请求 */
server.on("request",function(req,res){
    res.end("hello world");
})
/*监听窗口 */
server.listen(8082);
console.log("server is listening 8082");