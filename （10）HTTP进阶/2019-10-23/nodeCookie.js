//在客户端记录信息确定用户身份
const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const querystring=require('querystring');
http.createServer(function(req,res){
   var urlObj=url.parse(req.url,true);
   switch(urlObj.pathname){
       case'/':
       showLogin(res);
       break;
       case '/login':
           loginIn(req,res);
           break;
        case '/home':
            showHome(req,res);
            break;
   }
}).listen(8081);
console.log('server is listening 8081');
function showLogin(res){
    var filePath=path.join(__dirname,'login.html');
    var fileContent=fs.readFileSync(filePath);//sync 是同步，数据直接获取，异步数据在回调函数里
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(fileContent);
    res.end();
}

function loginIn(req,res){
    var formData="";
    req.on('data',function(chunk){
        formData+=chunk
    })
    req.on('end',function(){
        //console.log(formData)
        var formObj=querystring.parse(formData);
        if(formObj.username=='zhangsan'&&formObj.pwd=='123'){
            res.setHeader('Set-Cookie','username=zhangsan;max-age=60');
            res.end('login success');

        }
        else{
            res.end('login error');
        }
    })
}
function showHome(req,res){
    var cookie = req.headers['cookie'];
    if(cookie == undefined){
        showLogin(res);
    }
    else if(cookie.indexOf("username=")>=0){
        res.end("home page");
    }
    else{
        showLogin(res);
    }
}