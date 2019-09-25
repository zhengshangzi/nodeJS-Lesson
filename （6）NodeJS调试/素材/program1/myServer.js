/**
 * 请求localhost:8081
 * 响应列表
 * <ul>
 *     <li> 
 *         <a href="/file?fileId=" >文件名称</a>
 *     </li>
 *     <li> 
 *         <a href="/file?fileId=" >文件名称</a>
 *     </li>
 * </ul>
 * 点击超链接时，将超链接对应的文件内容，相应到页面上
 * 显示
 */
 const http = require("http");
 const url = require("url");
 const path = require("path");
//  const fs = require("fs");

 http.createServer(httpManager).listen(8081)
 function httpManager(req, res) {
    var reqObj = url.parse(req.url, true);
    console.log(reqObj);
    var pathName = reqObj.pathname;
    switch(pathName) {
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile(reqObj, res);
            break;
        default:
            res.end("error");
            break;
    }
 }
 var fileList = ["t1.txt", "t2.txt"];
 function showIndex(res) {
    var str = "<ul>";
    for(var i = 0; i < fileList.length; i++) {
        var liNode = "<li><a href='/file?fileId" + i + "' >" +
                          fileList[i] + "</a></li>";
        str += liNode;
    }
    str = str + "</ul>";
    console.log(str1);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(str);
    res.end();
 }

 function showFile(reqObj, res) {
     var fileId = reqObj.query.fileId;
     var fileName = fileList[fileId];
     var filePath = path.join(__dirname, "/" + fileName);
     var fileContent = fs.readFileSync(filePath);
     res.end(fileContent);
 }