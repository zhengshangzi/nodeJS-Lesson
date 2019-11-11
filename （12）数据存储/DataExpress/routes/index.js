var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var dbconfig=require('../config/dbconfig.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/add',function (req,res,next) {
  var title=req.body.title;
  var content=req.body.content;
  var con=mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      res.end('insert success');
    }

  });
});
router.get("/list",function(req,res,next){
  //数据库的连接
  var con=mysql.createConnection(dbconfig);
  //连接
  con.connect();
  //进行操作(sql语句变化)
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      //显示到页面--渲染方法--render,
      res.render("list",{chapterList:result});
    }
  })
});
router.get("/del",function(req,res,next){
  //获得在/list页面点击的ID值
  var chapterId=req.query.chapterid;
  //进行删除数据操作
  //1.连接数据库
  var con=mysql.createConnection(dbconfig);
  //2.连接
  con.connect();
  //3删除
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      //显示到页面--渲染方法--render,
      res.end('delete success');
    }
  });

});

/***
 * update chapters set content=? where chapterid=?
 */
module.exports = router;