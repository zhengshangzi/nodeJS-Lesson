//const Dog = require('./dog.js');
// function onBark() {
//   console.log('%s barked! energy: %s', this.name, this.energy);
// }
// var taidi = new Dog('taidi', 4);
// var zangao = new Dog('zangao', 8);
// taidi.on('bark', onBark.bind(taidi));
// zangao.on('bark', onBark.bind(zangao));
//console.log(Dog);

const Dog = require('./dog.js');
var dog1 = new Dog('teddy', 5);
function barkFun(){
  console.log(this.name+'barked!');
  console.log(this.energy);

};
dog1.on('bark', barkFun);
var intervalId =setInterval(function(){
  if(dog1.energy >=0){
    dog1.emit("bark");
  }
  else{
    intervalId.unref();
  }
  dog1.energy=dog1.energy-1;
},1000)




