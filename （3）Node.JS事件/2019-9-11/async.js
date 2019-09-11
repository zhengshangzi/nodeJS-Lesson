/*
//程序的同步执行   程序阻塞 或者同步执行1
const fs = require("fs");
const path = require("path");
var filePath=path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);
console.log(fileContent.toString());
console.log("end!!!");
*/

//程序的异步执行  不会阻塞后面的程序
const fs = require("fs");
const path = require("path");
var filePath=path.join(__dirname,"/file.txt");
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
console.log("end!!!");