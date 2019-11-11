//在服务端记录信息确定用户身份
const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
const querystring=require('querystring');
http.createServer(function(req,res){
   var urlObj=url.parse(req.url,true);
   switch(urlObj.pathname){
    case '/list':
        loginIn(req,res);
        break;

     case'/login_bg.jpg':
             showImg(res);
             break;
    case '/':
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
var sessions=[]
function loginIn(req,res){
    var formData="";
    req.on('data',function(chunk){
        formData+=chunk
    })
    req.on('end',function(){
        //console.log(formData)
        var formObj=querystring.parse(formData);
        if(formObj.username=='admin'&&formObj.pwd=='admin'){
            var session={
                sessionId:(new Date()).getTime()+Math.random(),
                //时间戳是毫秒，要设置的大一点
                exipire:(new Date()).getTime()+ 1113600,
                userName:'admin'
                
            }
            sessions[session.sessionId]=session;
            res.setHeader('Set-Cookie','sessionId='+session.sessionId);
            res.end('login success');

        }
        else{
            res.end('login error');
        }
    })
}
function showImg(res){
    var imgPath=path.join(__dirname,"login_bg.jpg");
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-type":"image/jpg"});
    res.write(imgContent);
    res.end();
};
function showlist(res){
    var filePath=path.join(__dirname,'list.html');
    var fileContent=fs.readFileSync(filePath);//sync 是同步，数据直接获取，异步数据在回调函数里
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(fileContent);
    res.end();
}
function showHome(req,res){
    var cookie = req.headers['cookie'];
    console.log(cookie)
    if(cookie == undefined){
        showLogin(res);
    }
    // var cookieArr=cookie.split(';');
    // var cookieObj={};
    // for(var i=0;i<cookieArr.length;i++){
    //     var cookiePair=cookieArr[i].split("=");
    //     cookieObj[cookiePair[0].trim()]=cookiePair[1];

    // }
    // console.log(cookieObj);
    // var sessionId=cookieObj.sessionId;
    // for(var key in sessions){
    //     if(key==sessionId){
    //         var session=sessions[key];
    //         console.log(session);
    //         console.log((new Date()).getTime());
    //         if((new Date()).getTime()<session.exipire){
    //             showlist(res);
    //         }
    //         else{
    //             showLogin(res);
    //         }
    //     }
    // }
    else if(cookie != undefined ){
        showlist(res);
    }
    else{
                    showLogin(res);
                }

}