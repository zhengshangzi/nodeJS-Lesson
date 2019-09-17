//原生模块
const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    
    // var that=this;
    // var t = setInterval(() => {
    //     if(energy > 0) {
    //         that.emit('bark');
    //         that.energy--;
    //     }
    //     if(that.energy < 0) {
    //         clearInterval(t);
    //     }
    // }, 1000);
}
Dog.prototype.__proto__=EventEmitter.prototype;

module.exports = Dog;