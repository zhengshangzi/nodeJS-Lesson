// const http = require("http");
// const fs   = require('fs');
// const file = process.argv[2] || __filename;
// var server=http.createServer(function(req,res){
//     var len = fs.statSync(file).size,
//     buf = new Buffer(len),
//     fid = fs.openSync(file, 'r');
//     fs.readSync(fid, buf, 0, len, 0);
//     res.write(buf.toString('utf8'));
//     res.end();
//     fs.closeSync(fid);
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
        fs.open(process.argv[1],"r+",function(err,fd){
            var statObj=fs.statSync(process.argv[1]);//统计信息
            var buf=Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        });
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html;charest=utf-8"});
        res.end("文件不存在");
    }
}).listen(8081);
