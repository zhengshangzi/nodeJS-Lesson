var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list', function(req, res, next){
  /**
   * render 页面的渲染
   * 读取ejs文件内容，将文件中占位符（<% %>）
   * 替换成后端按给定的数据（也就是render的第二个参数）
   * 再将文件代码的内容响应到客户端中去
   */
  res.render('list',{userName:"zhangsan",newList:[
    {"newId":1,"newTitle":"q1111111"},
    {"newId":2,"newTitle":"q2222222"}
  ]});
  // 第二个参数是一个对象 可以传数据
})
router.get('/index/list', function(req, res, next){
  res.end('hello');
})

module.exports = router;
