//直接引用
var events=require('events');
const EventEmitter = events.EventEmitter;
var util=require('util');
 //构造函数
function Radio(station){
    EventEmitter.call(this);
    var that=this;
    setTimeout(() => {
        that.emit('play', station);
    }, 2000);
    
    setTimeout(() => {
        that.emit('stop', station);
    }, 4000);
};
//继承语法
util.inherits(Radio,EventEmitter); 

 
module.exports=Radio;






