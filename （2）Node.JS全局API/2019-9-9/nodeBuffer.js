//初始化一个buffer
var buf = Buffer.alloc(10);
console.log(buf);
//将一个utf-8编码的字符串转化为buffer数据
var buf1=Buffer.from("hello","utf-8");
console.log(buf1);
//console.log(buf1.toString("base64"));
var base64Str =buf1.toString("base64");
var buf2=Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf8"));