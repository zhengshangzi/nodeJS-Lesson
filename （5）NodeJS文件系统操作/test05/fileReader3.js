const http = require("http");
const fs   = require('fs');
const file = process.argv[2] || __filename;
var server=http.createServer(function(req,res){
    if(fs.existsSync(file)) {
        var streamReader=fs.createReadStream(file);
        streamReader.pipe(res);
    } 
    else {
        console.error('%s not exist!', file);
        process.exit(1);
    }
});
server.listen(8081);
console.log("server is listening 8081");

//讲：
// const path=require("path");
// const http = require("http");
// const fs   = require('fs');

// http.createServer(function(req,res){
//     if(fileName==undefined){
//         var reader=fs.createReadStream(process.argv[1]);
//         reader.pipe(res);
//     }
//     else{
       
//     }
// }).listen(8081);
