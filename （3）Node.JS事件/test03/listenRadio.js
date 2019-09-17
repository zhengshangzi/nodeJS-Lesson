const Radio = require('./radio.js');

const station = {
  freq: '106.7',
  name: 'music radio'
};

var radio = new Radio(station);

radio.on('play', (station) => {
  console.log('"%s" FM %s opened', station.name, station.freq);
  console.log('lalala...');
});

radio.on('stop', (station) => {
  console.log('"%s" FM %s closed', station.name, station.freq);
});





