// const fs   = require('fs');
// const join = require('path').join;
// const src  = process.argv[2];
// if(typeof(src) === 'undefined') {
//   console.error('请指定要删除的文件名或者目录名！');
//   process.exit(1);
// }
// if(!fs.existsSync(src)) {
//   console.error('%s not exist!', src);
//   process.exit(2);
// }
// if(fs.statSync(src).isFile()){
//     fs.unlinkSync(src);
// }
// if(fs.statSync(src).isDirectory()){
//     deleteDir(src);
// }
// function deleteDir(folder) {
//   var files = fs.readdirSync(folder);
//   for(var i=0; i<files.length; i++) {
//     var file = join(folder, files[i]);
//     if(fs.statSync(file).isFile()) {
//       fs.unlinkSync(file);
//       continue;
//     }
//     if(fs.statSync(file).isDirectory()) deleteDir(file);
//   }
//   fs.rmdirSync(folder);
// } 

const fs=require("fs");
const path=require("path");
var fileName=process.argv[2];
var pathName=path.join(__dirname,fileName);
if(fs.existsSync(pathName)){
  var statObj=fs.statSync(pathName);
  if(statObj.isFile()){
    fs.unlinkSync(pathName);
  }
  else{
    delDir(pathName);

  }
}
else{
  console.log("not exist");
}

function delDir(pathName){
  var files=fs.readdirSync(pathName);
  for(var i=0; i<files.length; i++) {
    pathName1 = path.join(pathName, files[i]);
    var statObj=fs.statSync(pathName1);
    if(statObj.isFile()) {
      fs.unlinkSync(pathName1);
      continue;
    }
    else if(statObj.isDirectory()){
      deleteDir(pathName1);
    } 
  }
  fs.rmdirSync(pathName);
  
}