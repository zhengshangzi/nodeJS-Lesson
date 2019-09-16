const util = require('util.js');
function Parent(name){
    this.name=name;
}
Parent.prototype.show=function(){
    console.log(this.name);
},
function(){

}
util.inherits(Child,Parent);
/**
 * 1. Parent.call(this)
 * Child.prototype.__proto=Parent.prototype
 * 2. Child extends Parent{}
 * 3. util.inherits(Child,Parent); 
 */