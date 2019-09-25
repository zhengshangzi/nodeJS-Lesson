/**
 * 1. debugger设置断点
 * 2. node inspect(debugger) 文件名
 * 3. c 到断点之后继续执行
 * 4. watch('变量名')
 * 5. watchers 查看监听的变量
 * 6. unwatch('变量名')
 * 7. restart 重启脚本
 */


const http = require("http");
const fs=require("fs");
const path=require("path");
const url = require("url");

debugger //设置断点
http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    debugger;
    var pathName = urlObj.pathname;
    switch(pathName){
        //http://localhost:8081/
        case "/":
            showIndex(res);
            break;
            /**
             * 网页文件在浏览器解析的过程中，如果需要一些资源
             * 会再次向服务器端发起请求
             * 图片，音频，视频
             * JS脚本，css文件
             */

        case "/1.png":
            showImg(res);
            break;
        case "/getfilelist":
                showList(res);
                break;
        case "/delfile":
                delFile(urlObj,res);
                break;  
        case "/getfile":
                getFile(urlObj,res);  
                break;
        case "/getchildfile":
                getChildFile(urlObj,res);
                break;
    }

}).listen(8081);
console.log("server is slistening to 8081");
var list=[];
function showIndex(res){
    var indexPath=path.join(__dirname,"index.html");
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(fileContent);
    res.end();
};
function showImg(res){
    var imgPath=path.join(__dirname,"1.png");
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-type":"image/png"});
    res.write(imgContent);
    res.end();
};
function showList(res){
    list=[];
    var filePath=path.join(__dirname,"fileDir");
    var files=fs.readdirSync(filePath);
    //console.log(files);
    
    for(var i = 0; i < files.length; i++) {
        var fileObj={};
        var childPath=path.join(filePath,files[i]);
        var statObj=fs.statSync(childPath);
        //console.log(statObj);
        if(statObj.isFile()){
            fileObj.fileType="file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType="folder";
        }
        fileObj.fileName=files[i];
        fileObj.fileSize=statObj.size;
        
        var birthTimer=new Date(statObj.birthtime);
        fileObj.createTime=birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+1)
        +"-"+birthTimer.getDate()+"-"+birthTimer.getHours()+":"+birthTimer.getMinutes()
        +":"+birthTimer.getSeconds();
        list.push(fileObj);
        console.log(fileObj.createTime);
    }
    var listStr=JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end()  
};
function  delFile(urlObj,res){
    console.log(urlObj);
    var timer=urlObj.query.createtime;
    console.log(timer);
    for(var i=0;i<list.length;i++){
        if(list[i].createTime==timer){
            deleteRealFile(list[i].fileName);
        }
    }
    res.end("success");
}
function deleteRealFile(fileName){
    
    var filePath=path.join(__dirname,"fileDir",fileName);
    var statObj=fs.statSync(filePath);
    if(statObj.isFile()){
        fs.unlinkSync(filePath);
    }
    else{
        delDir(filePath);
    }
    console.log(fileName);
};

function delDir(filePath){
    var files=fs.readdirSync(filePath);//得到数组结构
    for(var i=0; i<files.length; i++) {
      childPath = path.join(filePath, files[i]);
      var childStatObj=fs.statSync(childPath);
      if(childStatObj.isFile()) {
        fs.unlinkSync(childPath);
        continue;
      }
      else if(childStatObj.isDirectory()){
        delDir(childPath);
      } 
    }
    fs.rmdirSync(filePath);
  }

function getFile(urlObj,res){
    var createTime=urlObj.query.createtime;
    for(var i=0;i<list.length;i++){
        if(list[i].createTime==createTime){
            showContent(list[i].fileName,res);
        }
    }
}
function showContent(fileName,res){
    //console.log(fileName)
    var filePath=path.join(__dirname,"fileDir",fileName);
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
};
function getChildFile(urlObj,res){
    var timer=urlObj.query.createtime;
    for(var i=0;i<list.length;i++){
        if(list[i].createTime==timer){
            getChildList(list[i].fileName,res);
        }
    }
}
function getChildList(fileName,res){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var files = fs.readdirSync(filePath);
    var childList = [];
    for(var i=0;i<files.length;i++){
        var fileObj = {};
        var statObj = fs.statSync(path.join(filePath,files[i]));
        if(statObj.isFile()){
            fileObj.fileType = "file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+1)+"-"+birthTimer.getDate()+" "+birthTimer.getHours()+":"+birthTimer.getMinutes()+":"+birthTimer.getSeconds();
        childList.push(fileObj);
    }
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}

