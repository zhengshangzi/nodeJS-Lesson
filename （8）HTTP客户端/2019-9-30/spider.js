const cheerio=require("cheerio");
//const $ = cheerio.load('<h1>Hello spider</h1>');
const $ = cheerio.load("<ul><li>li node1</li></ul>");
//$('h1').text("hello node");
$("ul").append("<li>li node2</li>");
//console.log($("h1").html())
$("li").each(function(index,el){
    console.log($(this).text());
})

