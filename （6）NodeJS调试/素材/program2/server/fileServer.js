const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
http.createServer(function(req, res) {
    var reqObj = url.parse(req.url, true);
    switch(reqObj.pathname) {
        case "/1.png":
            showImg(reqObj, res);
            break;
        case "/":
            showIndex(res);
            break;
        case "/getlist":
            showList(res);
            break;
    }

    
}).listen(8081);


function showImg(reqObj, res) {
    fs.readFile(path.join(__dirname, "../1.png"), function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        }
    })
}

function showIndex(res) {
    fs.readFile(path.join(__dirname, "../index.html"), function(err, data) {
        if(err) {
            console.log(err);
        }
        else  {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data.toString());
            res.end();
        }
    })
}

function showList(res) {
    var list = [
            {
                fileType: "folder",
                fileName: "书籍",
                fileSize: "30byte",
                fileTime: "2019-9-1"
            },
            {
                fileType: "folder",
                fileName: "电影",
                fileSize: "30byte",
                fileTime: "2019-9-2"
            },
            {
                fileType: "file",
                fileName: "文本",
                fileSize: "30byte",
                fileTime: "2019-9-3"
            }
        ];
    var listStr = JSON.stringify(list);
    res.end(listStr);
}



