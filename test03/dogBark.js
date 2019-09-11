const Dog = require('./dog.js');
function onBark() {
  console.log('%s barked! energy: %s', this.name, this.energy);
}
var taidi = new Dog('taidi', 4);
var zangao = new Dog('zangao', 8);
taidi.on('bark', onBark.bind(taidi));
zangao.on('bark', onBark.bind(zangao));



