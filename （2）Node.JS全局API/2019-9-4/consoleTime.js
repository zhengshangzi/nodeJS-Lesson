/**
 * console.time（计时标识）
 * 检测代码的执行效率的时候
 * 可以选择使用console.time() console.timeEnd()
 */
console.time("test");
function loopTimer(){
    var sum=0;
    for(var i=0;i<1000;i++){
        for(var j=0;j<100;j++){
            sum+=i*j;
        }
    }
    return sum;
}
loopTimer();
console.timeEnd("test");

/**
 * console.error()
 */
console.error('Error! something wrong!');