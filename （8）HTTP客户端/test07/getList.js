const url=require("url");
const querystring = require("querystring");
const https = require("https");
const cheerio = require("cheerio");
const log = console.log;
const addr = 'https://maoyan.com/films';
const http = require("http");
const fs = require("fs");
http.createServer(function(req,resObj){
    if(req.url == "/"){
        var fileContent = fs.readFileSync("index.html");
        resObj.writeHead(200,{"Content-Type":"text/html"});
        resObj.write(fileContent);
        resObj.end();
    }
    else if(req.url == "/getdata"){
        https.get(addr,function(res){
            var result="";
            res.on("data",(data) => {
                result += data.toString('utf8');
            });

            res.on("end",() => {
                var $ =cheerio.load(result);
                var movieList = [];
                $(".movie-item-title a").each(function(){
                    var movie = {};
                    movie.movieId = $(this).attr("data-val").slice(9,-1);
                    movie.movieName = $(this).text();
                    movie.movieOrange=$(this).parent().next();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        
                        movie.movieRange = "暂无评分";
                    }
                    else{
                        movie.movieRange = $(this).parent().next().children(".integer").text();
                    }
                    movie.movieRange = "暂无评分";
                    //console.log(movie);
                    movieList.push(movie);
                    console.log(movieList);
                })
                //var movieList1=JSON.stringify(movieList);
               // console.log(movieList1);
               // resObj.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
                //resObj.end(movieList);
            });
        });
    }


}).listen(8081);
console.log(8081);

