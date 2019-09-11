var base64Str ="emhhbmdzYW46MTIzNDU2"
var buf = Buffer.from(base64Str, 'base64');
var buf2 = buf.toString('utf8').split(':');
if(buf2.length !== 2) {
    console.error('信息有误！');
    process.exit(2);
  }
  
  console.log('用户名:%s 密码:%s', buf2[0], buf2[1]);
  



