//const pi = Math.PI;
//函数
function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return{circumference:circumference,area:area};
}
module.exports = {
    circleFun:circleFun
}
/*
const pi = Math.PI;
function circleFun(){
    function circumference(){
        return pi * 2 * r;
    }
    
    function area(){
        return pi * r * r;
    }
    return {
        area: area,
        circumference: circumference
    };
}
module.exports = (r)=>{
    circleFun:circleFun
}
*/


/*
//对象
const pi = Math.PI;
module.exports = {
  circumference: (r) => pi * 2 * r,
  area: (r) => pi * r * r
};
*/



