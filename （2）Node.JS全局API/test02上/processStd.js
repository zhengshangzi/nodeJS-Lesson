var I = {};
var i = 0;
var message = ['Name', 'Email', 'QQ', 'Mobile'];
console.log(message[0] + ':');
process.stdin.on("data",function(data){
    if(i == 3) {
        console.log(I);
        process.exit();
    } 
    else {
        I[message[i]] = data.toString('utf8');
        i++;
        console.log(message[i] + ':');
    }
});
