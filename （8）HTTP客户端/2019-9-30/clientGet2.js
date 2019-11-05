const http=require("http");

var options={
    host:"localhost",
    port:8081,
    path:"1",
    method:"get"
}
http.get(options,function(res){
    var result="";
    res.on("data",function(chunk){
        result+=chunk;

    })
    res.on("end",function(){
        console.log(result);
    })
})