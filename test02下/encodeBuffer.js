var userName=process.argv[2];
var password=process.argv[3];
console.log("用户名:"+userName,"密码:"+password);
if(userName!=undefined &&password !=undefined ){
    var loginStr=userName+":"+password;
    var buf1=Buffer.from(loginStr,"utf-8");
    var base64Str=buf1.toString("base64");
    console.log("base64加密:"+base64Str);
}
else{
    console.log("用户名和密码不能为空");
}