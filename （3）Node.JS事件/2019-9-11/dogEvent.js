const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(dogName){
    //this.bark=function(){
        //1. 执行一次父构造函数，并且this指向是子构造函数的
        EventEmitter.call(this);
        this.dogName=dogName;
        var that=this;
        setTimeout(function(){
            that.emit("bark");
        },3000);
    //}
}
//子构造函数继承父构造函数prototype上面的相关方法
Dog.prototype.__proto__=EventEmitter.prototype;
var dog=new Dog("kitty");
dog.on("bark",function(){
    console.log(this.dogName + "can bark");
})

