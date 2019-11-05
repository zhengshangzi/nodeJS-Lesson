const https=require("https");
var apiUrl="https://api.jisuapi.com/weather/query?appkey=6d074078756352b6&city=石家庄";
apiUrl=encodeURI(apiUrl);
https.get(apiUrl,function(res){
    var result="";
    res.on("data",function(chunk){
        result+=chunk;

    })
    res.on("end",function(){
        console.log(result);
    })
})

