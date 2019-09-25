const cp=require("child_process");

/**
 * err启动子进程过程异常得到的错误对象
 * stdout 子进程输出(输出buffer数据)
 * stderr 子进程执行过程的错误对象
 */
cp.exec("node childProcess.js"+" javascript",function(err,stdout,stderr){
    if(err){
        console.log(err);
    }
    else{
        console.log(typeof stdout);
        console.log(typeof stderr);
    }
   
});