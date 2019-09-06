var i=0;
var
process.stdin.on("data",function(data){
    i++;
    if(i==4){
        proess.exit();
    }
    else{
        console.log(data.toString());
    }
    
});