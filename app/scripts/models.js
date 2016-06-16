var $ = require('jquery');


function Character(config){
  config = config || {};
  $.extend(this, config);
  this.isCute = true;

}

Character.prototype.bigEyes = true;


function GoodGuy(config){
  CuteAnimals.call(this, config);
}
GoodGuy.prototype = new Character();
Goodguy.prototype.speak = function(){
  return 'tiny bark';
}


function BadGuy(config){
  Characters.call(this, config);
}

BadGuy.prototype = new Character();
BadGuy.prototype.speak = function(){
  return 'purrrrrrrrrr';
}




module.export = {
  'GoodGuy': GoodGuy,
  'BadGuy' : BadGuy
}
