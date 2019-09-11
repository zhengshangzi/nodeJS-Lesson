//1.引入events模块
const events = require("events");
//console.log(events);
//2.实例化event对象
var eventEmitter = new events.EventEmitter();
//3.绑定事件，事件监听
//on--->once回调函数只执行一次，只触发一次
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
//4.触发事件,可以进行参数的传递
 eventEmitter.emit("hello","node","good");
 eventEmitter.emit("hello");