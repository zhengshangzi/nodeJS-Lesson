//var a=1;//StntaxError 语法关键字错误

/**
 * ReferenceError引用错误，
 * 在某一个位置使用未定义的把变量
 * 
 */
//console.log(a);

http.CreateServer(function(req,res){

    req.write("hello");
}).listen(8081)



