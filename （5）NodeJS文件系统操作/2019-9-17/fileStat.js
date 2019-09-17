const fs=require('fs');
const path=require('path');
var filePath=path.join(__dirname,"/file.txt");
var statObj=fs.statSync(filePath);
/**
 * stat.isFile()判断当前路径是否为文件
 * stat.isDirectory()判断当前路径是否为文件夹
 */
console.log(statObj.isFile());
console.log(statObj.isDirectory());
console.log(statObj);