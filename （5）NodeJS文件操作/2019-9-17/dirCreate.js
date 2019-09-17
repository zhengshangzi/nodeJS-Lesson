const fs=require('fs');
const path=require('path');

//fs.mkdirSync("hello");

var list=fs.readdirSync(__dirname);
console.log(list);
var files=fs.readdirSync(path.join(__dirname,"/a"));
fs.unlinkSync(path.join(__dirname,"/a/"+files[0]));

fs.rmdirSync(path.join(__dirname,"/a"));