var circleModule =require("./circleModule.js");
/*
//函数
console.log("circumference"+circle(2).circumference());
console.log("area:"+circle(2).area());
/*
//对象
console.log("circumference"+circle.circumference(2));
console.log("area:"+circle.area(2));
*/
//函数
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);

console.log("圆的半径"+r);
console.log("圆的周长"+circleObj.circumference());
console.log("圆的面积"+circleObj.area());
/**
 * 1.原生模块，随node环境安装就存在的
 * 2.自定义模块，自己编写的程序
 * 3.第三方模块，在命令行中进行安装的模块，从npm服务器上下载到本地
 * 直接require("date-now");
 */