var express = require('express');
var router = express.Router();
var dbconfig=require('../config/data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post("/login",function(req,res,next){
    if(isLegalUser(req)) {
      res.render("list",{chapterList:dbconfig.chapterList});
    }
    else{
      res.render('error', { content:'用户名，密码错误'});
    }
    
});

function isLegalUser(req) {
  var user = {
    'username': req.body.username, 
    'password': req.body.pwd
  };
  var isLegal = false;
  for(var i = 0; i < dbconfig.users.length; i++) {
    if(dbconfig.users[i].username == user.username && dbconfig.users[i].password == user.password) {
      isLegal = true;
      break;
    }
  }
  return isLegal;
}

module.exports = router;