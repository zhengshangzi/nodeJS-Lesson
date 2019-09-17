const fs=require('fs');
const path=require('path');
var filePath=path.join(__dirname,"/file.txt");
//sync :同步读取方法
//无sync:异步执行
//下面也是异步执行
/*
*执行到异步方法时，可以注册一个事件，然后把具体的操作
 交给操作系统内核来完成，不影响后续程序的执行
 当操作系统内核完成相应操作，触发事件，执行回调函数
*/
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});
console.log("read end");