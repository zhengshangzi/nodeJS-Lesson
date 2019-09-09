/*
var timerId=setTimeout(function(){
    console.log("game over");
}, 3000);
clearTimeout(timerId);
//组织延时执行或者定时执行，回调函数的执行
timerId.unref();
*/
var timerId=setInterval(function(){
    console.log("game over");
}, 3000);
//组织延时执行或者定时执行，回调函数的执行
//timerId.unref();//不执行
timerId.ref();//执行