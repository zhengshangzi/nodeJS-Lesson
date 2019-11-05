const http=require("http");
http.get("http://localhost:8081",function(res){
    
    var result="";
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })


})