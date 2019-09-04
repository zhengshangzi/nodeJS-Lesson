function loop(){
    console.log("I will loop forever!");
}

setTimeout(function(){
    console.log("Game over");
},5000)
//clearInterval(t)
var t = setInterval(loop, 500);
t.unref();
//t.ref();







