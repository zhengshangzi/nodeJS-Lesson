var arg1=process.argv[2];
if(arg1=="e"){
    process.exit();
}
else if(arg1== "k"){
    process.kill(process.pid);
}
else if(arg1== "-help"){
    console.log("帮助：命令参数需为算数运算式");
}
else{
    setTimeout(function(){
        console.log("延时结束");
    },5000)
}