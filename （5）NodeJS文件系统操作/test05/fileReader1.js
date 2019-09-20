// const http = require("http");
// const fs   = require('fs');
// const file = process.argv[2] || __filename;
// var server=http.createServer(function(req,res){
//     fs.readFile(file, (err, buf) => {
//         if(err) {
//             console.error(err.message);
//             process.exit(1);
//         } 
//         else {
//             res.write(buf.toString('utf8'));
//             res.end();
//         }
//     });  
// });
// server.listen(8081);
// console.log("server is listening 8081");

//讲：
const path=require("path");
const http = require("http");
const fs   = require('fs');
var fileName=process.argv[2];
http.createServer(function(req,res){
    if(fileName==undefined){
        var str="hello";
        /**
         * fs.readFile()是一个异步方法，执行到该语句不会等待
         * 文件读物完成后，就直接执行后面单位语句
         * 回调函数是文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                str=data.toString();
                res.end(str);
            }
        })
    }
    else{
        var pathName=path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    str=data.toString();
                    res.end(str);
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charest=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8081);
