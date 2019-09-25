
const cp=require("child_process");

var childProcess=cp.spawn("node",["childProcess1"]);
var result="";
// childProcess.stdout.on("data",function(chunk){
//     console.log(result);
//     result += chunk;
// })

childProcess.stdout.on("close",function(){
    console.log(result);
})
