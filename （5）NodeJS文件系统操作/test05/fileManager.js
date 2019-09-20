// const fs=require('fs');
// const path=require('path');
// console.log("请输入要创建的文件夹：");
// process.stdin.on("data",function(data){
//     var dir=data.toString();
//     console.log(dir);
//     fs.mkdirSync(dir);
   
// /*
//     if(typeof(dir) === 'undefined') {
//         console.error('没有指定要创建的目录名称！');
//         process.exit(1);
//       }
      
//     fs.mkdirSync(dir);
//     */
// });
//讲：
const fs=require('fs');
const path=require('path');
console.log("请输入要创建的文件夹：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    //console.log(cmdArr);
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            console.log("请输入要创建的文件：");
            break;
        case "touch":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello path");
            console.log("请输入要删除的文件夹：");
            break;
        case "delete":
            var filePath=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something error");
            break;
    }
});





