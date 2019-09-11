function sayHello(){
    console.log("hello world");
}

function showName(){
    console.log(userName);
}
var userName="zhangsan";
module.exports = {
    sayHello:sayHello,
    showName:showName,
    userName:userName
}