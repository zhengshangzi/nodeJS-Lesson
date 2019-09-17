const fs=require('fs');
const path=require('path');
var filePath=path.join(__dirname,"/file.txt");

//fid文件描述符（唯一标识文件）
//openSync（文件路径，打开方式）
var fid=fs.openSync(filePath,"r+");
//实例化一个buf 30个字节
var buf=Buffer.alloc(30);
var len=fs.statSync(filePath).size;
fs.readSync(fid,buf,0,len,0);
console.log(buf.toString());
fs.closeSync(fid);